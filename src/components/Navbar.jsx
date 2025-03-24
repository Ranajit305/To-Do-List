import React from 'react'
import { useTodoStore } from '../stores/useTodoStore'
import { Link } from 'react-router-dom';
import { User, ClipboardList, LogOut } from 'lucide-react';

const Navbar = () => {

  const { user, logout } = useTodoStore();

  return (
    <div className='sticky top-0 z-50 bg-slate-800 shadow-lg mb-10'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo/App Name */}
          <Link
            to='/'
            className='flex items-center space-x-2 group'
          >
            <div className='p-1.5 rounded-lg bg-blue-500 group-hover:bg-blue-600 transition'>
              <ClipboardList className='w-5 h-5 text-white' />
            </div>
            <span className='font-bold text-xl sm:text-2xl text-blue-500'>
              To-Do App
            </span>
          </Link>

          {/* Welcome Message */}
          <div className='hidden sm:flex items-center space-x-2'>
            <User className='w-5 h-5 text-blue-300' />
            <p className='text-blue-100 font-medium'>
              Welcome, <span className='text-white font-semibold'>{user}</span>
            </p>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => logout()}
            className='flex items-center space-x-1 text-white bg-red-500 hover:bg-red-600 shadow-md cursor-pointer px-4 py-2 rounded-lg font-semibold transition duration-200'
          >
            <LogOut className='w-5 h-5' />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar