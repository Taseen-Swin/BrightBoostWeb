import React from 'react';
import {
  Card, CardHeader, CardContent, Avatar, Typography, Accordion,
  AccordionSummary, AccordionDetails, TextField, Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Dummy data
const dummyData = [
    {
        studentName: 'Alice',
        question: 'What is React?',
        answers: [
            {
                tutorName: 'Tutor1',
                answer: 'React is a JavaScript library for building user interfaces.'
            }
        ]
    },
    {
        studentName: 'Bob',
        question: 'What are React hooks?',
        answers: [
            {
                tutorName: 'Tutor2',
                answer: 'Hooks are a feature introduced in React 16.8 that allow you to use state and other React features without writing a class.'
            }
        ]
    }
];


function Question({ data }) {
    return (
        <Card style={{ marginBottom: '15px' }}>
            <CardHeader
                avatar={
                    <Avatar>{data.studentName.charAt(0)}</Avatar>
                }
                title={data.studentName}
                subheader="asked:"
            />
            <CardContent>
                <Typography variant="body1">{data.question}</Typography>
            </CardContent>
            {data.answers.map((answer, index) => (
                <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar>{answer.tutorName.charAt(0)}</Avatar>
                        <Typography style={{ marginLeft: '10px' }}>{answer.tutorName} answered:</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{answer.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Card>
    );
}

export default function TutorQnABoard() {
    const [newQuestion, setNewQuestion] = React.useState('');

    return (
        <div>
            <h2>Tutor Q&A Board</h2>
            <TextField
                variant="outlined"
                label="Ask a new question"
                fullWidth
                value={newQuestion}
                onChange={e => setNewQuestion(e.target.value)}
                style={{ marginBottom: '15px' }}
            />
            <Button variant="contained" color="primary" style={{ marginBottom: '15px' }}>
                Submit Question
            </Button>
            {dummyData.map((qna, index) => (
                <Question key={index} data={qna} />
            ))}
        </div>
    );
}
