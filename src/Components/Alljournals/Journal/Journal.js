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
        console.log(error)
        setLoading(false)
      }
    }
    getJournals()
  }, [])

  return (
    <div className='mr-3 space-y-3 '>
      {loading ? (
        <p>Loading journals...</p>  // Display loading message while journals are being fetched
      ) : (
        journals.length > 0 ? (
          journals.map((journal) => (
            <div role='alert' className="alert bg-gray-300 border-gray-300" key={journal.id}>
              <span>
                <p className="text-lg text-blue-900 font-medium uppercase">{journal.title}</p>
                <p className='text-gray-700'>
                  {new Date(journal.date).toLocaleDateString(
                    "en-us",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
                <p className='text-black'>{journal.content}</p>
              </span>
            </div>
          ))
        ) : (
          <p className='font-serif text-3xl md:text-xl flex items-center justify-center'>You have no journal entries</p>  // Display this message if no journals are found
        )
      )}
    </div>
  )
}

export default Journal
