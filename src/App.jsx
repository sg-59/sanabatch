import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Hello from './Page/Hello'
import Singlepage from './Page/Singlepage'
import { Haicontext } from './Page/create'

function App(){

  const person={
    name:"melvin",
    age:25,
    place:"kottayam",
    mob:99996666
  }

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
    <Haicontext.Provider value={person}>
<RouterProvider router={abc}></RouterProvider>
</Haicontext.Provider>
 </>
  )
}

export default App