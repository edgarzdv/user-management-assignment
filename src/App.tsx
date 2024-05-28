import './App.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import PageNotFound from './pages/home/PageNotFound'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="images/:id" element={<Home />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
