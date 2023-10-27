import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Paper, Divider } from '@mui/material';
import ApiService from '../services/api.services';

function QATutor() {
  const [pendingQuestions, setPendingQuestions] = useState([]);
  const initialAnswers = {};
  const [Answers, setAnswers] = useState(initialAnswers);
  const currentPath = window.location.pathname;
  
  const match = currentPath.match(/\/TutorQA\/(\d+)/);

  let session_id = 0;
  if (match) {
    // Extract the session_id from the matched URL
    session_id = match[1];
  }


  const fetchQuestion = async () => {
    const api = new ApiService();
    const { data, status } = await api.getTutorQuestion(session_id);
    if (status == 200) {
      setPendingQuestions( data.data);
    }

  };

  useEffect(() => {
    const intervalId = setInterval(fetchQuestion, 5000); // Fetch data every 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);




  const handleAnswerQuestion =  async (questionIndex) => {
    const currentAnswer = Answers[questionIndex];
    if (currentAnswer.trim()) {
      const userID = localStorage.getItem('userID')
      const api = new ApiService();
      const { data, status } = await api.postAnswer(session_id, userID, currentAnswer,questionIndex)
      if (status == 200) {
        setPendingQuestions('')
        fetchQuestion();
        alert("Success");
      } else {
        alert("error has occured")
      }

      // const questionToAnswer = pendingQuestions[questionIndex];
      // const newAnsweredQuestion = {
      //   question: questionToAnswer,
      //   answer: currentAnswer,
      //   datetime: new Date().toLocaleString(),
      //   tutorName: 'Tutor Name' // This should come from the current tutor's session or profile
      // };

      // setAnsweredQuestions([...answeredQuestions, newAnsweredQuestion]);
      // setPendingQuestions(pendingQuestions.filter((_, index) => index !== questionIndex));
      setAnswers(''); // Clear the answer box
    }
  };

  const handleInputChange = (questionId, newValue) => {
    // Update the answer in the dictionary when the input changes
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: newValue,
    }));
  };

  return (
    <div>
      <Typography variant="h5">Pending Questions:</Typography>

      {pendingQuestions.length > 0 && (pendingQuestions.map((question, index) => (
        <Paper key={index} elevation={2} style={{ padding: '20px', margin: '10px 0' }}>
          <Typography variant="body1">{question.question}</Typography>

          <TextField
            fullWidth
            label="Answer"
            variant="outlined"
            value={Answers[question.id] || ''} // Use the answer from the state
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            style={{ marginTop: '20px', marginRight: '20px' }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
            onClick={() => handleAnswerQuestion(question.id)}
          >
            Submit Answer
          </Button>
        </Paper>
      )))}

      <Divider style={{ margin: '20px 0' }} />
{/* 
      {answeredQuestions.length > 0 && (
        <>
          <Typography variant="h6">Answered Questions:</Typography>
          {answeredQuestions.map((qAndA, index) => (
            <Paper key={index} elevation={2} style={{ padding: '20px', margin: '10px 0' }}>
              <Typography variant="body1"><strong>Question:</strong> {qAndA.question}</Typography>
              <Typography variant="body2"><strong>Answer:</strong> {qAndA.answer}</Typography>
              <Typography variant="caption">{qAndA.datetime} by {qAndA.tutorName}</Typography>
            </Paper>
          ))}
        </>
      )} */}
    </div>
  );
}

export default QATutor;
