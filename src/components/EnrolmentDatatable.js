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
          renderCell: (params) => <ActionButton id={params.row.id} enrolledIds={enrolledIds} setEnrolledIds={setEnrolledIds} />,
      },
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