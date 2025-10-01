import AnimatedCounter from '@/components/animation/AnimatedCounter';
import {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
  UserPlus,
  Package,
  WatchIcon,
  Phone,
  BookAIcon,
  Plus as AddProduct,
  BarChart,
} from 'lucide-react';

export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Dashboard Overview
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard
          title="Total Sales"
          value="$12,450"
          icon={<DollarSign />}
          color="from-indigo-500 to-purple-500"
        />
        <StatCard
          title="New Users"
          value="1,250"
          icon={<Users />}
          color="from-green-500 to-emerald-500"
        />
        <StatCard
          title="Pending Orders"
          value="76"
          icon={<ShoppingCart />}
          color="from-yellow-500 to-orange-500"
        />
        <StatCard
          title="Revenue"
          value="$45,300"
          icon={<TrendingUp />}
          color="from-pink-500 to-red-500"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6 mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Recent Activity
        </h2>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-center gap-3">
            <ShoppingCart className="text-blue-500" size={20} />
            <span>
              John placed an order worth{' '}
              <span className="font-semibold">$500</span>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <UserPlus className="text-green-500" size={20} />
            <span>
              New user registered: <span className="font-semibold">Sarah</span>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Package className="text-purple-500" size={20} />
            <span>Product MacBook Pro added to catalog</span>
          </li>
        </ul>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Top Products
        </h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-3 flex justify-between items-center">
            <span className="flex items-center gap-2">
              <BookAIcon /> MacBook Pro 14
            </span>
            <span className="font-semibold text-gray-800">$2,100</span>
          </li>
          <li className="py-3 flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Phone /> iPhone 14
            </span>
            <span className="font-semibold text-gray-800">$1,200</span>
          </li>
          <li className="py-3 flex justify-between items-center">
            <span className="flex items-center gap-2">
              <WatchIcon /> Apple Watch
            </span>
            <span className="font-semibold text-gray-800">$399</span>
          </li>
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-4 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 flex justify-center items-center gap-2">
            <AddProduct /> Add Product
          </button>
          <button className="px-4 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium hover:opacity-90 flex justify-center items-center gap-2">
            <UserPlus /> New Clients
          </button>
          <button className="px-4 py-4 rounded-lg bg-gradient-to-r from-gray-600 to-gray-800 text-white font-medium hover:opacity-90 flex justify-center items-center gap-2">
            <BarChart /> View Reports
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}) {
  const numericValue =
    typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) : value;
  const unit = typeof value === 'string' && value.includes('$') ? '$' : '';

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div
        className={`w-12 h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white mb-4 text-lg`}
      >
        {icon}
      </div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-2 text-2xl font-bold text-gray-900">
        {unit}
        <AnimatedCounter value={numericValue} />
      </p>
    </div>
  );
}
