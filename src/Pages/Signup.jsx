import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { signupData } from '../Api'

const Signup = () => {

  const [data,setData]=useState({
    name:'',
    email:"",
    mobile:Number,
    password:''
  })

  const [message,setMessage]=useState('')

  function handlechange(event){

    const {name,value}=event.target

    setData({...data,[name]:value})

  }

  function display(){
    console.log("first check",data);
    
    signupData(data).then((data)=>{
      console.log("*******************************************",data);
      if(data=="success"){
setMessage("signup success")
      }else{
        setMessage("signup failed")
      }
      
    })

  }

  return (
    <>
    <h1 style={{textAlign:'center'}}>{message}</h1>
<input type="text" name='name' placeholder='name' onChange={handlechange}/>
<input type="email" name='email' placeholder='email' onChange={handlechange}/>
<input type="tel" name='mobile' placeholder='mobile' onChange={handlechange}/>
<input type="password" name='password' placeholder='password' onChange={handlechange}/>
<button onClick={display}>Signup</button>
<Link to={'/'}><p>I have already an account</p></Link>
    </>

  )
}

export default Signup