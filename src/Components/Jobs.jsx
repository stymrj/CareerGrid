import jobs from "../Data/jobs.json";

function Jobs() {
  return (
    <div>
        {jobs.map((item)=>{
            return <h1>{item.role}</h1>
        })}
    </div>
    
  )
}

export default Jobs;
