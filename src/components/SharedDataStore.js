// SharedDataStore.js
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
export let courseData = [

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

  
  export const postQuestionToCourse = (id, question) => {
    const courseIndex = courseData.findIndex(course => course.id === id);
    if (courseIndex !== -1) {
      courseData[courseIndex].question = question;
      return true;
    }
    return false;
  };
  
  export const postAnswerToCourse = (id, answer) => {
    const courseIndex = courseData.findIndex(course => course.id === id);
    if (courseIndex !== -1) {
      courseData[courseIndex].answer = answer;
      return true;
    }
    return false;
  };
  