
import './App.css';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


function App() {
  // Fixed palette, no theme switching, now dark
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#181d2a',      // matches --bg-default
        paper: '#23273a',        // matches --bg-paper
      },
      primary: { main: '#3561a7' },      // matches --primary
      secondary: { main: '#5d3fae' },    // matches --secondary
      accent: { main: '#e6b800' },       // matches --accent
      success: { main: '#81c784' },
      error: { main: '#e57373' },
      warning: { main: '#e6b800' },
      info: { main: '#4fc3f7' },
      text: {
        primary: '#eaf0fa',      // matches --text-primary
        secondary: '#bfc9dd',    // matches --text-secondary
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" style={{ position: 'relative', zIndex: 2, minHeight: '100vh', background: theme.palette.background.default, display: 'flex', flexDirection: 'column' }}>
        <AnimatedBackground />
        <div style={{ position: 'relative', zIndex: 2, flex: 1 }}>
          <Navbar />
          <About />
          <Services />
          <Projects />
          <Contact />
          {/* Floating Hire Me Button */}
          <a
            href="mailto:sachindra.thakur@example.com"
            style={{
              position: 'fixed',
              bottom: '2.5rem',
              right: '2.5rem',
              zIndex: 2000,
              textDecoration: 'none',
            }}
          >
            <button
              style={{
                background: 'linear-gradient(90deg, var(--accent) 0%, var(--primary) 100%)',
                color: '#23273a',
                border: 'none',
                borderRadius: '50px',
                padding: '1.1rem 2.2rem',
                fontWeight: 700,
                fontSize: '1.15rem',
                letterSpacing: 1,
                boxShadow: '0 8px 32px 0 rgba(230,184,0,0.18)',
                cursor: 'pointer',
                textTransform: 'uppercase',
                outline: 'none',
                transition: 'transform 0.18s, box-shadow 0.18s',
                animation: 'hireMePulse 1.8s infinite',
              }}
            >
              Hire Me
            </button>
          </a>
          <style>{`
            @keyframes hireMePulse {
              0% { box-shadow: 0 0 0 0 rgba(230,184,0,0.18); transform: scale(1); }
              60% { box-shadow: 0 0 0 16px rgba(230,184,0,0.04); transform: scale(1.08); }
              100% { box-shadow: 0 0 0 0 rgba(230,184,0,0.18); transform: scale(1); }
            }
          `}</style>
        </div>
        <footer style={{
          width: '100%',
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          padding: '2rem 0 1.2rem 0',
          letterSpacing: 1,
          zIndex: 3,
          background: 'transparent',
          fontFamily: `'Pacifico', 'Caveat', 'Dancing Script', cursive, sans-serif`,
        }}>
          &copy; {new Date().getFullYear()} Sachindra kr.Thakur. All rights reserved.
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
