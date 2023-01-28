import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from '../pages/Add Page/Add'
import Home from '../pages/Home/Home'
import Program from '../pages/Programs/Program'
import Teach from '../pages/Teachers/Teach'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/program" element={<Program />} />
            <Route path="/teach" element={<Teach />} />
        </Routes>
    </div>
  )
}

export default Routing