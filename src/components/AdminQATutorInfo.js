

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { randomNumberBetween } from '@mui/x-data-grid/utils/utils';
import ApiService from '../services/api.services';

export default function AdminQATutorInfo() {
    const [getTutorQNA, setTutorQNA] = React.useState([]);

    const columns = [
        { field: 'id', headerName: 'Tutor ID', width: 100 },
        { field: 'tutor_name', headerName: 'Tutor Name', width: 150 },
        { field: 'course', headerName: 'Course', width: 150 },
        { field: 'question', headerName: 'Question', width: 200 },
        { field: 'answer', headerName: 'Answer', width: 200 },
        { field: 'ask_by', headerName: 'Asked By', width: 150 },
        { field: 'response_time', headerName: 'Response Time (s)', width: 180 },
        { field: 'session_id', headerName: 'Session ID', width: 100 },
      ];
      


    const fetchData = async () => {
        const api = new ApiService();
        const { data, status } = await api.getQnADetails();
        if (status == 200) {
            setTutorQNA(data.data);
        }

    };

    useEffect(() => {
        setTutorQNA('')
        fetchData() // Fetch data every 5 seconds

        // Clean up the interval when the component unmounts

    }, []);

    const row = Array.from(getTutorQNA);

    // Define your rows based on the data you fetched
    const rows = row.map((data) => ({
        id: data.tutor_id,
        tutor_name: data.tutor_name,
        course: data.course,
        question:data.question,
        answer:data.answer,
        ask_by:data.ask_by,
        response_time:data.response_time,
        session_id:data.session_id,
      
    }));

    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
            
            />
        </div>
    );
}