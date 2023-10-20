import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Statistics() {
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
          { id: 101, enrolment: '20%', Course: 'Math for Business', Time: timeSlots[0] },
          { id: 102, enrolment: '50%', Course: 'English Languages for Beginner', Time: timeSlots[1] },
          { id: 103, enrolment: '100%', Course: 'Coding for Beginner', Time: timeSlots[2] },
          { id: 104, enrolment: '10%', Course: 'Coding for Professional', Time: timeSlots[3] },
          { id: 105, enrolment: '100%', Course: 'Mastery in ChatGPT', Time: timeSlots[4] },
          { id: 106, enrolment: '50%', Course: 'Elective', Time: timeSlots[5] },
          { id: 107, enrolment: '100%', Course: 'Learn Thai for "Business"', Time: timeSlots[6] },
          { id: 108, enrolment: '100%', Course: 'Meme Generator', Time: timeSlots[7] },
          { id: 109, enrolment: '50%', Course: 'Project Inquiry', Time: timeSlots[8] },
      ];
    const studentParticipationData = rows.map(row => ({ 
        name: row.Time, 
        value: parseInt(row.enrolment) 
    }));
  
    // Example: Assuming tutors participate at twice the student rate (for demonstration)
    const tutorParticipationData = rows.map(row => ({ 
        name: row.Time, 
        value: Math.min(100, parseInt(row.enrolment) * 2) 
    }));

    const studentFeedbackData = rows.map(row => ({
        name: row.Time,
        value: row.feedback
    }));

    const tutorResponsivenessData = rows.map(row => ({
        name: row.Time,
        value: row.responsiveness
    }));


    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 5 }}>
            <Typography variant="h5" align="center" mb={3}>
                Course Statistics
            </Typography>
            <Grid container spacing={3}>
                {[studentParticipationData, tutorParticipationData, studentFeedbackData, tutorResponsivenessData].map((dataSet, index) => (
                    <Grid item xs={6} key={index}>
                        <Typography variant="h6" align="center">
                            {["Student Participation", "Tutor Participation", "Student Feedback Score", "Tutor Responsiveness"][index]}
                        </Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={dataSet}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill={["#8884d8", "#82ca9d", "#ffc658", "#83a6ed"][index]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}


export default Statistics;
