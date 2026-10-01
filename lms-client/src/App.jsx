import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import ProfilePage from './pages/ProfilePage'
import CoursePage from './pages/CoursePage'
import ResetPassword from './pages/ResetPassword'
import AssignmentDetailsPage from './pages/AssignmentDetailsPage'
import AssignmentPage from './pages/AssignmentPage'
import CourseDetailsPage from './pages/CourseDetailsPage'
import Discussion from './pages/Discussion'
import EnrollStudentPage from './pages/EnrollStudentPage'
import Notifications from './pages/Notifications'
import StudentManagementPage from './pages/StudentManagementPage'
import ActivityLogs from './pages/ActivityLogs'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/assign" element={<AssignmentPage />} />
        <Route path="/assigndetails" element={<AssignmentDetailsPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/coursedetails" element={<CourseDetailsPage />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/enroll" element={<EnrollStudentPage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/studentmanagement" element={<StudentManagementPage />} />
        <Route path="/activitylogs" element={<ActivityLogs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
