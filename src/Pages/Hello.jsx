import React from 'react'
import { useSelector } from 'react-redux'


function Hello() {


 const finalData=useSelector((state)=>state.hello.userData)

 console.log("final answer is ............",finalData);
 
   
  return (
    <div>
  {finalData?.map((li)=>(
    <h1>{li.name}</h1>
  ))}

    </div>
  )
}

export default Hello
