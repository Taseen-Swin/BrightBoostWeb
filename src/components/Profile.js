import React from 'react';
import {
  Avatar,
  Button,
  Typography,
  Paper,
  Box,
  CssBaseline,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logged out');
    navigate('/');
  };

  return (
    <Box component="main" maxWidth="xs" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CssBaseline />
      <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          sx={{
            m: 1,
            bgcolor: 'secondary.main',
            width: theme => theme.spacing(7),
            height: theme => theme.spacing(7)
          }}
        >
          <AccountCircle fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          User's Name
        </Typography>
        <Typography variant="body2" color="textSecondary">
          user@example.com
        </Typography>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
}

export default Profile;
