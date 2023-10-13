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
    path: "StudentQA",
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

]);


export default router;