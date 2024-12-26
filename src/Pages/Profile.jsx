import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAccount, getSingleData } from '../Api'
import { Link } from 'react-router-dom'
import { removeData } from '../Redux/UserSlice'

function Profile() {

  const dispatch=useDispatch()

    const [profile,setProfile]=useState([])
    const [message,setMessage]=useState('')

   const LoginInfo=useSelector((ok)=>ok.userInfo.userData)

    if(LoginInfo){
        var userId=LoginInfo.userId
    }

    console.log("Login info",userId);

    useEffect(()=>{
getSingleData(userId).then((data)=>{
setProfile(data)
})
    },[])


    console.log("profile data",profile);

    function removeAccount(){
      deleteAccount(userId).then((data)=>{
setMessage(data)
      })
    }
    
if(message=="Your account is deleted"){
setTimeout(()=>{
dispatch(removeData())
},1000)
}
  return (
    <>
    <Navbar/>
    <div>
      <h1>{message}</h1>
   <h3>first name :{profile?.Firstname}</h3>
   <h3>Email :{profile?.Email}</h3>
   <h3>Mobile :{profile?.Mobile}</h3>
    </div>
    <Link to={'/update'}><button>Update</button></Link>
    <button onClick={removeAccount}>Delete</button>
    </>
  )
}

export default Profile
