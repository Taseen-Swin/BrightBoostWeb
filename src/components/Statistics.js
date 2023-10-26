import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle, Legend, PieChart, Pie,Line,LineChart } from 'recharts';
import ApiService from '../services/api.services';

function Statistics() {
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

    const rows = [
        { id: 101, enrolment: '20%', Course: 'Math for Business', Time: timeSlots[0] },
        { id: 102, enrolment: '50%', Course: 'English Languages for Beginner', Time: timeSlots[1] },
        { id: 103, enrolment: '100%', Course: 'Coding for Beginner', Time: timeSlots[2] },
        { id: 104, enrolment: '10%', Course: 'Coding for Professional', Time: timeSlots[3] },
        { id: 105, enrolment: '100%', Course: 'Mastery in ChatGPT', Time: timeSlots[4] },
        { id: 106, enrolment: '50%', Course: 'Elective', Time: timeSlots[5] },
        { id: 107, enrolment: '100%', Course: 'Learn Thai for "Business"', Time: timeSlots[6] },
        { id: 108, enrolment: '100%', Course: 'Meme Generator', Time: timeSlots[7] },
        { id: 109, enrolment: '50%', Course: 'Project Inquiry', Time: timeSlots[8] },
    ];

    const [studSessAttend, setstudSessAttend] = React.useState([]);
    const studentSessionAttend = async () => {
        const api = new ApiService();
        const { data, status } = await api.getstudentSessionAttend();
        if (status == 200) {
            setstudSessAttend(data.data);
        }
    };
    const ssa = Array.from(studSessAttend);


    const studentParticipationData = ssa.map(row => ({
        name: row.course_session,
        value: parseInt(row.student_count)
    }));


    const [QuestionAnswerEachSession, setQuestionAnswerEachSession] = React.useState([]);
    const getQuestionAnswerEachSession = async () => {
        const api = new ApiService();
        const { data, status } = await api.getQuestionAnswerEachSession();
        if (status == 200) {
            setQuestionAnswerEachSession(data.data);
        }
    };
    const qaes = Array.from(QuestionAnswerEachSession);
    // Example: Assuming tutors participate at twice the student rate (for demonstration)
    const tutorParticipationData = qaes.map(row => ({
        name: row.course_session,
        Answer_Reponse: row.answer_count,
        Questions_count: row.questions_count
    }));

    const [QuestionAnswerEachCoursePercenatge, setQuestionAnswerEachCoursePercenatge] = React.useState([]);
    const getQuestionAnswerEachCoursePercenatge = async () => {
        const api = new ApiService();
        const { data, status } = await api.getQuestionAnswerEachCoursePercenatge();
        if (status == 200) {
            setQuestionAnswerEachCoursePercenatge(data.data);
        }
    };
    const qaecp = Array.from(QuestionAnswerEachCoursePercenatge);

    const studentFeedbackData = qaecp.map(row => ({
        name: row.course_name,
        value: parseInt(row.qna_percentage) //need to link with feedback score database
    }));

    const [enrolemetOverTime, setenrolemetOverTime] = React.useState([]);
    const getenrolemetOverTime = async () => {
        const api = new ApiService();
        const { data, status } = await api.getenrolemetOverTime();
        if (status == 200) {
            setenrolemetOverTime(data.data);
        }
    };
    const eot = Array.from(enrolemetOverTime);

    const tutorResponsivenessData = eot.map(row => ({
        name: row.enrollment_month,
        value: row.enrollment_count //need to link with feedback score database
    }));

    useEffect(() => {
        studentSessionAttend() // Fetch data every 5 seconds
        getQuestionAnswerEachSession()
        getQuestionAnswerEachCoursePercenatge()
        getenrolemetOverTime()
        // Clean up the interval when the component unmounts

    }, []);

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 5 }}>

            <Grid container spacing={3}>


                <Grid item xs={12} md={6}>
                    <Typography variant="h6" align="center">
                        Students attend each session
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={studentParticipationData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill={"#8884d8"} />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" align="center">
                        Questions are answered Percentage in each subject area.
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie dataKey="value" data={studentFeedbackData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} fill="#82ca9d" />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" align="center">
                        Questions are answered during each session about each subject area.
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={tutorParticipationData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Questions_count" fill="#8884d8" activeDot={{ fill: 'pink', stroke: 'blue' }} />
                            <Bar dataKey="Answer_Reponse" fill="#82ca9d" activeDot={{ fill: 'gold', stroke: 'purple' }} />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" align="center">
                        Enrolment OverTime Graph
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart      data={tutorResponsivenessData}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                    
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>

            </Grid>
        </Box>

    );
}


export default Statistics;
