import React from 'react'
import Dashboard from './Dashboard'
import Profile from './Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Header from './header';
import Register from './Register';
function Root() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" exact element={<Header></Header>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/profile' element={<Profile></Profile>} />
        <Route path='/Register' element={<Register></Register>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root