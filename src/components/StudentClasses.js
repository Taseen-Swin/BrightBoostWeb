import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import ApiService from '../services/api.services';

export default function StudentClasses() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const api = new ApiService();
      const response = await api.getStudentClasses(4);
      setData(response.data.data);
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
    window.location.href = `/StudentQA/${session_id}`
    // console.log(`Navigating to class with ID: ${classId}`);
    // Navigate to the class details page. If using React Router or another routing library, implement it here.
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
              onClick={() => handleClassClick(cls.session_id)}
              button={cls.isActive} // Make it clickable only for active classes
            >
              <ListItemText primary={cls.Course} secondary={cls.Time} />
              {cls.isActive && (
                <Typography style={{ color: 'green' ,marginLeft:'40px'}}>IsActive</Typography>
              )}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
