import React, { useContext }  from 'react'
import { Appcontext } from './Store'

function Hello() {

 const {finalvalue} =useContext(Appcontext)

 console.log("hello page answer",finalvalue);
 
   
  return (
    <div>
      <h1>Hello page</h1>
{finalvalue?.map((li)=>(
  <>
  <h1>{li.name}</h1>
  </>
))}
    </div>
  )
}

export default Hello
