import { useState } from "react"
import { v4 as uuid } from "uuid"
import { useDispatch } from "react-redux"
import { addUser } from "../Utils/UserSlice"
import { Link } from "react-router-dom"

function SignUp() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()



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
      <div className="flex flex-col items-center justify-center bg-cyan-100 h-[100vh] w-[50vw]">
        <h1 className="font-bold text-5xl">
          Join <span className="text-red-600">CareerGrid</span>
        </h1>
        <h2 className="p-2 ml-5 font-semibold text-xl text-center">
          Create your account to unlock career opportunities, <br />
          tools, and resources curated just for you.
        </h2>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center h-[100vh] w-[50vw]">


        <div className="flex flex-col gap-2 justify-center items-center rounded-2xl border h-[80vh] w-[30vw]">
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
                return
              }

              dispatch(addUser(newuser))
              alert("Account Created Succesfully!")
              localStorage.setItem('user', JSON.stringify(newuser))
              setEmail('')
              setName('')
              setPhone('')
              setPassword('')
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
