import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Hello from './Page/Hello'
import Singlepage from './Page/Singlepage'
import Sample from './Page/Sample'
import Global from './Page/Global'

function App(){



  const abc=createBrowserRouter([
  {
    path:'/',
    element:<Hello/>
  },
  {
    path:'/cartpage',
    element:<Singlepage/>
  },
  {
    path:"/samplepage",
    element:<Sample/>
  },
  {
    path:"/global",
    element:<Global/>
  }
  ])
  return (
    <>

<RouterProvider router={abc}></RouterProvider>

 </>
  )
}

export default App