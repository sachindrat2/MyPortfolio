
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Fade from '@mui/material/Fade';

const Contact = () => (
  <Box sx={{ position: 'relative', py: 8, px: 2, minHeight: '40vh', zIndex: 2 }} id="contact">
    <Fade in={true} timeout={900}>
  <Card sx={{
    maxWidth: 520,
    mx: 'auto',
    bgcolor: 'linear-gradient(135deg, var(--bg-paper) 70%, var(--accent) 100%)',
    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
    borderRadius: 4,
    p: 4,
    textAlign: 'center',
    border: '1.5px solid var(--primary)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    transition: 'box-shadow 0.2s, border 0.2s',
  }}>
        <CardContent>
          <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 'bold', mb: 3, letterSpacing: 2 }}>
            Contact Me
          </Typography>
          <Stack component="form" spacing={2} sx={{ mb: 3 }}>
            <TextField label="Your Name" variant="filled" required fullWidth sx={{ input: { color: 'text.primary' }, '& .MuiInputLabel-root': { color: 'primary.main' }, bgcolor: 'background.default', borderRadius: 2 }} />
            <TextField label="Your Email" variant="filled" required fullWidth sx={{ input: { color: 'text.primary' }, '& .MuiInputLabel-root': { color: 'primary.main' }, bgcolor: 'background.default', borderRadius: 2 }} />
            <TextField label="Your Message" variant="filled" required fullWidth multiline rows={4} sx={{ textarea: { color: 'text.primary' }, '& .MuiInputLabel-root': { color: 'primary.main' }, bgcolor: 'background.default', borderRadius: 2 }} />
            <Button type="submit" variant="contained" color="primary" sx={{ fontWeight: 'bold', borderRadius: 3, boxShadow: 2 }}>
              Send Message
            </Button>
          </Stack>
          <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 2 }}>
            <Button href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', fontWeight: 600, textTransform: 'none', ':hover': { color: 'info.main' } }}>Email</Button>
            <Button href="https://www.linkedin.com/in/sachindra-thakur-280077139/" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', fontWeight: 600, textTransform: 'none', ':hover': { color: 'info.main' } }}>LinkedIn</Button>
            <Button href="https://github.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', fontWeight: 600, textTransform: 'none', ':hover': { color: 'info.main' } }}>GitHub</Button>
          </Stack>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>Subscribe to my Newsletter</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center" component="form" onSubmit={e => e.preventDefault()}>
              <TextField type="email" label="Your Email" variant="filled" required sx={{ bgcolor: 'background.paper', borderRadius: 2, input: { color: 'text.primary' }, label: { color: 'primary.main' }, minWidth: 220 }} />
              <Button type="submit" variant="contained" sx={{ bgcolor: 'primary.main', color: 'background.default', fontWeight: 'bold', borderRadius: 3, boxShadow: 2, ':hover': { bgcolor: 'secondary.main', color: '#fff' } }}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Fade>
  </Box>
);

export default Contact;
