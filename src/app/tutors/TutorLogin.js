import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CenterFocusStrong } from '@mui/icons-material';
import CenteredTabs from '../../components/CenteredTab';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ApiService from '../../services/api.services';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://bit.ly/3BlS71b">
        Bright Boost
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.





const defaultTheme = createTheme();

export default function TutorLogin() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const i = new FormData(event.currentTarget);

    const apiService = new ApiService();
    const { data, status } = await apiService.tutorLogin(i.get('email'), i.get('password'));
    if (status == 200) {
      const userID = data.user[0].id
      const userEmail = data.user[0].email
      const type = data.user[0].type
      console.log(userID)
      localStorage.setItem('userID', userID);
      localStorage.setItem('userEmail', userEmail);
      localStorage.setItem('type', type);
      window.location.href = '/TutorHome'
    } else {
      console.log("Response data:", data);
      console.log("Response status:", status);
      setDialogMessage("Incorrect Password Or Email");
      setOpen(true);
    }
  };

  const [open, setOpen] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState(''); // New state

  const handleClickOpen = (messageType) => {
    if (messageType === 'password') {
      setDialogMessage('Please contact Head of Administrator for password recovery.');
    } else {
      setDialogMessage('Please contact Head of Administrator for account creation.');
    }
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Bright Boost </Typography>
          <Typography component="h1" variant="h5" style={{ whiteSpace: 'pre-line' }}>
            After School Programs : Tutor<br /><br /></Typography>
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
      
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {dialogMessage}
            </DialogContentText>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

      </Container>
    </ThemeProvider>
  );
}
