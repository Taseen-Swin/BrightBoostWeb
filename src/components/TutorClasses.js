import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import ApiService from '../services/api.services';
import Button from '@mui/material/Button';

export default function TutorClasses() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const api = new ApiService();
      const { data, status }= await api.getTutorClasses(5);
      if(status==200){
        setData(data.data);
      }
     
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const rows = data.map((course) => ({
    id: course.id,
    Course: course.name,
    Day: course.session_day,
    Time: course.session_slot,
    session_id: course.session_id,
    isActive: course.isActive === "1", // Convert to boolean
  }));

  // Function to handle class selection
  const handleClassClick = (session_id) => {
    window.location.href = `/TutorQA/${session_id}`
    // console.log(`Navigating to class with ID: ${classId}`);
    // Navigate to the class details page. If using React Router or another routing library, implement it here.
  };

  const handleStartSession = async (courseID) => {

    const api = new ApiService();
    const { data, status } = await api.startSession(courseID)
    if (status == 200) {
      fetchData();
    } else {
      alert("error has occured")
    }

  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography component="h6" variant="h6">{dayOfWeek} Available Classes</Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography>Error: {error.message}</Typography>
      ) : (
        <List>
          {rows.map(cls => (
            <ListItem
              key={cls.id}
              style={{ width: '400px', alignItems: 'space-between', marginLeft: '80px' }}
            >
              <ListItemText primary={cls.Course} secondary={cls.Time} />
              {!cls.isActive ? (
                <Button variant="contained" color="primary" onClick={() => handleStartSession(cls.id)}>Start Session</Button>
              ) : (<Button variant="contained" color="primary" onClick={() => handleClassClick(cls.session_id)}>Join Now</Button>)}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
