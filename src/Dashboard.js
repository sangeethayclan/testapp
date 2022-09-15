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

  const idnumber = (location.state.id != null) ? {

    idvalue: location.state.id
  } :
    {
      idvalue: ""

    }

  console.log("ternary operator", idnumber)


  useEffect(() => {
    //this is get method  example 
    if (location.state.id != null) {
      axios.get("https://jsonplaceholder.typicode.com/todos/" + location.state.id)
        .then((response) => {
          setItems(response.data);
        });
    }

    // //GET TOTAL ARRAY

    // if (location.state.id != null) {
    //   axios.get("https://jsonplaceholder.typicode.com/todos/")
    //     .then((response) => {
    //       setItems(response.data);
    //     });
    // }

    console.log("items", items)
  }, []);

  //life cycle
  // useEffect(() => {
  //   console.log("first time enter");
  //   return () => {
  //     console.log("end dom");
  //   }
  // }, []);

  return (

    <div className='dashBox'>

      <li>{items.id}</li>
      <li>{items.title}</li>
      {/* 
GET TOTAL ARRAY DATA */}
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
