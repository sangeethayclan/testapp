import React, { useState } from 'react'
import Profile from './Profile'
import Header from './header';

import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(null);


  const sumbit = (event) => {
    event.preventDefault();
    console.log("user Details", "Name:", name, "password:", password, "number", number);
    //setUserDetails(name,);

  }
  return (
    <div>

      <Header></Header>
      <form className='formpart'>
        <label>Enter your name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />


        <label>Enter your password:  </label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Enter your id:  </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button onClick={sumbit} className="btnSub">Submit</button>

      </form>

      {/* /*  pass value to child componnet  */}
      <h1>pass value to child componnet </h1>
      <Profile userdata={name}>

      </Profile>

      {/* /*  pass value to another componnet using button click */}
      <h1>pass value to another componnet using button click  </h1>
      <div className='daspart'>
        <button onClick={() => {
          navigate('/dashboard', { state: { id: number } });


        }}
          className="btnSub">
          go to dashboard
        </button>
      </div>


    </div>
  )
}

export default Login
