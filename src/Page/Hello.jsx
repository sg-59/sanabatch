import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './hello.css'
import { Link } from 'react-router-dom'
const Hello = () => {

const [state,setState]=useState([])


useEffect(function(){

    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(function(data){
        console.log("api data",data.data.categories);
setState(data.data.categories)
    })
},[])





  return (
    <div className='main'>
{state.map((datas)=>(
    <Link to={`/cartpage/${datas.strCategory}`}>
    <div className='sub'>
    <img src={datas.strCategoryThumb} alt="" />
    <h1>{datas.strCategory}</h1>
    </div>
    </Link>
))}
    </div>
  )
}

export default Hello