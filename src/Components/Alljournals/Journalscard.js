import React from 'react'
import CreateJournal from '../CreateJournal/CreateJournal'
import Journal from './Journal/Journal'

const Journalscard = () => {
  return (
    <div className="card bg-white text-neutral-content ">
        <div className='flex flex-row-reverse p-2 pr-2 pt-4 m-4'>
            <CreateJournal />
        </div>
        <hr className='border-solid border-gray-600' />
        <h2 className="card-title m-3 text-2xl text-blue-900 uppercase">my journals</h2>
    <div className="card-body">
      <Journal />
      
    </div>
  </div>
  )
}

export default Journalscard