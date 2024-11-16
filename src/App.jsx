import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Sample from './Pages/Sample'
import Hello from './Pages/Hello'
import Hai from './Pages/Hai'

function App(){

  localStorage.setItem("Sreerag","Mern STACK DEVELOPER")

  const a=localStorage.getItem('Sreerag')

  const abc=createBrowserRouter([
{
  path:'/',
  element:<Sample/>
},
{
  path:'/hello',
  element:<Hello/>
},
{
  path:"/hai",
  element:<Hai/>
}
  ])
  return (
    <>
<RouterProvider router={abc}></RouterProvider>
 </>
  )
}

export default App