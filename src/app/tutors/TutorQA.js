import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from '../../components/Navbar';
import TutorQnABoard from '../../components/TutorQnABoard';
import TutorSideNav from './TutorSideNav';
import QATutor from '../../components/QATutor';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

/*const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
*/
const drawerWidth = 240;


export default function TutorQA() {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
    <TutorSideNav/>
    <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <DrawerHeader />
        <Typography component="h1" variant="h4" sx={{flexGrow: 1, p: 1}}>Tutor Q&A</Typography>
        <QATutor></QATutor>
      </Box>
    </Box>


     </>
  )
}