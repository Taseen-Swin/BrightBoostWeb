import * as React from 'react';
import {
  Typography, Card, CardContent, Divider, Rating, Accordion, AccordionSummary, 
  AccordionDetails, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const feedbackData = [
    {
      classId: 101,
      studentName: "John Doe",
      rating: 5,
      comment: "Amazing class! I learned a lot."
    },
    {
      classId: 101,
      studentName: "Alice Johnson",
      rating: 4,
      comment: "Very informative. I wish we had more hands-on tasks."
    },
    {
      classId: 101,
      studentName: "Bob Brown",
      rating: 4,
      comment: "Thoroughly enjoyed the class. Looking forward to more sessions."
    },
    {
      classId: 102,
      studentName: "Jane Smith",
      rating: 3,
      comment: "It was okay. I would have liked more interactive examples."
    },
    {
      classId: 102,
      studentName: "Eva White",
      rating: 2,
      comment: "The pace was a bit too fast for me."
    },
    {
      classId: 102,
      studentName: "George Green",
      rating: 5,
      comment: "Loved every bit of it. The instructor was very clear."
    },
    {
      classId: 103,
      studentName: "Tom Blue",
      rating: 3,
      comment: "Decent class. Could use more real-world examples."
    },
    {
      classId: 103,
      studentName: "Sophia Teal",
      rating: 4,
      comment: "Found the class very useful. Thank you!"
    },
    // ... you can continue adding more feedback for other classes
];

  
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

function FeedbackCard({ feedback }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{feedback.studentName}</Typography>
        <Rating value={feedback.rating} readOnly />
        <Divider sx={{ my: 1 }} />
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>View Comment</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{feedback.comment}</Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}

export default function ClassFeedbackPage() {
    const [selectedClass, setSelectedClass] = React.useState('');
    const [filter, setFilter] = React.useState("");
  
    const filteredFeedback = feedbackData
      .filter(feedback => !selectedClass || feedback.classId === Number(selectedClass))
      .filter(feedback => !filter || feedback.rating === Number(filter));
  
    return (
      <div>
        <Typography variant="h4" sx={{ mb: 3 }}>Class Feedback</Typography>
  
        <FormControl variant="outlined" sx={{ mb: 3, minWidth: 150 }}>
          <InputLabel>Select Class</InputLabel>
          <Select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} label="Select Class">
            <MenuItem value="">
              <em>All Classes</em>
            </MenuItem>
            {rows.map(row => (
              <MenuItem key={row.id} value={row.id}>{row.Course} ({row.Time})</MenuItem>
            ))}
          </Select>
        </FormControl>
  
        <FormControl variant="outlined" sx={{ mb: 3, minWidth: 150 }}>
          <InputLabel>Filter by Rating</InputLabel>
          <Select value={filter} onChange={(e) => setFilter(e.target.value)} label="Filter by Rating">
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {[5, 4, 3, 2, 1].map(star => (
              <MenuItem key={star} value={star}>{star} Stars</MenuItem>
            ))}
          </Select>
        </FormControl>
  
        {filteredFeedback.map((feedback, index) => (
          <FeedbackCard key={index} feedback={feedback} />
        ))}
      </div>
    );
  }
  
