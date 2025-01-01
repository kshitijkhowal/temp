import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Courses from './pages/Courses'


const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
          </Routes>
        </BrowserRouter>

    </>

  )
}

export default App