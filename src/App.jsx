import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Courses from './pages/Courses'
import Signup from './components/Signup.jsx'


const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>

    </>

  )
}

export default App