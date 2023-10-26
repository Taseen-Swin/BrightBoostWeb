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


export default function AdminDataTable() {
    const [getCourseStats, setCourseStats] = React.useState([]);

    const columns = [
        { field: 'id', headerName: 'Class ID', width: 100 },
        { field: 'course_name', headerName: 'Course', width: 130 },
        { field: 'student_enrolled', headerName: 'Enrolment / Total Students', width: 230 },
        { field: 'enrollment_percentage', headerName: 'Enrollment Percentage', width: 230 },
        { field: 'course_attendance', headerName: 'Course Attendance /Total Enrolments', width: 330 },
        { field: 'attendance_percentage', headerName: 'Course Attendance Percentage', width:230 },
        { field: 'avg_course_att_perc', headerName: 'Avg Session Attendance per Student Percentage', width: 330 },
    ];
    

    // const rows = [
    //     { id: 101, enrolment: '20%', Course: 'Math for Business', Time: timeSlots[0] },
    //     { id: 102, enrolment: '50%', Course: 'English Languages for Beginner', Time: timeSlots[1] },
    //     { id: 103, enrolment: '100%', Course: 'Coding for Beginner', Time: timeSlots[2] },
    //     { id: 104, enrolment: '10%', Course: 'Coding for Professional', Time: timeSlots[3] },
    //     { id: 105, enrolment: '100%', Course: 'Mastery in ChatGPT', Time: timeSlots[4] },
    //     { id: 106, enrolment: '50%', Course: null, Time: timeSlots[5] },
    //     { id: 107, enrolment: '100%', Course: 'Learn Thai for "Business"', Time: timeSlots[6] },
    //     { id: 108, enrolment: '100%', Course: 'Meme Genarator', Time: timeSlots[7] },
    //     { id: 109, enrolment: '50%', Course: 'Project inquiry', Time: timeSlots[8] },
    // ];

    const fetchData = async () => {
        const api = new ApiService();
        const { data, status } = await api.getCourseStats();
        if (status == 200) {
            setCourseStats(data.data);
        }

    };

    useEffect(() => {
        fetchData() 

    }, []);

    const row = Array.from(getCourseStats);

    // Define your rows based on the data you fetched
    const rows = row.map((data) => ({
        id: data.course_id,
        course_name:data.course_name ,
        student_enrolled: data.student_enrolled +'/' +data.total_student ,
        enrollment_percentage: data.enrollment_percentage+' %',
        course_attendance: data.course_attendence +'/'+data.course_enrolments,
        attendance_percentage:data.attendance_percentage+' %',
        avg_course_att_perc:data.avg_course_att_perc+' %'
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