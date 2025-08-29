export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Sales" value="$12,450" color="bg-black" />
        <StatCard title="New Users" value="1,250" color="bg-black" />
        <StatCard title="Pending Orders" value="76" color="bg-black" />
        <StatCard title="Revenue" value="$45,300" color="bg-black" />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6 mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-gray-600 list-disc pl-5">
          <li>John placed an order worth $500</li>
          <li>New user registered: Sarah</li>
          <li>Product MacBook Pro added to catalog</li>
        </ul>
      </div>

      {/* Additional Sections */}

      {/* Top Products */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Top Products</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-2 flex justify-between text-gray-700">
            <span>🖥 MacBook Pro 14</span>
            <span className="font-semibold">$2,100</span>
          </li>
          <li className="py-2 flex justify-between text-gray-700">
            <span>📱 iPhone 14</span>
            <span className="font-semibold">$1,200</span>
          </li>
          <li className="py-2 flex justify-between text-gray-700">
            <span>⌚ Apple Watch</span>
            <span className="font-semibold">$399</span>
          </li>
        </ul>
      </div>

      {/* Latest Customers */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Latest Customers</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center justify-between">
            <span>👤 Alice Johnson</span>
            <span className="text-sm text-gray-500">Joined 2 days ago</span>
          </li>
          <li className="flex items-center justify-between">
            <span>👤 David Smith</span>
            <span className="text-sm text-gray-500">Joined 4 days ago</span>
          </li>
          <li className="flex items-center justify-between">
            <span>👤 Emma Brown</span>
            <span className="text-sm text-gray-500">Joined 1 week ago</span>
          </li>
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-black text-white rounded cursor-pointer hover:bg-indigo-700">➕ Add Product</button>
          <button className="px-4 py-2 bg-black text-white rounded cursor-pointer hover:bg-green-700">👥 New Customer</button>
          <button className="px-4 py-2 bg-black text-white rounded cursor-pointer hover:bg-gray-700">📊 View Reports</button>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white mb-4 text-lg font-bold`}>
        {title[0]}
      </div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-2 text-xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
