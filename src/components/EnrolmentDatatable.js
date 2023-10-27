import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Dialog, DialogTitle, DialogContent, DialogActions, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';
import { Typography } from '@mui/material';
import ApiService from '../services/api.services';



const ActionButton = ({ id, enrol, onAction }) => {

  const isEnrolled = enrol == 1 ? true : false;

  const handleClick = async () => {
    const userID = localStorage.getItem('userID');
    if (userID == null) {
      window.location.href = '/'
    }

    const api = new ApiService();
    const { data, status } = await api.enrollStudentInClass(userID, id)
    if (status == 200) {
      onAction();
    } else {
      alert("error has occured")
    }
    // setEnrolledIds(prevIds => [...prevIds, id]);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick} disabled={isEnrolled}>
      {isEnrolled ? "Enrolled" : "Click to Enrol"}
    </Button>
  );
}

const FeedbackDialog = ({ open, onClose }) => {
  const [rating, setRating] = React.useState('5');
  const [comment, setComment] = React.useState('');

  const handleSubmit = () => {
    // Process the feedback here (e.g., send it to a backend API)
    console.log(`Rating: ${rating}, Comment: ${comment}`);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Give Feedback</DialogTitle>
      <DialogContent>
        <Typography variant="h6">Rating:</Typography>
        <RadioGroup
          row
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        >
          {[5, 4, 3, 2, 1].map((star) => (
            <FormControlLabel
              key={star}
              value={String(star)}
              control={<Radio color="primary" />}
              label={`${star} Stars`}
            />
          ))}
        </RadioGroup>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Comment"
          multiline
          rows={4}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};





export default function StudentDataTable() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [data, setData] = useState([]); // Store the data from the API

  const handleOpenFeedback = () => {
    setFeedbackOpen(true);
  };

  const handleCloseFeedback = () => {
    setFeedbackOpen(false);
  };

  const fetchData = async () => {
    const userID = localStorage.getItem('userID')
    if (userID == null) {
      window.location.href = '/'
    }

    const api = new ApiService();
    const response = await api.getStudentEnrollments(userID);

    setData(response.data.data);

  };

  useEffect(() => {

    fetchData();

  }, []);


  const columns = [
    { field: 'id', headerName: 'Class ID', width: 70 },
    { field: 'Course', headerName: 'Course', width: 330 },
    { field: 'Days', headerName: 'Days', width: 130 },
    {
      field: 'Time',
      headerName: 'Time Slot',
      type: 'number',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      width: 230,
      renderCell: (params) => <ActionButton id={params.row.id} enrol={params.row.enrol} onAction={fetchData} />,
    }
  ];

  const row = Array.from(data);

  // Define your rows based on the data you fetched
  const rows = row.map((course) => ({
    id: course.id,
    Course: course.name,
    // description: course.description,
    Days: course.session_day,
    Time: course.session_slot,
    enrol: course.enrol
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}