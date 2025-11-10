import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'My Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const curr = window.scrollY;
      if (curr < 10) {
        setShow(true);
      } else if (curr > lastScroll.current) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      lastScroll.current = curr;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'fixed', top: 0, left: 0, zIndex: 1200, pointerEvents: 'none', transition: 'transform 0.35s cubic-bezier(.4,0,.2,1)', transform: show ? 'translateY(0)' : 'translateY(-120%)' }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          width: { xs: '96%', sm: 'auto' },
          mt: { xs: 2, sm: 3 },
          borderRadius: 8,
          background: 'rgba(35,39,58,0.92)',
          border: '1.5px solid rgba(80,120,220,0.18)',
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          pointerEvents: 'auto',
          px: { xs: 1, sm: 3 },
          py: 0.5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'box-shadow 0.2s, border 0.2s',
        }}
      >
        <Toolbar sx={{ width: '100%', justifyContent: 'center', minHeight: 56 }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                onClick={e => {
                  e.preventDefault();
                  const el = document.querySelector(link.href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{
                  mx: 1.5,
                  borderRadius: 3,
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  textTransform: 'none',
                  fontSize: '1.05rem',
                  px: 2,
                  py: 1,
                  letterSpacing: 0.5,
                  boxShadow: 'none',
                  transition: 'color 0.18s, background 0.18s',
                  '&:hover': {
                    color: 'var(--accent)',
                    background: 'rgba(255,255,255,0.04)',
                    transform: 'none',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', width: '100%', justifyContent: 'center' }}>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)} sx={{ borderRadius: 2, background: 'rgba(255,255,255,0.04)', color: 'var(--text-primary)' }}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{ sx: { bgcolor: 'rgba(35,39,58,0.96)', color: 'var(--text-primary)', borderLeft: '1.5px solid rgba(80,120,220,0.18)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' } }}>
            <Box sx={{ width: 220 }} role="presentation">
              <List>
                {navLinks.map((link) => (
                  <ListItem key={link.label} disablePadding>
                    <ListItemButton
                      component="a"
                      href={link.href}
                      onClick={e => {
                        e.preventDefault();
                        setDrawerOpen(false);
                        const el = document.querySelector(link.href);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      sx={{
                        color: 'var(--text-primary)',
                        borderRadius: 2,
                        mx: 1,
                        my: 0.5,
                        '&:hover': {
                          color: 'var(--accent)',
                          background: 'rgba(255,255,255,0.04)',
                        },
                      }}
                    >
                      <ListItemText primary={link.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
