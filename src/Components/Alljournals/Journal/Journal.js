import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Journal = () => {
  const [journals, setJournals] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getJournals = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('http://localhost:5103/api/Journal', {
          headers: {
            Authorization: `Bearer ${token}`
          },
        })
        setJournals(response.data.reverse())
        setLoading(false)
      } catch (error) {
        toast.error("Couldn't get journals")
        console.log(error);
        setLoading(false)
      }
    }
    getJournals()
  }, [])


  return (
    <div className='mr-3 space-y-3 '>
      {journals.map((journal) => (
                <div role='alert' className="alert bg-gray-300 border-gray-300" key={journal.id}>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg> */}
                <span>
                <p className="text-lg text-blue-900 font-medium uppercase">{journal.title}</p>
                  <p className='text-gray-700'>{new Date(journal.date).toLocaleDateString(
                    "en-us",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}</p>
                  <p className='text-black'>{journal.content}</p>
                </span>
              </div>
      ))}  
    </div>
  )
}

export default Journal