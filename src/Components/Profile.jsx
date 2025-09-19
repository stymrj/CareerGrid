import { useSelector } from "react-redux"

export function Profile() {
    const data = useSelector((store) => store.user)
    console.log(data)
    return (
        <div className="bg-cyan-100 h-[100vh]">
            {data ? <div>
                <div className=" text-center h-[100vh] text-2xl ">
                    <h1 className="font-bold text-5xl">Your Profile Data</h1>
                    <h1>{data.name}</h1>
                    <h1>{data.email}</h1>
                    <h1>{data.phone}</h1>
                    <p>Your leaked password - {data.password} </p>
                </div>
            </div> : <div>No Data Found</div>}
        </div>
    )
}