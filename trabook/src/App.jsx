
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './Layout/Layout'

function App() {
  // ============== router
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
