import React from 'react';
import StudentSideNav from './StudentSideNav';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { DataGrid } from '@mui/x-data-grid';
import StudentDataTable from '../../../components/EnrolmentDatatable';


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


export default function StudentEnrolment() {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
    <StudentSideNav/>
    <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <DrawerHeader />
        <Typography component="h1" variant="h4" sx={{flexGrow: 1, p: 1}}>Enrolment Page</Typography>
        <Typography paragraph>
        Please selected the class you interested below; <br />
          Once clicked, you will be enrolled. <br />
          Decided to withdraw the option ?, please contact studentHQ<br />
        </Typography>
        <div style={{ height: 400, width: '100%' }}>
          <StudentDataTable></StudentDataTable>
        </div>
      </Box>
    </Box>

     </>
  )
}
