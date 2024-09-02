
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import Journalscard from '../../Components/Alljournals/Journalscard'

const ProfilePage = () => {
  return (
    <div className=' bg-gray-200 relative h-screen overflow-hidden'>
    <div>
      <Navbar />
    </div>
    <div className='bg-yellow-100'>
    <h1 className='font-bold text-3xl  p-7 m-2 text-black'>Hey Stranger &#128512;</h1>
    </div>
    <div className='pl-5 flex flex-col md:flex-row m-1'>
    <ProfileCard />
    <div className='mt-4 ml-2 flex-auto'>
    <Journalscard />
    </div>
    
    </div>

    </div>
  )
}

export default ProfilePage