import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import LayoutOne from './Layout/LayoutOne'
import NotFound from './Components/NotFound/NotFound'
import Project from './Pages/Project'
import Award from './Pages/Award'

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LayoutOne/>}>
        <Route path='*' element={<NotFound/>} />
        <Route index element={<Home/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/award' element={<Award/>} />
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
