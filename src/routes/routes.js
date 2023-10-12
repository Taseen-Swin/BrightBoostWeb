import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
} from "react-router-dom";
import App  from "../app/App";
import Login  from "../app/login/login";
import SideNav from '../components/SideNav';
import AdminHome from '../app/login/admin/AdminHome';
import AdminQA from '../app/login/admin/AdminQA';
import AdminFeedback from '../app/login/admin/AdminFeedback';
import AdminTimetable from '../app/login/admin/AdminTimetable';
import AdminProfile from '../app/login/admin/AdminProfile';
import StudentLogin from '../app/login/student/StudentLogin';
import StudentSignup from '../app/login/student/StudentSignUp';
import AdminLogin from '../app/login/admin/AdminLogin';
import StudentHome from '../app/login/student/StudentHome';
import StudentQA from "../app/login/student/StudentQA";
import StudentTimetable from "../app/login/student/StudentTimetable";
import StudentEnrolment from "../app/login/student/StudentEnrolment";

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
    path: "/login",
    element: <Login/>,
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