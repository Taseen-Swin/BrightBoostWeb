import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const timeSlots = [
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
  "17:00 - 18:00"
];

const rows = [
  { id: 101, enrolment: '20%', Course: 'Math for Business', Time: timeSlots[0], meetingLink: "https://zoom.us/j/101XXXXXXXX" },
  { id: 102, enrolment: '50%', Course: 'English Languages for Beginner', Time: timeSlots[1], meetingLink: "https://teams.microsoft.com/l/meetup-join/102XXXXXXXX" },
  { id: 103, enrolment: '100%', Course: 'Coding for Beginner', Time: timeSlots[2], meetingLink: "https://zoom.us/j/103XXXXXXXX" },
  { id: 104, enrolment: '10%', Course: 'Coding for Professional', Time: timeSlots[3], meetingLink: "https://teams.microsoft.com/l/meetup-join/104XXXXXXXX" },
  { id: 105, enrolment: '100%', Course: 'Mastery in ChatGPT', Time: timeSlots[4], meetingLink: "https://zoom.us/j/105XXXXXXXX" },
  { id: 106, enrolment: '50%', Course: 'Elective', Time: timeSlots[5], meetingLink: "https://teams.microsoft.com/l/meetup-join/106XXXXXXXX" },
  { id: 107, enrolment: '100%', Course: 'Learn Thai for "Business"', Time: timeSlots[6], meetingLink: "https://zoom.us/j/107XXXXXXXX" },
  { id: 108, enrolment: '100%', Course: 'Meme Generator', Time: timeSlots[7], meetingLink: "https://teams.microsoft.com/l/meetup-join/108XXXXXXXX" },
  { id: 109, enrolment: '50%', Course: 'Project Inquiry', Time: timeSlots[8], meetingLink: "https://zoom.us/j/109XXXXXXXX" },
];


export default function TutorClasses() {

  // Function to handle class selection
  const handleClassClick = (classId) => {
    console.log(`Navigating to class with ID: ${classId}`);
    // Navigate to the class details page. If using React Router or another routing library, implement it here.
  };

  // Function to handle the start session button click
  const handleStartSession = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Box 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'top',
      alignItems: 'left', 
      height: '100vh', 
      width: '40vw'
    }}
  >
      <Typography component="h1" variant="h4">Available Classes</Typography>
      <List>
        {rows.map(cls => (
          <ListItem key={cls.id} button onClick={() => handleClassClick(cls.id)}>
            <ListItemText primary={cls.Course} secondary={cls.Time} />
            <Button variant="contained" color="primary" onClick={() => handleStartSession(cls.meetingLink)}>Start Session</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
