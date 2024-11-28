import React, { useEffect, useLayoutEffect } from 'react'



function Hai() {

  useEffect(()=>{
console.log("hello I am useeffect");
},[])

useLayoutEffect(()=>{
console.log("Hello I am useLayoutEffect");
},[])

  return (
    <div>
        <h1>Hai page</h1>

    </div>
  )
}

export default Hai
