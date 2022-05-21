import React from 'react'
import Dashboard from './Dashboard'
import Profile from './Profile'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login';
function Root() {
  return (
    <BrowserRouter>
    <Routes>
        
    <Route path="/" exact element={<Login></Login>} />
    <Route path='/dashboard' element={<Dashboard></Dashboard>} />
      <Route path='/profile' element={<Profile></Profile>} />

   </Routes>
   </BrowserRouter>
  )
}

export default Root