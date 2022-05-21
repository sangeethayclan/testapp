import React from 'react'
import Dashboard from './Dashboard'
import Profile from './Profile'
import { Route,Link } from 'react-router-dom'
function Login() {
  return (
    <div>
     
    <h1>React Router Example</h1>
    <ul role="nav">
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
     


    </div>
  )
}

export default Login
