import React, { useContext, useEffect, useState } from 'react'
import Singlepage from './Singlepage'
import { Link } from 'react-router-dom'
import { Haicontext } from './create'
import axios from 'axios'
const Hello = ({children}) => {


const [state,setState]=useState([])

async function display(){
  const response=await axios.get('https://jsonplaceholder.typicode.com/users')
  setState(response.data)
}

useEffect(()=>{

  display()

},[])

console.log("state value",state);

  return (
    <div>
  <h1 style={{color:"red",fontSize:"30px"}}>Hello page</h1>
<Haicontext.Provider value={state}>
        {children}
      </Haicontext.Provider>
    </div>
  )
}

export default Hello