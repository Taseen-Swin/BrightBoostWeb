import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

function AdminQADatatable() {
  const dummyData = [
    { id: 501, class: 101, QRespond: '95%', AvgTime: '5 mins' },
    { id: 502, class: 102, QRespond: '90%', AvgTime: '10 mins' },
    { id: 503, class: 103, QRespond: '85%', AvgTime: '15 mins' },
    { id: 504, class: 104, QRespond: '80%', AvgTime: '20 mins' },
    { id: 505, class: 105, QRespond: '75%', AvgTime: '25 mins' },
    { id: 505, class: 105, QRespond: '90%', AvgTime: '12 mins' },
    { id: 506, class: 106, QRespond: '88%', AvgTime: '10 mins' },
    { id: 507, class: 107, QRespond: '92%', AvgTime: '8 mins' },
    { id: 508, class: 108, QRespond: '85%', AvgTime: '15 mins' },
    { id: 509, class: 109, QRespond: '78%', AvgTime: '20 mins' },
    // ... you can add more dummy data here as needed
  ];

  const [data, setData] = useState(dummyData);

  useEffect(() => {
    // This is just a placeholder URL; replace with your backend endpoint.
    // Commenting out the fetch operation for now
     /*
    fetch("/api/tutorMetrics")
      .then(response => response.json())
      .then(fetchedData => {
        setData(fetchedData);
      });
    */
}, []);

  const columns = [
    { field: 'id', headerName: 'Tutor ID', width: 100 },
    { field: 'class', headerName: 'Class ID', width: 100 },
    { field: 'QRespond', headerName: 'Question Responsiveness', width: 230 },
    { field: 'AvgTime', headerName: 'Average Respond Time', width: 230 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
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

export default AdminQADatatable;
