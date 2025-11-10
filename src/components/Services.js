import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const services = [
  {
    title: 'Mobile App Development',
    description: 'Cross-platform and native mobile apps using Kotlin, Jetpack Compose, and Flutter. Scalable, performant, and beautiful.'
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive web applications with React, MUI, and best-in-class UI/UX.'
  },
  {
    title: 'API & Cloud Integration',
    description: 'Seamless integration of REST APIs, cloud services, and AI agents for intelligent, connected solutions.'
  },
  {
    title: 'UI/UX Design',
    description: 'Clean, user-centric design with a focus on accessibility, performance, and security.'
  }
];

const Services = () => (
  <Box id="services" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: { xs: 8, sm: 10 }, px: { xs: 2, sm: 4 }, zIndex: 2 }}>
    <Typography variant="h3" sx={{ color: 'var(--primary)', fontWeight: 700, mb: 5, letterSpacing: 1, textAlign: 'center' }}>
      My Services
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', width: '100%', maxWidth: 1100 }}>
      {services.map((service, idx) => (
        <Card key={idx} sx={{
          minWidth: 260,
          maxWidth: 320,
          flex: '1 1 260px',
          background: 'rgba(35,39,58,0.82)',
          borderRadius: 5,
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
          border: '1.5px solid rgba(80,120,220,0.18)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          p: 3,
          m: 1,
          transition: 'box-shadow 0.2s, border 0.2s',
        }}>
          <CardContent>
            <Typography variant="h5" sx={{ color: 'var(--accent)', fontWeight: 700, mb: 2, letterSpacing: 0.5 }}>
              {service.title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.6 }}>
              {service.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Box>
);

export default Services;
