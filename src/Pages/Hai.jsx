import React, { useContext } from 'react'
import { Appcontext } from './Store'

function Hai() {

   const {finalvalue,dispatch} =useContext(Appcontext)

   function DeleteDatas(){
    dispatch({status:"remove"})
}

  return (
    <div>
        <h1>Hai page</h1>
      {finalvalue?.map((li)=>{
        return(
<h3>Name : {li.name}</h3>
        )
      })}
      
      <button onClick={DeleteDatas}>Remove</button>
    </div>
  )
}

export default Hai
