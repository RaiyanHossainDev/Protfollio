import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
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
