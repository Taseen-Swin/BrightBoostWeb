import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, Divider } from '@mui/material';

function QATutor() {
  const [pendingQuestions, setPendingQuestions] = useState([
    // I'm initializing with example questions for demonstration.
    // In reality, you'd probably fetch these from a database or API.
    "What's the difference between var and let?",
    "How does 'this' work in JavaScript?"
  ]);

  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState('');

  const handleAnswerQuestion = (questionIndex) => {
    if (currentAnswer.trim()) {
      const questionToAnswer = pendingQuestions[questionIndex];
      const newAnsweredQuestion = {
        question: questionToAnswer,
        answer: currentAnswer,
        datetime: new Date().toLocaleString(),
        tutorName: 'Tutor Name' // This should come from the current tutor's session or profile
      };

      setAnsweredQuestions([...answeredQuestions, newAnsweredQuestion]);
      setPendingQuestions(pendingQuestions.filter((_, index) => index !== questionIndex));
      setCurrentAnswer(''); // Clear the answer box
    }
  };

  return (
    <div>
      <Typography variant="h5">Pending Questions:</Typography>

      {pendingQuestions.map((question, index) => (
        <Paper key={index} elevation={2} style={{ padding: '20px', margin: '10px 0' }}>
          <Typography variant="body1">{question}</Typography>

          <TextField
            fullWidth
            label="Answer"
            variant="outlined"
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            style={{ marginTop: '20px', marginRight: '20px' }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
            onClick={() => handleAnswerQuestion(index)}
          >
            Submit Answer
          </Button>
        </Paper>
      ))}

      <Divider style={{ margin: '20px 0' }} />

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
      )}
    </div>
  );
}

export default QATutor;
