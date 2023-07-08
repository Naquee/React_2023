import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Room from './Room'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room/:roomId' element={<Room/>}/>
    </Routes>
    </div>
  )
}

export default AllRoutes