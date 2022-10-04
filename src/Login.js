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
        <div class="hdg-label-info">

          <svg class="icon" viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path></g></svg>
          <div class="hdg-label-popup">
            text Tooltip
          </div>
        </div>
      </div>
    </div>



  )
}

export default Login
