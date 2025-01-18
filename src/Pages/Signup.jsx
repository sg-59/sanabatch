import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { signupData } from '../Api'

const Signup = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    image: null,
  });

  const [message, setMessage] = useState('');

  function handlechange(event) {
    const { name, value, type, files } = event.target;

    if (type === 'file') {
      // Handle file input
      setData({ ...data, [name]: files[0] });
    } else {
      // Handle other inputs
      setData({ ...data, [name]: value });
    }
  }

  function display(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('mobile', data.mobile);
    formData.append('password', data.password);
    formData.append('image', data.image);

    // console.log('Form Data Debug:');
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    signupData(formData).then((response) => {
      console.log('API Response:', response);
      if (response === 'success') {
        setMessage('Signup successful!');
      } else {
        setMessage('Signup failed. Please try again.');
      }
    });
  }

  return (
    <>
    <h1 style={{textAlign:'center'}}>{message}</h1>
    <form onSubmit={display}>
<input type="text" name='name' placeholder='name' onChange={handlechange}/>
<input type="email" name='email' placeholder='email' onChange={handlechange}/>
<input type="tel" name='mobile' placeholder='mobile' onChange={handlechange}/>
<input type="password" name='password' placeholder='password' onChange={handlechange}/>
<input type="file" name='image' filename="image" onChange={handlechange} />
<button type='submit'>Signup</button>
</form>
<Link to={'/'}><p>I have already an account</p></Link>
    </>

  )
}

export default Signup