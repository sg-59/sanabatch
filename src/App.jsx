import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import { useSelector } from 'react-redux'
import Profile from './Pages/Profile'
import Update from './Pages/Update'


function App(){
  
  const values=useSelector((state)=>state.userInfo.userData)

  console.log("final answer in redux values",values);

  if(values){
    var token=values.token
  }
  
  console.log(token);
  


  const abc=createBrowserRouter([
{
  path:'/',
  element:token ? <Home/> : <Login/>
},
{
  path:"/signup",
  element:<Signup/>
},
{
  path:"/profile",
  element:token ? <Profile/> : <Login/>
},
{
  path:"/update",
  element:token ? <Update/> : <Login/>
}

  ])
  return (
    <>
<RouterProvider router={abc}></RouterProvider>
 </>
  )
}

export default App