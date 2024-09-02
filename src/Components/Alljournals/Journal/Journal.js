import React, { useState } from 'react'

const journals = [
    {
        title: "hello world",
        content: "i hope this will look beautiful",
        
    },
    {
        title: "collecting",
        content: "we collect cookiies for absolutely no reason, we just like to annoy you bitch"
    },
    {
      title: "Interface",
      content: " I love how this interface looks nice"
    }
]

const Journal = () => {
  return (
    <div className='mr-3 space-y-3'>
      {journals.map((journal) => (
                <div className="collapse collapse-arrow bg-gray-200 border">
          
                <input type="radio" name="my-accordion-2" defaultChecked />
              
                <div className="collapse-title text-lg text-blue-900 font-medium uppercase">{journal.title}</div>
                <div className="collapse-content">
                  <p className='text-gray-900'>{journal.content}</p>
                </div>
              </div>
      ))}  
    </div>
  )
}

export default Journal