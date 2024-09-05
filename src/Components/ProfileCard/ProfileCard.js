import { UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const ProfileCard = () => {
  const [data, setData] = useState({
    username:'',
    email:'',
  });

  useEffect(() => {
    async function getUser() {
      const username = localStorage.getItem("username")
      const email = localStorage.getItem("Email")
      try {
        if (username && email) {
          setData({username, email})
          console.log("user data", setData);
        } 
      } catch (error) {
        console.log(error);
        toast.error("Failed")
      }
    }
    getUser()
  }, [])
  return (
    <div className='card bg-white w-96 shadow-xl'>
        <figure className='px-10 pt-10'>
            <UserCircleIcon className='h-44 w-auto md:h-22' />
        </figure>
             <div className='card-body items-center text-center'>
             <h2 className='card-title text-3xl text-gray-900 text-bold uppercase'>{data.username}</h2>
             <p className='text-xl text-gray-900'>{data.email}</p>
         </div> 
    </div>
  )
}

export default ProfileCard