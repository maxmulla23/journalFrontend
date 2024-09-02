import React from 'react'

const CreateJournal = () => {
  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-md bg-pink-900 hover:bg-red-900 text-white font-bold" onClick={()=>document.getElementById('my_modal_5').showModal()}>New Journal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box bg-white">
    <h3 className="font-bold text-gray-900 text-lg">Talk to me!</h3>
    <form>
    <input 
        type='text'
        id='title'
        placeholder='title...'
        className='mb-3 mt-3 bg-white border border-gray-700 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        <textarea className="textarea textarea-bordered bg-white border-gray-700 w-full" placeholder="Enter Content here ...." />

        {/* <button>Post</button>  */}
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