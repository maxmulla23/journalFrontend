import React from 'react'
import home from './homepage.svg'
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <main className="relative h-screen overflow-auto bg-white dark:bg-pink-100">
    <header className="z-30 flex items-center w-full h-24 sm:h-32">
        <div className="container flex items-center justify-between px-6 mx-auto">
          <h2 className="font-bold text-gray-800 mt-4 uppercase text-2xl">SoulScript</h2>
            <div className="flex items-center">
                {/* <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                    <a href="#" className="flex px-6 py-2 text-indigo-500 border-b-2 border-indigo-500">
                        Home
                    </a>
                    <a href="#" className="flex px-6 py-2 hover:text-indigo-500">
                        Watch
                    </a>
                    <a href="#" className="flex px-6 py-2 hover:text-indigo-500">
                        Product
                    </a>
                    <a href="#" className="flex px-6 py-2 hover:text-indigo-500">
                        Contact
                    </a>
                    <a href="#" className="flex px-6 py-2 hover:text-indigo-500">
                        Carrer
                    </a>
                </nav> */}
                {/* <button className="flex flex-col ml-4 lg:hidden">
                    <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                </button> */}
            </div>
        </div>
    </header>
    <div className="relative z-20 flex items-center bg-white dark:bg-pink-100">
        <div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
            <div className="flex flex-col mt-8">
                <h1 className="w-full text-4xl text-center text-pink-900 uppercase sm:text-5xl">
                    The Journal for everyday thoughts
                </h1>
                <h2 className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit inventore rerum ut sunt adipisci labore. Facere
                  magni laudantium delectus quasi illum repellat neque laboriosam,
                </h2>
                <div className="flex items-center justify-center mt-4">
                    <Link to="/register">
                    <button type="button" className="px-4 py-2 mr-4 text-white uppercase bg-pink-900 border-2 border-transparent text-md hover:bg-gray-900">
                        Get started
                    </button>
                    </Link>
                    <Link to="/login">
                    <button type="button" className="px-4 py-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-md">
                        Login
                    </button>
                    </Link>
                    
                </div>
            </div>
            <div className="flex justify-center items-center relative w-full mx-auto mt-6 md:mt-0">
                <img src={home} alt="journal pic" className='w-96 h-96' />
            </div>
        </div>
    </div>
</main>
  )
}

export default LandingPage