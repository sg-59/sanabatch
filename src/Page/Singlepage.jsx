import React, { useEffect, useState } from 'react'




const Singlepage = () => {
 
    const [state,setState]=useState(0)

    useEffect(()=>{
var i=0;
var intervel=setInterval(()=>{
   i=i+1
   console.log(i);
   },1000)

   return ()=>{
    console.log("cleanup function.......................");
    
    clearInterval(intervel)
   } 

    },[state])
    
  return (
    <div>
        <h1>{state}</h1>
<button onClick={()=>setState(state+1)}>Click</button>
    </div>
  )
}

export default Singlepage