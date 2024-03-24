import React from "react";
import NewMenu from '../src/components/NewMenu'
import Login from '../src/components/Login'
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';

function App(){
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<NewMenu />}></Route>
      </Routes>
      </BrowserRouter>
    
    
    </div>
  )
}

export default App