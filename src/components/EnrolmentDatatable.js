import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

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

const ActionButton = ({ id, enrolledIds, setEnrolledIds }) => {
  const isEnrolled = enrolledIds.includes(id);

  const handleClick = () => {
      setEnrolledIds(prevIds => [...prevIds, id]);
  };

  return (
      <Button variant="contained" color="primary" onClick={handleClick} disabled={isEnrolled}>
          {isEnrolled ? "Enrolled" : "Click to Enrol"}
      </Button>
  );
}


export default function StudentDataTable() {
  const [enrolledIds, setEnrolledIds] = React.useState([]);

  const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'Course', headerName: 'Course', width: 330 },
      { field: 'Tutors', headerName: 'Tutors', width: 130 },
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
          renderCell: (params) => <ActionButton id={params.row.id} enrolledIds={enrolledIds} setEnrolledIds={setEnrolledIds} />,
      },
  ];

  const rows = [
    { id: 1, Tutors: 'Snow', Course: 'Math for Business', Time: timeSlots[0] },
    { id: 2, Tutors: 'Lannister', Course: 'English Languages for Beginner', Time: timeSlots[1] },
    { id: 3, Tutors: 'Lannister', Course: 'Coding for Beginner', Time: timeSlots[2] },
    { id: 4, Tutors: 'Stark', Course: 'Coding for Professional', Time: timeSlots[3] },
    { id: 5, Tutors: 'Targaryen', Course: 'Mastery in ChatGPT', Time: timeSlots[4] },
    { id: 6, Tutors: 'Melisandre', Course: null, Time: timeSlots[5] },
    { id: 7, Tutors: 'Clifford', Course: 'Learn Thai for "Business"', Time: timeSlots[6] },
    { id: 8, Tutors: 'Frances', Course: 'Meme Genarator', Time: timeSlots[7] },
    { id: 9, Tutors: 'Roxie', Course: 'Project inquiry', Time: timeSlots[8] },
];

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
              checkboxSelection
          />
      </div>
  );
}