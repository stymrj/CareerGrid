import Login from "./Components/Login"
import Navbar from "./Components/Navbar"
import SignUp from "./Components/Signup"
import Home from "./Components/Home"
import Blogs from "./Components/Blogs"
import {Profile } from './Components/Profile'
import { Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./Utils/protectedRoutes"
import Jobs from "./Components/Jobs"
import Products from "./Components/Products"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/products' element={<Products />}/>


        <Route path='*' element={<Home />}/>

        <Route element={<ProtectedRoutes/>}>
          <Route path='/profile' element={<Profile />}/>
        </Route>

        
      </Routes>
      
    </div>
  )
}

export default App
