import logo from '../assists/logo.svg';
import './App.css';
import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
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
              sx={{ mt: 3, mb: 2 }}
              href="/StudentLogin"
            >
              Student Sign In/Up page
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              href="/AdminLogin"
            >
              Admin Login Page
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              href="/AdminHome"
            >
              Admin Pages
            </Button>
    </div>
    </Box>
    </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
