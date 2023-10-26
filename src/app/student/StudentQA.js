import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from '../../components/Navbar';
import StudentSideNav from './StudentSideNav';
import StudentQnABoard from '../../components/StudentQnABoard';
import ApiService from '../../services/api.services';
import Button from '@mui/material/Button';

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


export default function StudentQA() {

  const currentPath = window.location.pathname;
  const [classData, setClassData] = useState([]);
  const [attdata, setAttData] = useState([]);
  // Extract the session_id from the URL
  const match = currentPath.match(/\/StudentQA\/(\d+)/);

  let session_id = 1;
  if (match) {
    // Extract the session_id from the matched URL
    session_id = match[1];
  }
  //alert(session_id)

  const fetchSessionDetails = async () => {

    const api = new ApiService();
    const { data, status } = await api.getStudentClass(session_id);
    if (status == 200) {
      setClassData(data.data);
    }


  };



  const fetchAttendence = async () => {

    const api = new ApiService();
    const { data, status } = await api.getStudentAttendance(4, session_id);
    if (status == 200) {
   
      setAttData(data.data[0]);
    }


  };

  useEffect(() => {
    fetchSessionDetails();
    fetchAttendence();
  }, []);

  // markAttendance(){

  // }

  const handleClick = async () => {
    const api = new ApiService();
    const { data, status } = await api.markStudentAttendance(4,session_id)
    if (status == 200) {
       console.log(data.message)
       fetchSessionDetails();
       fetchAttendence();
    }else{
      alert("error has occured")
    }
    // setEnrolledIds(prevIds => [...prevIds, id]);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <StudentSideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography component="h1" variant="h4" sx={{ flexGrow: 1, p: 1 }}>
                Student Q&A
              </Typography>
              <Typography component="h6" variant="h6" sx={{ p: 1, alignSelf: 'flex-start' }}>
                {classData.course_name} {attdata.MarkStatus}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Button variant="contained" color="primary" onClick={handleClick} disabled={attdata.MarkStatus == "0" ? false : true} >
                {attdata.MarkStatus == "0" ? "Mark Attendance" : "Marked"}
              </Button>
              <Typography component="h6" variant="h6" sx={{ p: 1, alignSelf: 'flex-end' }}>
                Tutor:
                {classData.tutor_names ? (
                  <ul>
                    {classData.tutor_names.map((tutor, index) => (
                      <li key={index}>
                        {index + 1}. {tutor}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No tutors available</p>
                )}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>



    </>
  )
}