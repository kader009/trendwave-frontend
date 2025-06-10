'use client';
import Container from '@/components/ui/Container';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import {
  SetEmail,
  SetName,
  SetPassword,
  SetPhotoUrl,
  SetRole,
} from '@/redux/features/authentication/registerSlice';
import { useSignUpMutation } from '@/redux/api/endApi';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type FormData = {
  name: string;
  email: string;
  password: string;
  image: string;
  role: string;
};

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { name, email, password, image, role } = useAppSelector(
    (state: RootState) => state.register
  );
  const [signUp] = useSignUpMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const { name, email, password, image, role } = data;
      const user = await signUp({ name, email, password, image, role });
      console.log('user data', user);

      toast.success('registration successfull');
      router.replace('/login');

      dispatch(SetName(''));
      dispatch(SetEmail(''));
      dispatch(SetPhotoUrl(''));
      dispatch(SetPassword(''));
      dispatch(SetRole(''));
    } catch (error) {
      console.log(error);
      toast.error('something went wrong!')
    }
  };

  return (
    <Container>
      <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-6 p-4 sm:p-6 md:p-10">
        {/* Right Side Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md space-y-4"
          >
            <h1 className="text-3xl font-bold text-center">Register</h1>

            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 border rounded"
                placeholder="Your Name"
                value={name}
                onChange={(e) => dispatch(SetName(e.target.value))}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format',
                  },
                })}
                className="w-full px-4 py-2 border rounded"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => dispatch(SetEmail(e.target.value))}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                className="w-full px-4 py-2 border rounded"
                placeholder="********"
                value={password}
                onChange={(e) => dispatch(SetPassword(e.target.value))}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Image URL */}
            <div>
              <label className="block mb-1 font-medium">Image URL</label>
              <input
                type="text"
                {...register('image', { required: 'Image URL is required' })}
                className="w-full px-4 py-2 border rounded"
                placeholder="https://example.com/image.jpg"
                value={image}
                onChange={(e) => dispatch(SetPhotoUrl(e.target.value))}
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>

            {/* Role Selector */}
            <div>
              <label className="block mb-1 font-medium">Select Role</label>
              <select
                {...register('role', { required: 'Role is required' })}
                className="w-full px-4 py-2 border rounded dark:bg-gray-900"
                value={role}
                onChange={(e) => dispatch(SetRole(e.target.value))}
              >
                <option value="">Select a role</option>
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full dark:bg-gray-600 bg-black text-white py-2 rounded hover:bg-gray-700 transition"
            >
              Register
            </button>

            {/* Login Link */}
            <p className="text-center text-sm">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/register.svg"
            width={500}
            height={500}
            alt="Register Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </Container>
  );
}
