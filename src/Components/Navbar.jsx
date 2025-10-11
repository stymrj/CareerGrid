import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex gradient bg-gradient-to-tl from-cyan-200 to-blue-400 justify-between p-2 text-white bg-blue-600 font-bold">

      <div>CareerGrid</div>
      <div className="flex gap-3">
      <Link to={'/'}>Home</Link>
      <Link to={'/jobs'}>Jobs</Link>
      {/* <Link to={'/blogs'}>Blogs</Link> */}
      <Link to={'/products'}>Products</Link>
      <Link to={'/profile'}>Profile</Link>
      {/* <Link to={'/signup'}>SignUp</Link> */}
      <Link to={'/login'}>Login</Link>
      </div>
    </div>
  )
}


export default Navbar