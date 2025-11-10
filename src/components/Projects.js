
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

const projects = [
  {
    title: 'Modern Portfolio',
    description: 'A sleek, animated portfolio website built with React.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'E-commerce App',
    description: 'A full-featured e-commerce platform with payment integration.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support and comments.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
];

const Projects = () => (
  <Box sx={{ position: 'relative', py: 8, px: 2, minHeight: '60vh', zIndex: 2 }} id="projects">
    <Typography variant="h3" align="center" sx={{ color: '#00bcd4', fontWeight: 'bold', mb: 6, letterSpacing: 2 }}>
        Projects
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {projects.map((project, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Grow in={true} timeout={600 + idx * 300}>
            <Card sx={{
              borderRadius: 5,
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.14)',
              mb: 2,
              bgcolor: 'linear-gradient(135deg, var(--bg-paper) 70%, var(--accent) 100%)',
              border: '1.5px solid var(--primary)',
              transition: 'box-shadow 0.3s, border 0.2s, transform 0.35s cubic-bezier(.22,1,.36,1)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              willChange: 'transform, box-shadow',
              animation: 'floatCard 3.2s ease-in-out infinite',
              '@keyframes floatCard': {
                '0%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-10px)' },
                '100%': { transform: 'translateY(0px)' },
              },
              '&:hover': {
                transform: 'translateY(-18px) scale(1.045)',
                boxShadow: '0 20px 56px 0 rgba(0,188,212,0.22)',
                borderColor: 'var(--accent)',
              },
            }}>
              <CardMedia
                component="img"
                height="180"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              />
              <CardContent>
                <Typography variant="h5" sx={{ color: '#00bcd4', fontWeight: 'bold', mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#cfd8dc', mb: 2 }}>
                  {project.description}
                </Typography>
                <Button href={project.link} target="_blank" rel="noopener noreferrer" variant="contained" sx={{ bgcolor: '#00bcd4', color: '#181a20', fontWeight: 'bold', borderRadius: 3, boxShadow: 2, ':hover': { bgcolor: '#2196f3', color: '#fff' } }}>
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
