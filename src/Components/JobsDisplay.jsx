import { useSelector } from "react-redux";

const JobDisplay = () => {
  const jobData = useSelector((store) => store.jobs);

  return (
    <div className="w-[45vw] h-[100vh] overflow-y-auto p-4 rounded-2xl ">
      {
        jobData.map((item) => (
          <div
            className="mb-5 w-full text-gray-800 border rounded-2xl p-6"
          >
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-xl font-bold text-gray-900">{item.title}</h1>
              <span className="font-bold text-red-600">{item.companyName}</span>
            </div>

            <p className="text-gray-600 mb-3">{item.desc}</p>

            <div className="text-sm text-gray-500 space-y-1">
              <p>
                <span className="font-semibold text-gray-700">Location:</span> {item.location}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Eligible Batches:</span> {item.batches}
              </p>
            </div>

            <a
              href={item.applyLink}
              className="mt-4 inline-block w-full bg-black text-white py-2 px-4 rounded-xl text-center"
            >
              Apply Now
            </a>
          </div>
        ))
      }
    </div>
  );
};

export default JobDisplay;
