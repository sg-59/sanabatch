import React, { useContext } from 'react'
import { Haicontext } from './create'


const Sample = () => {
const a=useContext(Haicontext)
console.log("a values in sample page",a);

  return (
    <div>
        <h1>Sample page</h1>
      {a.map((li)=>(
        <h1>{li.name}</h1>
      ))}
    </div>
  )
}

export default Sample