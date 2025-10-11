import { useSelector, useDispatch } from "react-redux"
import { logOutUser } from "../Utils/UserSlice"

export function Profile() {
  const data = useSelector((store) => store.user)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-cyan-100">
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg text-white text-sm"
            onClick={() => dispatch(logOutUser())}
          >
            Log Out
          </button>
        </div>

        {!data ? (
          <div className="mt-6 text-center text-cyan-900 bg-white rounded-xl p-6 shadow">
            No Data Found
          </div>
        ) : (
          <div className="mt-6 bg-white rounded-2xl shadow p-6">
            <h1 className="text-2xl font-bold text-cyan-900 text-center">Your Profile</h1>

            <div className="mt-5 space-y-3">
              <div>
                <p className="text-sm text-cyan-600">Name</p>
                <p className="text-lg text-cyan-900">{data?.name || "—"}</p>
              </div>

              <div>
                <p className="text-sm text-cyan-600">Email</p>
                <p className="text-lg text-cyan-900 break-all">{data?.email || "—"}</p>
              </div>

              <div>
                <p className="text-sm text-cyan-600">Phone</p>
                <p className="text-lg text-cyan-900">{data?.phone || "—"}</p>
              </div>

              <div>
                <p className="text-sm text-cyan-600">Password</p>
                <p className="text-lg text-red-600 font-semibold">{data?.password}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
