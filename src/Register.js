import React, { useState } from 'react';
import axios from 'axios';
import Header from './header';
function Register() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        //this is post method  example 
        axios
            .post('https://jsonplaceholder.typicode.com/posts', {
                title: title,
                body: body,
                userId: 1,
            })
            .then((response) => {
                console.log("response register", response)
            })
            .catch((error) => console.log(error));
    };



    return (
        <div>
            <Header></Header>
            <form className='formpart'>
                <label>Enter Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />


                <label>Enter Body:  </label>
                <input
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <button onClick={handleSubmit} className="btnSub">Submit</button>




            </form>

        </div>

    )
}

export default Register