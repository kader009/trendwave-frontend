'use client';

import Image from 'next/image';
import { useAllUserQuery, useUpdateUserMutation } from '@/redux/api/endApi';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { toast } from 'sonner';
import Spinner from '@/components/Sppiner';

interface userData {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

const AllUser = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  const {
    data: users,
    isLoading,
    refetch,
  } = useAllUserQuery(user?.email, {
    pollingInterval: 2000,
  });
  const [updateUser] = useUpdateUserMutation();

  const handleRoleUpdate = async (id: string) => {
    try {
      await updateUser(id);
      toast.success('User role updated successfully');
      refetch();
    } catch (err) {
      toast.error('Failed to update role');
      console.error(err);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="max-w-[84rem] mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 text-black">All Users</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-[700px] w-full text-sm text-left border border-gray-200">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((u: userData) => (
              <tr key={u._id} className="border-t hover:bg-gray-50 transition">
                <td className="px-4 py-3">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden">
                    <Image
                      src={u.image || '/default-user.png'}
                      alt={u.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="px-4 py-3 font-medium text-gray-900">
                  {u.name}
                </td>
                <td className="px-4 py-3 text-gray-700">{u.email}</td>
                <td className="px-4 py-3">
                  <span className="inline-block bg-blue-100 text-black text-xs font-semibold px-3 py-1 rounded-full capitalize whitespace-nowrap">
                    {u.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    className="text-sm bg-black text-white px-4 py-1 rounded hover:bg-gray-700 transition whitespace-nowrap cursor-pointer"
                    onClick={() => handleRoleUpdate(u._id)}
                  >
                    Change Role
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users?.length === 0 && (
          <p className="text-center py-4 text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default AllUser;
