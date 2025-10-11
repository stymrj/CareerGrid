import { useState } from "react"
import { v4 as uuid } from "uuid"
import { useDispatch } from "react-redux"
import { addUser } from "../Utils/UserSlice"
import { Link } from "react-router-dom"
import OtpVerification from "./OtpVerification"
import toast from "react-hot-toast"

function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()
  const [otp,setOtp] = useState(null)


  const newuser = {
    id: uuid(),
    name,
    email,
    phone,
    password
  }
  const dispatch = useDispatch()


  return (
    <div className="flex">
      <div className="flex flex-col  items-center justify-center bg-white h-[100vh] w-[50vw]">
        <h1 className="font-bold mb-10 text-5xl">
          Join <span className="text-red-600">CareerGrid</span>
        </h1>
        <div className="p-2 ml-5 font-semibold text-xl text-center">
          Create your account to unlock career opportunities, <br />
          tools, and resources curated just for you.
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center h-[100vh] w-[50vw]">


        <div className="flex flex-col gap-2 gradient bg-gradient-to-bl
         from-white to-cyan-200 shadow-black-200 justify-center items-center 
         rounded-2xl border-2 transition-colors ease-initial border-r-amber-300
          border-l-blue-300 border-b-pink-300 border-t-green-300  h-[80vh] w-[30vw]
          
          ">
          <h1 className="text-2xl mb-2">Welcome to <span className="text-red-600 font-extrabold">CareerGrid!</span></h1>
          <div className="mr-60">
            <label className="font-semibold">Name:</label>
          </div>


          <input
            onChange={(e) => (setName(e.target.value))}
            value={name} className="border p-2 rounded-xl w-[25vw]" type="text" placeholder="Enter Your Name" />
          <div className="mr-60">
            <label className="font-semibold">Email: </label>
          </div>

          <input
            value={email} onChange={(e) => (setEmail(e.target.value))}
            className="border p-2 rounded-xl w-[25vw]" type="email" placeholder="Enter Your Email" />
          <div className="mr-44">
            <label className="font-semibold">Phone Number:</label>
          </div>

          <input
            onChange={(e) => (setPhone(e.target.value))}
            value={phone} className="border p-2 rounded-xl w-[25vw]" type="text" placeholder="Enter Your Number" />
          <div className="mr-40">
            <label className="font-semibold">Choose Password:</label>
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password} className="border p-2 rounded-xl w-[25vw]" type="password" placeholder="Enter Your Password" />

          <button
            onClick={() => {
              //Preventing for creating empty account
              if(!name || !email || !phone || !password){
                toast.error("Please fill all fields")
                return
              }

              dispatch(addUser(newuser))
              const generated = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
              setOtp(generated)
              toast.success("Account Created Succesfully!")
              localStorage.setItem('user', JSON.stringify(newuser))
              setEmail('')
              setName('')
              setPhone('')
              setPassword('')

              const otp = Math.floor(Math.random()*6*100000)
              console.log(otp)
            }}
            className="border w-[25vw] bg-black p-2 text-white rounded-2xl">Sign Up</button>

          <div className="flex">
            <h1>Already have account?</h1>
            <Link className="text-blue-600 ml-2 font-bold " to={'/login'}>Log In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
