function SignUp() {
  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center bg-cyan-100 h-[100vh] w-[50vw]">
        <h1 className="font-bold text-5xl">
          Join <span className="text-red-600">CareerGrid</span>
        </h1>
        <h2 className="p-2 ml-5 font-semibold text-xl text-center">
          Create your account to unlock career opportunities, <br />
          tools, and resources tailored just for you.
        </h2>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center h-[100vh] w-[50vw]">


        <div className="flex flex-col gap-2 justify-center items-center rounded-2xl border h-[80vh] w-[30vw]">
          <h1 className="text-2xl mb-2">Welcome to <span className="text-red-600 font-extrabold">CareerGrid!</span></h1>
          <div className="mr-60">
            <label className="font-semibold">Name</label>
          </div>
          <input className="border p-2 rounded-xl w-[25vw]" type="text" placeholder="Enter Your Name" />
          <div className="mr-60">
            <label className="font-semibold">Email</label>
          </div>
          <input className="border p-2 rounded-xl w-[25vw]" type="email" placeholder="Enter Your Email" />
          <div className="mr-44">
            <label className="font-semibold">Phone Number</label>
          </div>
          <input className="border p-2 rounded-xl w-[25vw]" type="text" placeholder="Enter Your Number" />
          <div className="mr-40">
            <label className="font-semibold">Choose Password</label>
          </div>
          <input className="border p-2 rounded-xl w-[25vw]" type="password" placeholder="Enter Your Password" />

          <button className="border w-[25vw] bg-black p-2 text-white rounded-2xl">Sign Up</button>

          <div className="flex">

          <h1>Already have account?</h1>
          <button className="font-extrabold text-green-500">Log In</button>                   
          </div>
                    

        </div>


      </div>
    </div>
  )
}

export default SignUp
