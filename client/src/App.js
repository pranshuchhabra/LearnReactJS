import React from "react";

import "./App.css";
import { Routes, Route } from 'react-router-dom'

import Home from "./components/Home";
import About from "./components/About";
import LoginPage from "./components/LoginPage";





function App() {

  return (
    <>

      <Routes>
        <Route exact path="/home" element={<Home />}> </Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/login' element={<LoginPage />}></Route>
      </Routes >

    </>



  )
}
export default App;



