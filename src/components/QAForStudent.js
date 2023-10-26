import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Paper, Divider, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ApiService from '../services/api.services';

function QAForStudent() {
  const currentPath = window.location.pathname;
  const [question, setQuestion] = useState('');
  const [pendingQuestions, setPendingQuestions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [tutorName, setTutorName] = useState(''); // To store the tutor name of the selected class

  const match = currentPath.match(/\/StudentQA\/(\d+)/);

  let session_id = 0;
  if (match) {
    // Extract the session_id from the matched URL
    session_id = match[1];
  }

  const handleAskQuestion = async () => {
    const api = new ApiService();
    if (question.trim()) {
      const { data, status } = await api.postStudentQuestion(session_id, 4, question)
      if (status == 200) {
        fetchAnswers();
      } else {
        alert("error has occured")
      }
      // setPendingQuestions([...pendingQuestions, question]);
      setQuestion('');
    }
  };



  const fetchAnswers = async () => {
    const api = new ApiService();
     const { data, status }= await api.getStudentAnswerList(session_id);
    const rows = data.data;

    setAnsweredQuestions(rows.filter(item => item.answerstatus === 'done'));
    setPendingQuestions(rows.filter(item => item.answerstatus === 'pending'));

  };

  useEffect(() => {
    const intervalId = setInterval(fetchAnswers, 5000); // Fetch data every 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);



  return (
    <div>
      {/* <Typography variant="h5">Active Class:</Typography> */}

      {/* <FormControl variant="outlined" style={{ marginTop: 20, minWidth: 250 }}>
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
      </FormControl> */}

      {/* {tutorName && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Tutor: {tutorName}
        </Typography>
      )} */}

      <Divider style={{ margin: '20px 0' }} />

      <Paper elevation={2} style={{ padding: '20px' }}>
        <TextField
          fullWidth
          label="Question to ask"
          variant="outlined"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ marginRight: '20px', marginBottom: '20px' }}
        />
        <Button variant="contained" color="primary" onClick={handleAskQuestion}>
          Submit
        </Button>
      </Paper>

      <Divider style={{ margin: '20px 0' }} />



      {pendingQuestions.length > 0 && (
        <>
          <Typography variant="h6">Pending response</Typography>
          {pendingQuestions.map((item, index) => (
            <Paper key={index} elevation={2} style={{ padding: '20px', margin: '10px 0' }}>
              {index + 1}. {item.question}
            </Paper>
          ))}
        </>
      )}

      <Divider style={{ margin: '20px 0' }} />
      <Typography variant="h6">Response</Typography>
      {answeredQuestions.map((qAndA, index) => (
        <Paper key={index} elevation={2} style={{ padding: '20px', margin: '10px 0' }}>
          <Typography variant="body1"><strong>Question:</strong> {qAndA.question}</Typography>
          <Typography variant="body2"><strong>Answer:</strong> {qAndA.answer}</Typography>
          <Typography variant="caption">Answer by {qAndA.answerBy}</Typography>
        </Paper>
      ))}
    </div>
  );
}

export default QAForStudent;
