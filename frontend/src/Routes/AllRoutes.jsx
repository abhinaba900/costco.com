import React from 'react'
import{ Routes, Route }from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Loading from '../Components/Loading'
import Error from '../Components/Error'
import ForgotPasswoard from '../Components/ForgotPasswoard'
function AllRoutes() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/loading" element={<Loading/>} />
        <Route path="/forgot-password" element={<ForgotPasswoard/>} />
        <Route path="*" element={<Error/>} />
       </Routes>
    </div>
  )
}

export default AllRoutes