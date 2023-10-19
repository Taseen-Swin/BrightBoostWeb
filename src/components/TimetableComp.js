import * as React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

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
  { id: 106, enrolment: '50%', Course: null, Time: timeSlots[5] },
  { id: 107, enrolment: '100%', Course: 'Learn Thai for "Business"', Time: timeSlots[6] },
  { id: 108, enrolment: '100%', Course: 'Meme Genarator', Time: timeSlots[7] },
  { id: 109, enrolment: '50%', Course: 'Project inquiry', Time: timeSlots[8] },
];
const events = rows.map(row => {
  const currentDate = new Date();
  const [startTime, endTime] = row.Time.split(' - ');
  const startHour = parseInt(startTime.split(':')[0]);
  const startMinute = parseInt(startTime.split(':')[1]);
  const endHour = parseInt(endTime.split(':')[0]);
  const endMinute = parseInt(endTime.split(':')[1]);
  return {
    title: row.Course,
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), startHour, startMinute),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), endHour, endMinute),
    color: 'blue' // customize as needed
  };
});


function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export function TimetableComp() {
    const [calendarEvents, setCalendarEvents] = React.useState(events);

    

    const handleEventClick = (clickInfo) => {
      if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove();
        // If using an API, send delete request here
      }
    };

    const handleDateSelect = (selectInfo) => {
      const title = window.prompt('Please enter a new event name');
      const color = window.prompt('Please enter a color for the event (e.g. blue, red, etc.)', 'blue');

    const startDate = window.prompt('Please enter the start date in YYYY-MM-DD format:');
    const endDate = window.prompt('Please enter the end date in YYYY-MM-DD format:');
  
      let startTime = window.prompt('Please enter a start time (e.g. 09:00)');
      while (!startTime || !/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(startTime)) {
          if (startTime === null) return;  // user cancelled
          alert('Please enter a valid start time in the format HH:mm.');
          startTime = window.prompt('Please enter a start time (e.g. 09:00)');
      }
      const [startHour, startMinute] = startTime.split(':').map(Number);
  
      let endTime = window.prompt('Please enter an end time (e.g. 10:00)');
      while (!endTime || !/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(endTime)) {
          if (endTime === null) return;  // user cancelled
          alert('Please enter a valid end time in the format HH:mm.');
          endTime = window.prompt('Please enter an end time (e.g. 10:00)');
      }
      const [endHour, endMinute] = endTime.split(':').map(Number);
    
      const isRecurring = window.confirm('Is this a recurring event?');
      let daysOfWeek = [];
    
      if (isRecurring) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        days.forEach((day, index) => {
          if (window.confirm(`Does the event recur on ${day}?`)) {
            daysOfWeek.push(index);
          }
        });
      }
    
      const calendarApi = selectInfo.view.calendar;
      calendarApi.unselect(); // Clear date selection
    
      if (title) {
        setCalendarEvents([
          ...calendarEvents,
          {
            id: Date.now(),
            title,
            start: new Date(selectInfo.start.getFullYear(), selectInfo.start.getMonth(), selectInfo.start.getDate(), startHour, startMinute),
            end: new Date(selectInfo.end.getFullYear(), selectInfo.end.getMonth(), selectInfo.end.getDate(), endHour, endMinute),
            allDay: selectInfo.allDay,
            color,
            daysOfWeek: daysOfWeek.length > 0 ? daysOfWeek : undefined
          },
        ]);
        
        // If using an API, send POST request to create new event here
      }
    };
    
    const handleEventDrop = (changeInfo) => {
      console.log('Event was moved:', changeInfo.event);
      // If using an API, send PUT request to update event here
    };

    const handleEventResize = (resizeInfo) => {
      console.log('Event was resized:', resizeInfo.event);
      // If using an API, send PUT request to update event here
    };

    return (
      <div>
    <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        initialView="dayGridMonth"
        weekends={false}
        events={calendarEvents}
        eventContent={renderEventContent}
        selectable={true}
        select={handleDateSelect}
        editable={true}
        eventDrop={handleEventDrop}
        eventResize={handleEventResize}
        eventClick={handleEventClick}
    />
</div>

    );
}
