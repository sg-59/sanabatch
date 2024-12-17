import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import { useSelector } from 'react-redux'


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

  ])
  return (
    <>
<RouterProvider router={abc}></RouterProvider>
 </>
  )
}

export default App