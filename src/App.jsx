import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Sample from './Pages/Sample'
import Hello from './Pages/Hello'
import Hai from './Pages/Hai'
import Userefone from './Pages/Userefone'

function App(){


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
},
{
  path:'/ref',
  element:<Userefone/>
}
  ])
  return (
    <>
<RouterProvider router={abc}></RouterProvider>
 </>
  )
}

export default App