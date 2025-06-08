'use client';

import Link from 'next/link';
import { useState } from 'react';
import Container from '@/components/ui/Container';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { logout } from '@/redux/features/authentication/userSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Image from 'next/image'; // 👈 Import Image component

const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className || ''}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.replace('/login');
    toast.success('Logout successfully');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-slate-800 text-white">
        <Container>
          <div className="flex justify-between items-center py-4">
            {/* Brand Name */}
            <div className="text-xl font-bold">
              <Link href="/">TrendWave</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <Link href="/" className="hover:text-slate-300 transition-colors">
                Home
              </Link>
              <Link
                href="/about-us"
                className="hover:text-slate-300 transition-colors"
              >
                About us
              </Link>
              <Link
                href="/products"
                className="hover:text-slate-300 transition-colors"
              >
                Products
              </Link>
              <Link
                href="/flash-sale"
                className="hover:text-slate-300 transition-colors"
              >
                Flash Sale
              </Link>

              {user?.email ? (
                <>
                  <Link
                    href="/dashboard"
                    className="hover:text-slate-300 transition-colors"
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="hover:text-slate-300 transition-colors"
                  >
                    Logout
                  </button>

                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={`https://i.pravatar.cc/40?u=${user.email}`}
                      alt="User"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                </>
              ) : (
                <Link
                  href="/login"
                  className="hover:text-slate-300 transition-colors"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={handleDrawerToggle} aria-label="Toggle menu">
                <MenuIcon className="text-white" />
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <span className="text-xl font-bold text-slate-800">Menu</span>
          <button onClick={handleDrawerToggle} aria-label="Close menu">
            ✕
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <Link
            href="/"
            className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded"
            onClick={handleDrawerToggle}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded"
            onClick={handleDrawerToggle}
          >
            About us
          </Link>
          <Link
            href="/products"
            className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded"
            onClick={handleDrawerToggle}
          >
            Products
          </Link>
          <Link
            href="/flash-sale"
            className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded"
            onClick={handleDrawerToggle}
          >
            Flash Sale
          </Link>

          {user?.email ? (
            <>
              <Link
                href="/dashboard"
                className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded"
                onClick={handleDrawerToggle}
              >
                Dashboard
              </Link>

              <button
                onClick={() => {
                  handleLogout();
                  handleDrawerToggle();
                }}
                className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded text-left cursor-pointer"
              >
                Logout
              </button>

              <div className="px-4 py-2">
                <Image
                  src={`https://i.pravatar.cc/40?u=${user.email}`}
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
            </>
          ) : (
            <Link
              href="/login"
              className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded"
              onClick={handleDrawerToggle}
            >
              Login
            </Link>
          )}
        </nav>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={handleDrawerToggle}
        />
      )}
    </div>
  );
};

export default Navbar;
