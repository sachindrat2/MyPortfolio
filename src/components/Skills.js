
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Grow from '@mui/material/Grow';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'CSS', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'UI/UX Design', level: 70 },
];

const Skills = () => (
  <Box sx={{ position: 'relative', py: 8, px: 2, minHeight: '40vh', zIndex: 2 }} id="skills">
    <Typography variant="h3" align="center" sx={{ color: '#00bcd4', fontWeight: 'bold', mb: 6, letterSpacing: 2 }}>
      Skills
    </Typography>
  <Box sx={{ maxWidth: 600, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
      {skills.map((skill, idx) => (
        <Grow in={true} timeout={600 + idx * 300} key={idx}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            bgcolor: 'rgba(35,39,58,0.82)',
            borderRadius: 3,
            p: 2,
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
            border: '1.5px solid rgba(80,120,220,0.18)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            transition: 'box-shadow 0.2s, border 0.2s',
          }}>
            <Typography sx={{ flex: 1, color: '#00bcd4', fontWeight: 600 }}>{skill.name}</Typography>
            <Box sx={{ flex: 3, mx: 2 }}>
              <LinearProgress variant="determinate" value={skill.level} sx={{ height: 12, borderRadius: 2, bgcolor: '#23263a', '& .MuiLinearProgress-bar': { bgcolor: 'linear-gradient(90deg, #00bcd4 0%, #2196f3 100%)' } }} />
            </Box>
            <Typography sx={{ color: '#cfd8dc', fontWeight: 500 }}>{skill.level}%</Typography>
          </Box>
        </Grow>
      ))}
    </Box>
  </Box>
);

export default Skills;
