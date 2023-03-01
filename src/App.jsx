import React from "react"
import {Routes, Route} from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div>
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        <Footer/>
        </div>
        
    )
}