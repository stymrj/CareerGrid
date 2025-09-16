function Login(){
    return(
        <div className="flex">
            <div className="flex flex-col justify-center items-center bg-cyan-200 h-[100vh] w-[50vw]">
                <p className="text-5xl p-3 font-extrabold">Welcome Back!</p>
                <p className="text-xl font-extrabold">Log in to continue building your career with CareerGrid.</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-white h-[100vh] w-[50vw]">
                <div className="flex flex-col items-center justify-center  p-2 m-2 border rounded-2xl h-[60vh] w-[30vw]">
                    <p className="mb-6 text-2xl font-bold">Welcome to <span className="text-red-600 font-bold">CareerGrid!</span></p>
                    
                    <div className="mr-55 font-semibold">
                    <label>Email: </label>
                    </div>

                    <input className="border rounded-lg p-2 m-2 w-[25vw]" type="text" placeholder="Enter your Email" />
                    
                    <div className="mr-50 font-semibold">
                    <label>Password: </label>
                    </div>


                    <input className="border rounded-lg p-2 m-2 w-[25vw]" type="password" placeholder="Enter your Password" />
                    <button className="border w-[20vw] m-2 p-1 bg-black text-white text-xl  rounded-2xl">Login</button>
                    <div className="flex">
                    <p>Don't have Account? </p>
                    <button className="font-extrabold text-green-500">Sign Up</button>                   
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
