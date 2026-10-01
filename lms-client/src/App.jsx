import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Dashboard from './pages/Dashboard'
import ProfilePage from './pages/ProfilePage'
import ResetPassword from './pages/ResetPassword'
import AssignmentPage from './pages/AssignmentPage'
import AssignmentDetailsPage from './pages/AssignmentDetailsPage'
import CoursePage from './pages/CoursePage'
import CourseDetailsPage from './pages/CourseDetailsPage'
import DiscussionPage from './pages/DiscussionPage'
import EnrollStudentPage from './pages/EnrollStudentPage'
import NotificationsPage from './pages/NotificationsPage'
import StudentManagementPage from './pages/StudentManagementPage'
import ActivityLogs from './pages/ActivityLogs'


// function App() {

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/reset" element={<ResetPassword />} />
//         <Route path="/assign" element={<AssignmentPage />} />
//         <Route path="/assigndetails" element={<AssignmentDetailsPage />} />
//         <Route path="/course" element={<CoursePage />} />
//         <Route path="/coursedetails" element={<CourseDetailsPage />} />
//         <Route path="/discussion" element={<DiscussionPage />} />
//         <Route path="/enroll" element={<EnrollStudentPage />} />
//         <Route path="/notifications" element={<NotificationsPage />} />
//         <Route path="/studentmanagement" element={<StudentManagementPage />} />
//         <Route path="/activitylogs" element={<ActivityLogs />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

function App() {
  const [role, setRole] = useState(localStorage.getItem('role'))

  if (!role) return <LoginPage onLogin={setRole} />
  if (role === 'admin') return <Dashboard />

  return <CoursePage />
}

export default App
