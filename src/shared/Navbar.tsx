'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { useState } from 'react';
import Container from '@/components/ui/Container';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Flash sale', path: '/flash-sale' },
  { label: 'About us', path: '/about-us' },
  { label: 'Contact', path: '/contact' },
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

  // Mobile Drawer content
  const drawer = (
    <div className="w-64" onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem component="button" key={item.label}>
            <Link href={item.path} className="w-full">
              <ListItemText primary={item.label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar
        position="static"
        className="bg-white"
        elevation={0}
        sx={{ backgroundColor: '#1E293B' }}
      >
        <Container>
          <Toolbar
            className="flex justify-between items-center"
            disableGutters={true}
          >
            {/* Brand Name */}
            <Typography variant="h6" className="text-white font-bold">
              TrendWave
            </Typography>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Button key={item.label} color="inherit" className="text-white">
                  <Link href={item.path}>{item.label}</Link>
                </Button>
              ))}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <IconButton
                onClick={handleDrawerToggle}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon className="text-white" />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </div>
  );
};

export default Navbar;
