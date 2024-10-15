import React from 'react'
import Login from './component/Login'
import Home from './component/Home'
import Signup from './component/Signup'
import Notfound from './component/Notfound'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard'



const App = () => {
  return (
    <>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='*' element={<Notfound/>} ></Route>
    </Routes>
    
    </>
  )
}

export default App