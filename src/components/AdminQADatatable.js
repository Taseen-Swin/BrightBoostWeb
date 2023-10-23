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


export default function AdminQADatatable() {
  const [enrolledIds, setEnrolledIds] = React.useState([]);

  const columns = [
      { field: 'id', headerName: 'Tutor ID', width: 100 },
      { field: 'class', headerName: 'Class ID', width: 100 },
      { field: 'QRespond', headerName: 'Question Responsiveness', width: 230 },
      { field: 'AvgTime', headerName: 'Average Respond Time', width: 230 },
  
  ];

  const rows = [
    { id: 501, class: 101, QRespond: '...', AvgTime: '...' },
    { id: 502, class: 102, QRespond: '...', AvgTime: '...' },
    { id: 503, class: 103, QRespond: '...', AvgTime: '...' },
    { id: 504, class: 104, QRespond: '...', AvgTime: '...' },
    { id: 505, class: 105, QRespond: '...', AvgTime: '...' },
    { id: 506, class: 106, QRespond: '...', AvgTime: '...' },
    { id: 507, class: 107, QRespond: '...', AvgTime: '...' },
    { id: 508, class: 108, QRespond: '...', AvgTime: '...' },
    { id: 509, class: 109, QRespond: '...', AvgTime: '...' },
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