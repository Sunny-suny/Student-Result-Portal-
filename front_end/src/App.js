import React, { useContext, useState } from 'react'
import Nav from './Components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Register from './Components/Register'
import HallTkt from './Components/HallTkt'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Disp from './Components/Disp'
import './App.css'
import Edit from './Components/Edit'
import Ct from './Components/Ct'



const App = () => {
  let [store,setStore]=useState({"token":"","name":""})

  let updstore=(obj)=>{
    setStore({...store,...obj})
  }

  let obj={"store":store,"updstore":updstore}

  return (
   <BrowserRouter>
   <Ct.Provider value={obj}>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/reg' element={<Register/>}/>
    <Route path='/ht' element={<HallTkt/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/disp' element={<Disp/>}/>
    <Route path='/edit' element={<Edit/>}/>
    <Route path='/logout' element={<Logout/>}/>
   </Routes>
   </Ct.Provider>
   </BrowserRouter>
  )
}

export default App



