import React from 'react'
import { useDispatch } from 'react-redux'
import {styled} from 'styled-components'
import { removeData } from '../Redux/UserSlice'
import { Link } from 'react-router-dom'

const Main=styled.div`
    width: 100%;
    height: 55px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Header=styled.h3`
    font-size: 19px;
    color: darkblue;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    cursor: pointer;
`

const Navbar = () => {

    const dispatch=useDispatch()

    function logout(){
dispatch(removeData())
    }

  return (
    <Main>
      <Link to={'/'}><Header>Home</Header></Link>
     <Link to={'/profile'}><Header>Profile</Header></Link>
      <Header>Cart</Header>
      <Header>Order</Header>
      <Header>Other</Header>
      <Header onClick={logout}>Logout</Header>
    </Main>
  )
}

export default Navbar
