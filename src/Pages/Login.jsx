import React, { useState } from 'react'
import { loginData } from '../Api'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Login = () => {

  const dispatch=useDispatch()

  const [errmessage,setErrmessage]=useState('')

  const [datasss,setData]=useState({
    email:"",
    password:""
  })

  function handlechange(event){
const {name,value}=event.target
setData({...datasss,[name]:value})
  }

  function display(){
    loginData(datasss,dispatch).then((data)=>{
  
setErrmessage(data)
    })
  }

  return (
    <div>
<h1>{errmessage}</h1>
    <input type="email" placeholder='email' name='email' onChange={handlechange}/>
    <input type="password" placeholder='password' name='password' onChange={handlechange} />
  <button onClick={display}>Login</button> 
   <Link to={'/signup'}><p>Create an account ?</p></Link> 
    </div>
  )
}

export default Login