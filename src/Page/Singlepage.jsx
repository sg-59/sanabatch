import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Haicontext } from './create';

const Singlepage = () => {
    const abc=useParams()
   const abcd= useContext(Haicontext)
   console.log("usecontext value",abcd);
   
    console.log("useparams value",abc.datas);

    const [state1,setState1]=useState([])
    useEffect(function(){

        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(function(data){
            console.log("api data in single page",data.data.categories);
    setState1(data.data.categories)
        })
    },[])
    
   const filteredvalue= state1.filter((li)=>{
        return li.strCategory==abc.datas
    })
    console.log("final answer",filteredvalue);
    
    
  return (
    <div>
        {filteredvalue.map((li)=>(
            <>
            <img src={li.strCategoryThumb} alt="" />
            <h3>{li.strCategory}</h3>
            <h3>{li.strCategoryDescription}</h3>
            </>
        ))}
         <h1>name :{abcd.name}</h1>
         <h1>place :{abcd.place}</h1>
         <h1>age :{abcd.age}</h1>
    </div>
  )
}

export default Singlepage