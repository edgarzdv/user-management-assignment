import './App.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import Header from './components/header'
import Footer from './components/footer'
import UserManagement from './pages/UserManagement'
import ObjectViewerPage from './pages/objectViewer'
import Cookies from './pages/cookies'
import GeneralPolicies from './pages/generalPolicies'
import Notifications from './pages/notifications'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/user-management" />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="general-policies" element={<GeneralPolicies />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="/object-viewer" element={<ObjectViewerPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
