'use client';

import Link from 'next/link';
import { useState } from 'react';
import Container from '@/components/ui/Container';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About us', path: '/about-us' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Products', path: '/products' },
  { label: 'Flash sale', path: '/flash-sale' },
  { label: 'Login', path: '/login' },
];

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-slate-800 text-white">
        <Container>
          <div className="flex justify-between items-center py-4">
            {/* Brand Name */}
            <div className="text-xl font-bold">TrendWave</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className="hover:text-slate-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
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
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded"
              onClick={handleDrawerToggle}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay when drawer is open */}
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
