import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const OtpVerification = () => {
    
    const ipRef1 = useRef()
    const ipRef2 = useRef()
    const ipRef3 = useRef()
    const ipRef4 = useRef()
    const ipRef5 = useRef()
    const ipRef6 = useRef()
    
    const arr = [ipRef1,ipRef2,ipRef3,ipRef4,ipRef5,ipRef6]
    const[curRef, setCurRef] = useState(0)

    useEffect(()=>{
        arr[curRef].current.focus()
    })
    
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-cyan-50">
  <div className="w-[92vw] max-w-md rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
    <div className="text-center">
      <h1 className="text-2xl font-extrabold text-gray-900">OTP Verification</h1>
      <p className="mt-1 text-sm text-gray-600">Enter the 6-digit code showing in the console!</p>
    </div>

    <div className="mt-6 flex items-center justify-center gap-2">
      {arr.map((item, idx) => (
        <input
        onChange={()=>{
            if(curRef==5){
                return
            }
            setCurRef(curRef+1)
        }}
          ref={arr[idx]}
          type="text"
          className="h-12 w-10 rounded-xl border text-2xl font-bold text-center"
        />
      ))}
    </div>

    <button
      type="button"
      className="mt-6 w-full rounded-xl bg-cyan-600 px-4 py-3 text-white "
    >
      Verify
    </button>

  </div>
</div>

  )
}

export default OtpVerification