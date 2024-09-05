import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Journal = () => {
  const [journals, setJournals] = useState([])
  useEffect(() => {
    const getJournals = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('http://localhost:5103/api/Journal', {
          headers: {
            Authorization: `Bearer ${token}`
          },
        })
        setJournals(response.data)
      } catch (error) {
        toast.error("Couldn't get journals")
        console.log(error);
        
      }
    }
    getJournals()
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
  }
  return (
    <div className='mr-3 space-y-3'>
      {journals.map((journal) => (
                <div className="collapse collapse-arrow bg-gray-200 border">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-lg text-blue-900 font-medium uppercase">{journal.title}</div>
                <div className="collapse-content">
                  <p className='text-pink-900'>{formatDate(journal.date)}</p>
                  <p className='text-gray-900'>{journal.content}</p>
                </div>
              </div>
      ))}  
    </div>
  )
}

export default Journal