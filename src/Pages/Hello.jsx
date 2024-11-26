import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeuserInfo } from '../Redux/Userslice';



function Hello() {

  const dispatch=useDispatch()

const finaloutput=useSelector((state)=>state.ok.userData)

console.log("*****************************************************",finaloutput);

function remove(){
dispatch(removeuserInfo())
}
   
  return (
<>
{finaloutput?.map((li)=>(
  <h1>Name : {li.name}</h1>
))}

<button onClick={remove}>Remove data</button>
</>

  )
}

export default Hello
