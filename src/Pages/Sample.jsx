import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Appcontext } from './Store'

function Sample() {

    const [apiData,setApiData]=useState([])

   const {dispatch} = useContext(Appcontext)

   const [number,setNumber]=useState(0)

    function clickBtn(){
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            console.log("*********////////",response.data);
            dispatch({status:'success',datas:response.data})
            setApiData(response.data)
        }).catch((err)=>{
            console.log("errors...............",err.message);
            
        })
    }

    function DeleteDatas(){
        dispatch({status:"remove"})
    }


  return (
    <div>
        <h1>{number}</h1>
    <h1>Sample page</h1>
    {apiData.map((li)=>(
        <>
        <h4>name: {li.name}</h4>
        </>
    ))}
<Link to={`/hello`}><h3>Move to hello page</h3></Link>
<Link to={`/hai`}><h3>Move to hai page</h3></Link>
<button onClick={clickBtn}>Click</button>
<button onClick={()=>setNumber(number+1)}>Increment</button>

<button onClick={DeleteDatas}>Remove</button>
    </div>
  )
}

export default Sample
