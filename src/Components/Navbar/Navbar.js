import { UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("Email")
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    navigate("/")  
}
  return (
    <div className="navbar bg-pink-900">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">SoulScript</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <UserCircleIcon />
        </div>
      </div>
      
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {/* <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li> */}
        <li><a onClick={logout}>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar