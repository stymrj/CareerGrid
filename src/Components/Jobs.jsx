import jobs from "../Data/jobs.json";
import Blogs from './Blogs'

function Jobs() {
  return (
    // <div className="grid grid-cols-3 gap-2 p-2 h-[40vh]">
    //   {jobs.map((items)=>{
    //     return (
    //       <div className=" border ">
    //         <div className="flex flex-col items-center justify-center gap-2">
    //         <img src={items.companyImage} alt="" />
    //         <h1 className="text-xl">{items.role}</h1>
    //         <p className="font-semibold">{items.location}</p>
    //         <p>Description : {items.description}</p>
    //         <p>{items.applyLink}</p>
    //         <button className="border p-2 bg-black text-white rounded-xl">Apply Here</button>
    //         </div>
    //       </div>
    //     )
    //   })}
    // </div>

    <div>
      <Blogs />
    </div>
    
  )
}

export default Jobs;
