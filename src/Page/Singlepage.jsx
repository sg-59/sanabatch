import React, { useContext } from 'react'
import { Haicontext } from './create'



const Singlepage = () => {
    const a=useContext(Haicontext)
    
  return (
    <div>
   <h1>SIngle page</h1>
   {a.map((li)=>(
        <h1>{li.name}</h1>
      ))}
    </div>
  )
}

export default Singlepage