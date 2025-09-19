import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between p-2 text-white bg-black font-bold">

      <div>CareerGrid</div>
      <div className="flex gap-3">
      <Link to={'/jobs'}>Jobs</Link>
      <Link to={'/blogs'}>Blogs</Link>
      <Link to={'/products'}>Products</Link>
      <Link to={'/profile'}>Profile</Link>
      <Link to={'/signup'}>SignUp</Link>
      <Link to={'/login'}>Login</Link>
      </div>
    </div>
  )
}


export default Navbar