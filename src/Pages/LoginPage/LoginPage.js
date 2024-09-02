
import { UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

const LoginPage = () => {
 
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
     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2">
           Username
         </label>
          <input 
            className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" 
            id="username"
            type="text"
            placeholder='username'
            
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
    
    />
  
</div>
<div className="flex items-center justify-between">
  <button 
    className="bg-pink-900 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
    type="button"
    
    >
    Sign In
  </button>
  {/* <a className="inline-block align-baseline font-bold text-sm text-black hover:text-pink-800" href="#">
    Forgot Password?
  </a> */}
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