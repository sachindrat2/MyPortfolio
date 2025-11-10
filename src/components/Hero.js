
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const Hero = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', background: 'transparent', zIndex: 2 }}>
  <Card sx={{ maxWidth: 480, width: '100%', bgcolor: 'linear-gradient(135deg, var(--bg-paper) 70%, var(--accent) 100%)', boxShadow: '0 4px 18px rgba(7,10,20,0.14)', borderRadius: 6, textAlign: 'center', p: 5, border: '1.5px solid var(--primary)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
      <CardContent>
  <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" alt="Sachindra kr.Thakur" sx={{ width: 120, height: 120, mx: 'auto', mb: 3, boxShadow: 2, border: '3px solid var(--primary)' }} />
        <Typography variant="h3" component="h1" sx={{ color: 'primary.main', fontWeight: 700, mb: 3, letterSpacing: 1 }}>
          Sachindra kr.Thakur
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.08rem', lineHeight: 1.7, fontWeight: 500 }}>
          Versatile Software Engineer building modern, high-performance applications across mobile, web, and cross-platform environments.<br/>
          Skilled in Kotlin, Jetpack Compose, KMP, Flutter, Dart, and Android Native. I create scalable, maintainable solutions for Android, iOS, and beyond.<br/>
          Passionate about design, performance, security, and delivering intelligent, user-centric software.
        </Typography>
        <Button href="#projects" variant="contained" size="large" color="primary" sx={{ fontWeight: 600, borderRadius: 4, boxShadow: 1, px: 4, py: 1.5, fontSize: '1rem', mr: 2 }}>
          View My Work
        </Button>
        <Button href="/cv.pdf" variant="outlined" size="large" color="primary" sx={{ fontWeight: 600, borderRadius: 4, boxShadow: 1, px: 4, py: 1.5, fontSize: '1rem' }} download>
          Download CV
        </Button>
      </CardContent>
    </Card>
  </Box>
);

export default Hero;
