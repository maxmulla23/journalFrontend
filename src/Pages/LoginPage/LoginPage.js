import { UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'




const LoginPage = () => {
 const [username, setUsername] = useState()
 const [password, setPassword] = useState()
 const navigate = useNavigate()

 const handleLogin = async (e) => {
  e.preventDefault()
  try {
    const response = await axios.post("http://localhost:5103/api/account/login", {
     username,
     password,
    })
    const data = response.data
    
      console.log(data);
      
      localStorage.setItem("token", data.token)
      localStorage.setItem("username", data.userName)
      localStorage.setItem("Email", data.email)
      
      toast.success("User is logged in");
      
      navigate("/profile")

  } catch (error) {
    console.log(error);
    toast.error("login failed!try again")
  }
 }
  return (
    <div className="relative h-screen overflow-hidden bg-gray-100 dark:bg--100 ">
    <div className="flex justify-center items-center mt-10">
    <div className="w-full max-w-md space-y-8 px-4 py-6 bg-white rounded-md shadow-sm">
    <UserCircleIcon className="mx-auto h-12 w-auto text-pink-900" />
    <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-pink-900">
        SoulScript
    </h2>
      <div className='flex justify-center items-center'>
      <div className="w-full max-w-xs">
     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin} >
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2">
           Username
         </label>
          <input 
            className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" 
            id="username"
            type="text"
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
      </div>
<div className="mb-6">
  <label className="block text-gray-700 text-sm font-bold mb-2" >
    Password
  </label>
  <input 
    className="shadow appearance-none border rounded w-full bg-white py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"  
    id="password"
    type='password'
    placeholder="Enter Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
  
</div>
<div className="flex items-center justify-between">
  <button 
    className="bg-pink-900 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
    type="submit"
    
    >
    Sign In
  </button>
  <a className="inline-block align-baseline font-bold text-sm text-black hover:text-pink-800" href="/register">
    Are you new?Sign Up
  </a>
</div>
</form>
<p className="text-center text-gray-500 text-xs">
&copy;2024 Max Mulla. All rights reserved.
</p>
</div>
      </div>
     
</div>
   
</div>
    
</div>


  )
}

export default LoginPage