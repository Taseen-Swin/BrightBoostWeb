import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { randomNumberBetween } from '@mui/x-data-grid/utils/utils';
import ApiService from '../services/api.services';

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
    const [getTutorQNAStats, setTutorQNAStats] = React.useState([]);

    const columns = [
        { field: 'id', headerName: 'Tutor ID', width: 100 },
        { field: 'tutor_name', headerName: 'Tutor Name', width: 100 },
        { field: 'QRespond', headerName: 'Question Responsiveness', width: 230 },
        { field: 'AvgTime', headerName: 'Average Answer Respond Time', width: 230 },

    ];



    const fetchData = async () => {
        const api = new ApiService();
        const { data, status } = await api.getTutorQnAStats();
        if (status == 200) {
            setTutorQNAStats(data.data);
        }

    };

    useEffect(() => {
        fetchData() // Fetch data every 5 seconds

        // Clean up the interval when the component unmounts

    }, []);

    const row = Array.from(getTutorQNAStats);

    // Define your rows based on the data you fetched
    const rows = row.map((data) => ({
        id: data.id,
        tutor_name:data.name ,
        QRespond:Math.floor(((data.TutorResponded/data.QuestionAsked)*100) * 100) / 100 +' %' ,
        AvgTime: data.average_response_time +' second',
    }));

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.id}
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