import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} />
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
        <Route path="/activitylogs" element={<ActivityLogs />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
