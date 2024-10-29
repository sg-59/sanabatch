import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Hello from './Page/Hello'
import Singlepage from './Page/Singlepage'


function App(){

  const abc=createBrowserRouter([
  {
    path:'/',
    element:<Hello/>
  },
  {
    path:'/cartpage/:datas',
    element:<Singlepage/>
  }
  ])
  return (
    <>
<RouterProvider router={abc}></RouterProvider>
 </>
  )
}

export default App