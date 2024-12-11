import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NoPage from './Pages/NoPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='*' element={<NoPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App