import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addtoUserInfo } from '../Redux/Userslice';
import { Link } from 'react-router-dom';
import { UserDetailsApi } from './Api';

function Sample() {

 const dispatch=useDispatch()

  const [state,setState]=useState([])
console.log("state value",state);


  useEffect(()=>{
 UserDetailsApi(dispatch).then((res)=>{
setState(res)
 })
  },[])

  console.log("state value 2",state);
  

  return (
    <div>
{state.map((li)=>(
  <div key={li.id}>
  <h3>Name : {li.name}</h3>
  </div>
))}
<Link to={'/hello'}><h1>Connect to hello page</h1></Link>
    </div>
  )
}

export default Sample
