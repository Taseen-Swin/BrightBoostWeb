import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ApiService from '../services/api.services';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const handleItemClick = (row) => {

    alert(`Clicked item: ${row.Course}`);
  };

function CardTemplate(props) {
    const { row } = props;

    return (
        <Card sx={{ minWidth: 275 }} onClick={() => handleItemClick(row)}>
            <CardContent>
                <div key={row.id}>
                    <Typography variant="h5" component="div">
                        {row.Course}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {row.Time}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}

export function Timetable() {
    const [value, setValue] = React.useState(0);

    const [data, setData] = useState([]); // Store the data from the API
    const userType='admin'

    const fetchData = async () => {
        const api = new ApiService();
        
        const response = await api.getTimetable(2,userType);
        setData(response.data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const rows = data.map((course) => ({
        id: course.id,
        Course: course.name,
        Day: course.session_day,
        Time: course.session_slot,
    }));

    // Group the rows by day
    const groupedRows = {
        Monday: rows.filter((row) => row.Day === 'Monday'),
        Tuesday: rows.filter((row) => row.Day === 'Tuesday'),
        Wednesday: rows.filter((row) => row.Day === 'Wednesday'),
        Thursday: rows.filter((row) => row.Day === 'Thursday'),
        Friday: rows.filter((row) => row.Day === 'Friday'),
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Monday" {...a11yProps(0)} />
                    <Tab label="Tuesday" {...a11yProps(1)} />
                    <Tab label="Wednesday" {...a11yProps(2)} />
                    <Tab label="Thursday" {...a11yProps(3)} />
                    <Tab label="Friday" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                {groupedRows.Monday.map((row) => (
                    <CardTemplate key={row.id} row={row} />
                ))}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                {groupedRows.Tuesday.map((row) => (
                    <CardTemplate key={row.id} row={row} />
                ))}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                {groupedRows.Wednesday.map((row) => (
                    <CardTemplate key={row.id} row={row} />
                ))}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                {groupedRows.Thursday.map((row) => (
                    <CardTemplate key={row.id} row={row} />
                ))}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                {groupedRows.Friday.map((row) => (
                    <CardTemplate key={row.id} row={row} />
                ))}
            </CustomTabPanel>
        </Box>
    );
}
