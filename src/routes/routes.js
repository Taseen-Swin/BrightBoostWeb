import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  
} from "react-router-dom";
import App  from "../app/App";
import SideNav from '../components/SideNav';
import AdminHome from '../app/admin/AdminHome';
import AdminQA from '../app/admin/AdminQA';
import AdminFeedback from '../app/admin/AdminFeedback';
import AdminTimetable from '../app/admin/AdminTimetable';
import AdminProfile from '../app/admin/AdminProfile';
import StudentLogin from '../app/student/StudentLogin';
import StudentSignup from '../app/student/StudentSignUp';
import AdminLogin from '../app/admin/AdminLogin';
import StudentHome from '../app/student/StudentHome';
import StudentQA from "../app/student/StudentQA";
import StudentTimetable from "../app/student/StudentTimetable";
import StudentEnrolment from "../app/student/StudentEnrolment";
import TutorLogin from "../app/tutors/TutorLogin";
import TutorHome from "../app/tutors/TutorHome";
import TutorQA from "../app/tutors/TutorQA";
import TutorTimetable from "../app/tutors/TutorTimetable";
import StudentProfile from "../app/student/StudentProfile";
import TutorProfile from "../app/tutors/TutorProfile";
import AdminStatistic from "../app/admin/AdminStatistic";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "StudentHome",
    element: <StudentHome/>,
  },
  {
    path: "StudentQA/:sessionID",
    element: <StudentQA/>,
  },
  {
    path: "StudentTimetable",
    element: <StudentTimetable/>,
  },
  {
    path: "StudentEnrolment",
    element: <StudentEnrolment/>,
    
  },
  {
    path: "StudentLogin",
    element: <StudentLogin/>,
  },
  {
    path: "StudentSignup",
    element: <StudentSignup/>,
  },
  {
    path: "SideNav",
    element: <SideNav/>,
  },
  {
    path: "AdminHome",
    element: <AdminHome/>,
  },
  
  {
    path: "AdminQA",
    element: <AdminQA/>,
  },
  {
    path: "AdminFeedback",
    element: <AdminFeedback/>,
  },
  {
    path: "AdminTimetable",
    element: <AdminTimetable/>,
  },
  {
    path: "AdminProfile",
    element: <AdminProfile/>,
  },
  {
    path: "AdminLogin",
    element: <AdminLogin/>,
  },
  {
    path: "AdminStatistic",
    element: <AdminStatistic/>,
  },
  {
    path: "StudentProfile",
    element: <StudentProfile/>,
  },
  {
    path: "TutorLogin",
    element: <TutorLogin/>,
  },
  {
    path: "TutorHome",
    element: <TutorHome/>,
  },
  {
    path: "TutorQA",
    element: <TutorQA/>,
  },
  {
    path: "TutorTimetable",
    element: <TutorTimetable/>,
  },
  {
    path: "TutorProfile",
    element: <TutorProfile/>,
  },




]);


export default router;