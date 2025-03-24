import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { useTodoStore } from './stores/useTodoStore'
import Home from './pages/Home'
import CreateTask from './pages/CreateTask'
import Navbar from './components/Navbar'

const App = () => {

  const { user, checkAuth } = useTodoStore();

  useEffect(() => {
    checkAuth();
  }, [])

  return (
    <div>
      {user && <Navbar />}
      <Routes>
        <Route path='/' element={!user ? <Login /> : <Navigate to='/home' />} />
        <Route path='/home' element={user ? <Home /> : <Navigate to='/' />} />
        <Route path='/create-task' element={user ? <CreateTask /> : <Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App