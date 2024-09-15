import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const CreateJournal = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const token = localStorage.getItem("token")
      const response = await axios.post("http://localhost:5103/api/Journal",
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      )
      console.log(response);
      
      toast.success("Journal added succesfully")
      setTitle('')
      setContent('')
    } catch (error) {
      console.log(error);
      toast.error("failed!!")
    }
  }
  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-md bg-pink-900 hover:bg-red-900 text-white font-bold" onClick={()=>document.getElementById('my_modal_5').showModal()}>New Journal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box bg-white">
    <h3 className="font-bold text-gray-900 text-lg">Talk to me!</h3>
    <form onSubmit={handleSubmit}>
    <input 
        type='text'
        id='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='title...'
        className='mb-3 mt-3 bg-white border border-gray-700 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        <textarea
        id='content'
        value={content}
        onChange={(e) => setContent(e.target.value)}  
        className="textarea border text-gray-900 bg-white border-gray-700 w-full" 
        placeholder="Enter Content here ...." />

        <button
        type='submit' 
        className="btn btn-ghost mt-4 bg-pink-50 text-black">Add</button>
    </form>
    
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-ghost bg-pink-50 text-black">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default CreateJournal