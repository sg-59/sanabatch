import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { updateData } from '../Api'


const Update = () => {

const userDetails=useSelector((state)=>state.userInfo.userData)
console.log("789",userDetails);
if(userDetails){
    var Id=userDetails.userId
}


  const [data,setData]=useState({
    name:undefined,
    email:undefined,
    mobile:undefined,
    password:undefined
  })

  function handlechange(event){

    const {name,value}=event.target

    setData({...data,[name]:value})

  }

  function display(){
console.log(data);
updateData(data,Id)

  }


  return (
    <>
        <Navbar/>
    <div>
     <h3>Update page</h3> 
     <input type="text" name='name' placeholder='name' onChange={handlechange}/>
<input type="email" name='email' placeholder='email' onChange={handlechange}/>
<input type="tel" name='mobile' placeholder='mobile' onChange={handlechange}/>
<input type="password" name='password' placeholder='password' onChange={handlechange}/>
<button onClick={display}>Signup</button>

    </div>
    </>
  )
}

export default Update
