import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function Dashboard() {
  //const { number } = props.location.state;
  //console.log("number", number)
  // const { idValue } = props;
  const location = useLocation();

  console.log("location", location)
  const [items, setItems] = useState([])

  //ternary operator

  const data = (location.state.id != null) ? {

    idvalue: location.state.id
  } :
    {
      idvalue: ""

    }

  console.log("ternary operator", data)


  useEffect(() => {
    //this is get method  example 
    if (location.state.id != null) {

      axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => {
          setItems(response.data);
        });
    }
    console.log("items", items)
  }, []);


  useEffect(() => {
    console.log("first time enter");

    //this is component componentWillUnmount  example 

    return () => {
      console.log("end dom");

    }
  }, []);

  return (

    <div className='dashBox'>

      <li>{items.id}</li>
      <li>{items.title}</li>


      {/* {items.map(val => (
        <div className='itembox'>
          <li>
            <li>{val.id}</li>
            <li>{val.title}</li>
          </li>
        </div>
      ))} */}


    </div>


  )
}

export default Dashboard
