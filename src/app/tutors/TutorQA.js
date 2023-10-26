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
import Button from '@mui/material/Button';
import ApiService from '../../services/api.services';

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

  const currentPath = window.location.pathname;
  
  const match = currentPath.match(/\/TutorQA\/(\d+)/);

  let session_id = 0;
  if (match) {
    // Extract the session_id from the matched URL
    session_id = match[1];
  }

  const handleClick = async () => {
    const api = new ApiService();
    const { data, status } = await api.endSession(session_id)
    if (status == 200) {
       console.log(data.message)
       window.location.href = `/TutorHome/`
    }else{
      alert("error has occured")
    }
    // setEnrolledIds(prevIds => [...prevIds, id]);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <TutorSideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Button variant="contained" color="primary" onClick={handleClick}  >
            End Session
          </Button>
          <Typography component="h1" variant="h4" sx={{ flexGrow: 1, p: 1 }}>Tutor Q&A</Typography>
          <QATutor></QATutor>
        </Box>
      </Box>


    </>
  )
}