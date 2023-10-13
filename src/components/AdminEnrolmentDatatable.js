import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { randomNumberBetween } from '@mui/x-data-grid/utils/utils';

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


export default function AdminDataTable() {
  const [enrolledIds, setEnrolledIds] = React.useState([]);

  const columns = [
      { field: 'id', headerName: 'Class ID', width: 70 },
      { field: 'Course', headerName: 'Course', width: 330 },
      { field: 'enrolment', headerName: 'Enrolment', width: 130 },
      {
          field: 'Time',
          headerName: 'Time Slot',
          type: 'number',
          width: 200,
      },
  
  ];

  const rows = [
    { id: 101, enrolment: '20%', Course: 'Math for Business', Time: timeSlots[0] },
    { id: 102, enrolment: '50%', Course: 'English Languages for Beginner', Time: timeSlots[1] },
    { id: 103, enrolment: '100%', Course: 'Coding for Beginner', Time: timeSlots[2] },
    { id: 104, enrolment: '10%', Course: 'Coding for Professional', Time: timeSlots[3] },
    { id: 105, enrolment: '100%', Course: 'Mastery in ChatGPT', Time: timeSlots[4] },
    { id: 106, enrolment: '50%', Course: null, Time: timeSlots[5] },
    { id: 107, enrolment: '100%', Course: 'Learn Thai for "Business"', Time: timeSlots[6] },
    { id: 108, enrolment: '100%', Course: 'Meme Genarator', Time: timeSlots[7] },
    { id: 109, enrolment: '50%', Course: 'Project inquiry', Time: timeSlots[8] },
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
          />
      </div>
  );
}