import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/landing/Home"
import  Login from "./pages/auth/Login"
import Dashboard from "./pages/Dashboard"
import RoleSelection from "./pages/auth/RoleSelection"
import WorkerSignUp from "./pages/auth/WorkerSignUp";
import CompanySignup from "./pages/auth/CompanySignUp"
import CompanyOnboarding from "./pages/auth/CompanyOnboarding"
import WorkerOnboarding from "./pages/auth/WorkerOnboarding"



function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
  
    <Route path="/choose-role" element={<RoleSelection/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/worker/signup" element={<WorkerSignUp/>}/>
    <Route path="/company/signup" element={<CompanySignup/>}/>
    <Route path="/worker/onboarding" element={<WorkerOnboarding/>}/>
    <Route path="/company/onboarding" element={<CompanyOnboarding/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
