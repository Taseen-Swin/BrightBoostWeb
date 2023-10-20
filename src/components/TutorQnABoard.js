import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText, TextField, Typography, Paper, Divider } from '@mui/material';
import { courseData, postAnswerToCourse } from '../components/SharedDataStore';

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
    saveAnswer: (id, answer) => Promise.resolve(true),
  };

  function TutorQnABoard() {
    /*
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState(''); */ 
    const [courses, setCourses] = useState(courseData);  // Directly use shared data
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [answer, setAnswer] = useState('');
  
    useEffect(() => {
      API.fetchCourses().then(fetchedCourses => {
        setCourses(fetchedCourses);
      });
    }, []);

    const handleAnswerSubmit = () => {
        if (selectedCourse && selectedCourse.question) { // make sure there's a question to answer
          if (postAnswerToCourse(selectedCourse.id, answer)) {
            const updatedCourses = courses.map(course => {
              if (course.id === selectedCourse.id) {
                return { ...course, answer };
              }
              return course;
            });
            setCourses(updatedCourses);
            setAnswer('');
            alert('Your answer has been submitted!');
          } else {
            alert('Error submitting your answer. Please try again.');
          }
        }
    };
      /*
    const handleAnswerSubmit = () => {
        if (selectedCourse) {
          API.saveAnswer(selectedCourse.id, answer).then(success => {
            if (success) {
              const updatedCourses = courses.map(course => {
                if (course.id === selectedCourse.id) {
                  return { ...course, question, answer };
                }
                return course;
              });
              setCourses(updatedCourses);
              setQuestion('');
              setAnswer('');
            }
          });
        }
      };*/
      
      return (
        <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h4">Tutor's Course Schedule & Q&A</Typography>
            <Divider style={{ margin: '16px 0' }}/>
            <List>
                {courses.map(course => (
                    <ListItem key={course.id} button onClick={() => setSelectedCourse(course)}>
                        <ListItemText 
                            primary={`[${course.Days}] ${course.Course || 'TBD'} - ${course.Time}`}
                            secondary={course.question ? `Q: ${course.question}${course.answer ? `\nA: ${course.answer}` : ''}` : 'No questions yet.'}
                        />
                    </ListItem>
                ))}
            </List>
            {selectedCourse && selectedCourse.question && (
                <div>
                    <Typography variant="h6" style={{ marginTop: '16px' }}>
                        Answer the question for {selectedCourse.Course || 'TBD'}
                    </Typography>
                    <TextField 
                        label="Question"
                        multiline 
                        rows={2}
                        variant="outlined"
                        value={selectedCourse.question}
                        InputProps={{ readOnly: true }} // make the question read-only
                        fullWidth
                        style={{ marginTop: '8px' }}
                    />
                    <TextField 
                        label="Answer"
                        multiline 
                        rows={4}
                        variant="outlined"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        fullWidth
                        style={{ marginTop: '8px' }}
                    />
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={handleAnswerSubmit}
                        style={{ marginTop: '8px' }}
                    >
                        Submit Answer
                    </Button>
                </div>
            )}
        </Paper>
    );
}

export default TutorQnABoard;