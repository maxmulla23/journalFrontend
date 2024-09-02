import { UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

const user = {
    name: "Iweene Wanjiru",
    username: "Iweene",
    email: "iweene@gmail.com"

}

const ProfileCard = () => {
  return (
    <div className='card bg-white w-96 shadow-xl'>
        <figure className='px-10 pt-10'>
            <UserCircleIcon className='h-44 w-auto md:h-22' />
        </figure>
        <div className='card-body items-center text-center'>
            <h2 className='card-title text-3xl text-gray-900 text-bold'>{user.username}</h2>
            <p className='text-xl text-gray-900'>{user.email}</p>
        </div>
    </div>
  )
}

export default ProfileCard