import { useState } from "react"
import JobDisplay from "./JobsDisplay"
import {v4 as uuid} from 'uuid'
import { useDispatch } from "react-redux"
import { addJob } from "../Utils/JobSlice"

const JobsForm = () => {
    const[title,setTitle] = useState("")
    const[location,setLocation] = useState("")
    const[desc,setDesc] = useState("")
    const[batches,setBatches] = useState("")
    const[applyLink,setApplyLink] = useState("")
    const[companyName,setcompanyName] = useState("")

    const dispatch = useDispatch()


    const job = {
        id : uuid(),
        title,
        location,
        desc,
        batches,
        applyLink,
        companyName
    }

    return (
        <div className="flex h-screen">
            <div className="flex flex-col items-center gap-1 w-[50vw] p-2 text-s">
                <h1 className="text-center text-2xl font-bold">Job <span className="text-2xl font-bold text-red-600">Posting</span></h1>
                <label className="font-semibold">Company Name :</label>
                <input 
                onChange={(e)=>setcompanyName(e.target.value)}
                className="p-2 w-[30vw] border rounded-2xl" type="text" placeholder="Enter Company Name" />

                <label className="font-semibold">Job Title :</label>
                <input 
                onChange={(e)=>setTitle(e.target.value)}
                className="p-2 w-[30vw] border rounded-2xl" type="text" placeholder="Enter Title of Job" />
                <label className="font-semibold">Job Location :</label>
                <input 
                onChange={(e)=>setLocation(e.target.value)}
                className="p-2 w-[30vw] border rounded-2xl" type="text" placeholder="Enter Location of Job" />
                <label className="font-semibold">Short Description :</label>
                <input 
                onChange={(e)=>setDesc(e.target.value)}
                className="p-2 w-[30vw] border rounded-2xl" type="text" placeholder="Enter Short Description" />
                <label className="font-semibold">Eligible Batches :</label>
                <input 
                onChange={(e)=>setBatches(e.target.value)}
                className="p-2 w-[30vw] border rounded-2xl" type="text" placeholder="Enter Eligible Batches" />
                <label className="font-semibold">Apply Link :</label>
                <input 
                onChange={(e)=>setApplyLink(e.target.value)}
                className="p-2 w-[30vw] border rounded-2xl" type="text" placeholder="Enter Apply Link of Job" />
                
                
                <button
                onClick={()=>{
                    if(!title || !companyName || !applyLink || !location){
                return
              }


                    dispatch(addJob(job))

                }}
                className="inline-block bg-black mt-2 text-white w-[30vw] rounded-2xl p-2 text-xl">Submit</button>
                </div>

            <div className=" bg-cyan-100 w-[50vw]">
                <JobDisplay />
            </div>

        </div>
    )
}

export default JobsForm