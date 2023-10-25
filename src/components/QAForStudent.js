import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, Divider, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function QAForStudent() {
  const [question, setQuestion] = useState('');
  const [pendingQuestions, setPendingQuestions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [tutorName, setTutorName] = useState(''); // To store the tutor name of the selected class

  const handleAskQuestion = () => {
    if (question.trim()) {
      setPendingQuestions([...pendingQuestions, question]);
      setQuestion('');
    }
  };

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
    { id: 101, Days: 'Mon', Course: 'Math for Business', Time: timeSlots[0], Tutor: 'Mr. Smith' },
    { id: 102, Days: 'Mon', Course: 'English Languages for Beginner', Time: timeSlots[1], Tutor: 'Mrs. Johnson' },
    { id: 103, Days: 'Mon', Course: 'Coding for Beginner', Time: timeSlots[2], Tutor: 'Dr. Williams' },
    { id: 104, Days: 'Tue', Course: 'Coding for Professional', Time: timeSlots[3], Tutor: 'Prof. Brown' },
    { id: 105, Days: 'Tue', Course: 'Mastery in ChatGPT', Time: timeSlots[4], Tutor: 'Mr. Anderson' },
    { id: 106, Days: 'Wed', Course: null, Time: timeSlots[5], Tutor: null },  // No course and tutor for this slot
    { id: 107, Days: 'Thurs', Course: 'Learn Thai for "Business"', Time: timeSlots[6], Tutor: 'Miss Davis' },
    { id: 108, Days: 'Fri', Course: 'Meme Generator', Time: timeSlots[7], Tutor: 'Mr. Martinez' },
    { id: 109, Days: 'Fri', Course: 'Project inquiry', Time: timeSlots[8], Tutor: 'Dr. Rodriguez' },
  ];
  

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    const selectedRow = rows.find(row => row.Course === e.target.value);
    if (selectedRow) {
      setTutorName(selectedRow.Tutor);
    } else {
      setTutorName(''); // Reset tutor name if no class is matched (e.g., a timeslot with no course)
    }
  }

  return (
    <div>
      <Typography variant="h5">Active Class:</Typography>

      <FormControl variant="outlined" style={{ marginTop: 20, minWidth: 250 }}>
        <InputLabel id="class-label">Select Class</InputLabel>
        <Select
          labelId="class-label"
          value={selectedClass}
          onChange={handleClassChange}
          label="Select Class"
        >
          {rows.map((row) => (
            <MenuItem key={row.id} value={row.Course}>
              {row.Course || "No Course for this slot"}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {tutorName && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Tutor: {tutorName}
        </Typography>
      )}

      <Divider style={{ margin: '20px 0' }} />

      <Paper elevation={2} style={{ padding: '20px' }}>
        <TextField
          fullWidth
          label="Question to ask"
          variant="outlined"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ marginRight: '20px' }}
        />
        <Button variant="contained" color="primary" onClick={handleAskQuestion}>
          Submit
        </Button>
      </Paper>

      <Divider style={{ margin: '20px 0' }} />

      {pendingQuestions.length > 0 && (
        <>
          <Typography variant="h6">Pending response</Typography>
          {pendingQuestions.map((q, index) => (
            <Paper key={index} elevation={2} style={{ padding: '20px', margin: '10px 0' }}>
              {q}
            </Paper>
          ))}
        </>
      )}

      <Divider style={{ margin: '20px 0' }} />

      {answeredQuestions.map((qAndA, index) => (
        <Paper key={index} elevation={2} style={{ padding: '20px', margin: '10px 0' }}>
          <Typography variant="body1"><strong>Question:</strong> {qAndA.question}</Typography>
          <Typography variant="body2"><strong>Answer:</strong> {qAndA.answer}</Typography>
          <Typography variant="caption">{qAndA.datetime} by {qAndA.tutorName}</Typography>
        </Paper>
      ))}
    </div>
  );
}

export default QAForStudent;
