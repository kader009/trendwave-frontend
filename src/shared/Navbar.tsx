'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
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

const navItems = ['Home', 'About', 'Services', 'Contact'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="w-64" onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem component="button" key={item}>
            <Link href={`/${item.toLowerCase()}`} className="w-full">
              <ListItemText primary={item} />
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
            <Typography variant="h6" className="text-white font-bold">
              TrendWave
            </Typography>

            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Button key={item} color="inherit" className="text-black">
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
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
