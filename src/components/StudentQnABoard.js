import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText, TextField, Typography, Paper, Divider } from '@mui/material';
import { courseData, postQuestionToCourse } from '../components/SharedDataStore';

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
      { id: 101, Days: 'Mon', Course: 'Math for Business', Time: timeSlots[0] },
      { id: 102, Days: 'Mon', Course: 'English Languages for Beginner', Time: timeSlots[1] },
      { id: 103, Days: 'Mon', Course: 'Coding for Beginner', Time: timeSlots[2] },
      { id: 104, Days: 'Tue', Course: 'Coding for Professional', Time: timeSlots[3] },
      { id: 105, Days: 'Tue', Course: 'Mastery in ChatGPT', Time: timeSlots[4] },
      { id: 106, Days: 'Wed', Course: null, Time: timeSlots[5] },
      { id: 107, Days: 'Thurs', Course: 'Learn Thai for "Business"', Time: timeSlots[6] },
      { id: 108, Days: 'Fri', Course: 'Meme Genarator', Time: timeSlots[7] },
      { id: 109, Days: 'Fri', Course: 'Project inquiry', Time: timeSlots[8] },
  ];

// Mock API
const API = {
  fetchCourses: () => Promise.resolve(rows),
  postQuestion: (id, question) => Promise.resolve(true), // This should ideally update the database or backend system
};

function  StudentQnABoard() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    API.fetchCourses().then(fetchedCourses => {
      setCourses(fetchedCourses);
    });
  }, []);

  const handleQuestionSubmit = () => {
    if (selectedCourse) {
      if (postQuestionToCourse(selectedCourse.id, question)) {
        const updatedCourses = courses.map(course => {
          if (course.id === selectedCourse.id) {
            return { ...course, question };
          }
          return course;
        });
        setCourses(updatedCourses);
        setQuestion('');
        alert('Your question has been submitted!');
      } else {
        alert('Error submitting your question. Please try again.');
      }
    }
  };

  /*
  const handleQuestionSubmit = () => {
    if (selectedCourse) {
      API.postQuestion(selectedCourse.id, question).then(success => {
        if (success) {
          const updatedCourses = courses.map(course => {
            if (course.id === selectedCourse.id) {
              return { ...course, question };
            }
            return course;
          });
          setCourses(updatedCourses);
          setQuestion('');
          alert('Your question has been submitted!');
        } else {
          alert('Error submitting your question. Please try again.');
        }
      });
    }
  }; */

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Typography variant="h4">Course Schedule & Q&A</Typography>
      <Divider style={{ margin: '16px 0' }}/>
      <List>
        {courses.map(course => (
          <ListItem key={course.id} button onClick={() => setSelectedCourse(course)}>
            <ListItemText 
              primary={`[${course.Days}] ${course.Course || 'TBD'} - ${course.Time}`}
              secondary={course.question ? `Q: ${course.question}` : ''}
            />
          </ListItem>
        ))}
      </List>
      {selectedCourse && (
        <div>
          <Typography variant="h6" style={{ marginTop: '16px' }}>
            Post a question for {selectedCourse.Course || 'TBD'}
          </Typography>
          <TextField 
            label="Your Question"
            multiline 
            rows={3}
            variant="outlined"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            fullWidth
            style={{ marginTop: '8px' }}
          />
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleQuestionSubmit}
            style={{ marginTop: '8px' }}
          >
            Submit Question
          </Button>
        </div>
      )}
    </Paper>
  );
}

export default StudentQnABoard;

