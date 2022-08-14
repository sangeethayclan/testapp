import React from 'react'
import { Route, Link } from 'react-router-dom'

function header() {
    return (
        <div>
            <ul role="nav" className='header'>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    )
}

export default header