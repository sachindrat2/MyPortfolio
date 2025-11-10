
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';


const About = () => {
  const [showMore, setShowMore] = useState(false);
  const introShort = (
    <>
      <strong>Sachindra kr.Thakur</strong> — I craft seamless digital experiences that blend design, code, and AI. From mobile apps to full-stack web, I turn ideas into beautiful, scalable products using the latest in Kotlin, Compose, and cross-platform tech. Let’s build what’s next.
    </>
  );
  const introFull = (
    <>
      {introShort}
      <br/><br/>
      I specialize in modern UI/UX, cloud-native solutions, and integrating AI to deliver smart, user-focused apps. My toolkit spans Kotlin Multiplatform, Flutter, and cloud APIs. I thrive on rapid prototyping, clean code, and collaborating with teams to launch products that stand out in today’s fast-moving tech landscape.
    </>
  );
  return (
  <Box id="about" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', background: 'transparent', zIndex: 2, px: { xs: 1, sm: 2, md: 4 }, mt: { xs: 14, sm: 16, md: 18 } }}>
      <Card sx={{
        maxWidth: 900,
        width: '100%',
        background: 'rgba(35,39,58,0.82)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.28)',
        borderRadius: 6,
        p: { xs: 3, sm: 4, md: 6 },
        border: '1.5px solid rgba(80,120,220,0.18)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        transition: 'box-shadow 0.2s, border 0.2s',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'center' },
          justifyContent: 'center',
          py: 4,
          px: { xs: 2, md: 6 },
          gap: { xs: 6, md: 10 },
          width: '100%',
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {/* Image Left Side */}
          <Box
            sx={{
              width: { xs: 180, sm: 220, md: 260 },
              height: { xs: 220, sm: 300, md: 340 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: '0 8px 24px 0 rgba(0,87,255,0.08)',
              background: 'var(--muted)',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: 10,
                overflow: 'hidden',
                boxShadow: '0 12px 36px 0 rgba(35,35,91,0.22)',
                border: '4px solid',
                borderImage: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%) 1',
                background: 'rgba(255,255,255,0.10)',
              }}
            >
              <Box
                component="img"
                src="assets/profile.jpg"
                alt="Profile Photo"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: 10,
                  boxShadow: '0 8px 32px 0 rgba(25,118,210,0.18)',
                  filter: 'brightness(1.05) saturate(1.1)',
                  transform: 'rotateY(18deg) rotateX(8deg)',
                  transition: 'transform 0.4s',
                  willChange: 'transform',
                  background: '#23273a',
                  '&:hover': {
                    transform: 'rotateY(0deg) rotateX(0deg) scale(1.06)',
                    boxShadow: '0 20px 56px 0 rgba(25,118,210,0.28)',
                  },
                }}
              />
            </Box>
          </Box>
          {/* About Content Right Side */}
          <Box sx={{
            flex: 1,
            minWidth: 260,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'center' },
            textAlign: { xs: 'center', md: 'center' },
            alignSelf: { xs: 'center', md: 'center' },
          }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'var(--primary)', letterSpacing: 1 }}>
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'var(--text-primary)',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                fontFamily: `'Poppins', 'Georgia', 'Times New Roman', serif`,
                letterSpacing: 0.1,
                fontStyle: 'italic',
              }}
            >
              {showMore ? introFull : introShort}
            </Typography>
            <Button
              variant="text"
              color="primary"
              sx={{ mb: 2, fontWeight: 500, fontSize: '1rem', textTransform: 'none' }}
              onClick={() => setShowMore(v => !v)}
            >
              {showMore ? 'Show Less' : 'Show More'}
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 1, borderRadius: 4, fontWeight: 600, background: 'linear-gradient(90deg, var(--secondary) 0%, var(--primary) 100%)', color: '#fff', boxShadow: '0 2px 8px rgba(35,43,91,0.10)', px: 4, py: 1.5, fontSize: '1rem' }}
              href="/cv.pdf"
              download
            >
              Download CV
            </Button>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/sachindra-thakur-280077139/"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                aria-label="LinkedIn"
                sx={{ bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1, '&:hover': { bgcolor: 'var(--primary)', color: '#fff' } }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                aria-label="GitHub"
                sx={{ bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1, '&:hover': { bgcolor: 'var(--primary)', color: '#fff' } }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default About;
