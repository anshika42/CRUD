import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Login from './pages/LoginPage/LoginPage';
import Register from './pages/RegisterPage/RegisterPage';
import Home from './pages/HomePage/Home';
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/home" element={<Home/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
