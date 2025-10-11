import LeftSideBar from "./LeftSideBar"
import OtpVerification from "./OtpVerification"
import RightSideBar from "./RightSideBar"

function Home() {
  return (
    <div className="flex gap-2">
      {/* <h1>Welcome to Home Page!</h1> */}
      {/* <div> <LeftSideBar /> </div>

      <div className='flex flex-col h-[100vh] w-[70vw] p-2 gap-2 text-xl font-extrabold'>
      </div>

      <div>
        <RightSideBar />
      </div> */}

      <OtpVerification />
    </div> 
  )
}

export default Home
