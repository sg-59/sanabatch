import React from 'react'

const Global = () => {

   const b=setInterval(()=>{
        console.log("Hello anugraha");
        
    },1000)

    setTimeout(()=>{
        clearInterval(b)
    },5000)
    

  return (
    <div>Global</div>
  )
}

export default Global