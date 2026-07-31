import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/landing/Home"
import  Login from "./pages/auth/Login"
import Dashboard from "./pages/Dashboard"
import RoleSelection from "./pages/auth/RoleSelection"


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
  
    <Route path="/choose-role" element={<RoleSelection/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
