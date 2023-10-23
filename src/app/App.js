import logo from '../assists/logo.svg';
import './App.css';
import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    student: {
      main: '#4a90e2',
      dark: '#357ab7',
    },
    tutor: {
      main: '#66bb6a',
      dark: '#4f9a58',
    },
    admin: {
      main: '#ef5350',
      dark: '#d43d3d',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline>
    <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
    <div>
      <Typography component="h1" variant="h3">Directory for all pages</Typography>
      <Button
              type="submit"
              fullWidth
              variant="contained"
              color="student"
              sx={{ mt: 3, mb: 2 }}
              href="/StudentLogin"
            >
              Student Sign In/Up page
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="student"
              sx={{ mt: 1, mb: 2 }}
              href="/StudentHome"
            >
              Student Home Pages
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="admin"
              sx={{ mt: 1, mb: 2 }}
              href="/AdminLogin"
            >
              Admin Login Page
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="admin"
              sx={{ mt: 1, mb: 2 }}
              href="/AdminHome"
            >
              Admin Home Pages
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="tutor"
              sx={{ mt: 1, mb: 2 }}
              href="/TutorLogin"
            >
              Tutor Login Pages
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="tutor"
              sx={{ mt: 1, mb: 2 }}
              href="/TutorHome"
            >
              Tutor Home Pages
            </Button>
            
    </div>
    </Box>
    </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
