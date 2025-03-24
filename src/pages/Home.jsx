import React from 'react'
import Todo from '../components/Todo';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="flex items-center justify-center mb-5">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] md:w-[85%] lg:w-[70%] xl:w-[60%]">
        <div className='flex sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-gray-200'>
          <h3 className='text-2xl font-bold text-gray-800 mb-4 sm:mb-0'>All Tasks</h3>
          <Link
            to='/create-task'
            className='bg-green-500 hover:bg-green-600 cursor-pointer px-6 py-2 rounded-lg text-white font-semibold transition transform hover:scale-105 shadow-md'
          >
            Add Task
          </Link>
        </div>
        <Todo />
      </div>
    </div>
  )
}

export default Home