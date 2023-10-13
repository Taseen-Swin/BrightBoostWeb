import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { randomNumberBetween } from '@mui/x-data-grid/utils/utils';

export default function AdminQATutorInfo() {
  const [enrolledIds, setEnrolledIds] = React.useState([]);

  const columns = [
      { field: 'id', headerName: 'Tutor ID', width: 100 },
      { field: 'noRespond', headerName: 'Number of Responsiveness', width: 230 },
      { field: 'AvgTime', headerName: 'Average Respond Time', width: 230 },  
  ];

  const rows = [
    { id: 501, noRespond: '...', AvgTime: '...' },
    { id: 502, noRespond: '...', AvgTime: '...' },
    { id: 503, noRespond: '...', AvgTime: '...' },
    { id: 504, noRespond: '...', AvgTime: '...' },
    { id: 505, noRespond: '...', AvgTime: '...' },
    { id: 506, noRespond: '...', AvgTime: '...' },
    { id: 507, noRespond: '...', AvgTime: '...' },
    { id: 508, noRespond: '...', AvgTime: '...' },
    { id: 509, noRespond: '...', AvgTime: '...' },
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