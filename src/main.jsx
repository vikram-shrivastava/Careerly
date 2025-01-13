import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import {AuthLayout} from "./components/index.js"
import "./index.css";
import App from "./App.jsx";
import { Home } from "./components/index.js";
import { Login } from "./components/index.js";
import { Signup } from "./components/index.js";
import MyMessages from "./components/MyMessages.jsx";
import JobPostForm from "./components/PostForm.jsx";
import MentorProfile from "./components/Mentor/MentorProfile.jsx";
import EmployerProfile from "./components/Employer/EmployerProfile.jsx";
import EmployerLoginForm from "./components/LoginasEmployer.jsx";
import MentorSearchPage from "./components/MentorSearchPage.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import UserProfile from "./components/ProfileCard.jsx";
import JobBoard from "./components/Jobs/JobBoard.jsx";
import EmployerDashboard from "./components/Employer/EmployerDashboard.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import MentorDashboard from "./components/MentorDashboard.jsx";
import JobAddForm from "./components/Jobs/JobAddForm.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
        loader: () => {
          console.log("Login route matched");
          return null;
        },
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/jobs",
        element: (
            <JobBoard />
        ),
      },
      {
        path: "/interactions",
        element: (
          // <AuthLayout authentication={false}>
          //     <Signup />
          // </AuthLayout>
          <AuthLayout authentication>
            <MyMessages />
          </AuthLayout>
        ),
      },
      {
        path: "/addJob/",
        element: (
          <AuthLayout authentication>
            <JobPostForm />
          </AuthLayout>
        ),
      },
      {
        path: "/mentors",
        element: (
          
            <MentorSearchPage />
        ),
      },
      {
        path: "/employer",
        element: (
          <AuthLayout authentication>
            <EmployerProfile />
          </AuthLayout>
        ),
      },
      {
        path: "/mentor-profile/:mentorId",
        element:(
          <AuthLayout authentication>
            <MentorProfile/>
          </AuthLayout>
        )
      },
      {
        path:"/profile",
        element:(
          <AuthLayout authentication>
            <UserProfile/>
          </AuthLayout>
        )
      },
      //temporarily using this route to test the Employee login and mentor login
      {
        path: "/employerlogin",
        element:(
          <EmployerLoginForm/>
        )
      },
      {
        path:"/employerdashboard",
        element:(
          <EmployerDashboard/>
        )
      },
      {
        path:"/AdminDashboard",
        element:(
          <AdminDashboard/>
        )
      },
      {
        path:"/MentorDashboard",
        element:(
          <MentorDashboard/>
        )
      },{
        path:"/himanshu",
        element:(
          <JobAddForm/>
        )
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
);
