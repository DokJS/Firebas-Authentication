import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {AuthContextConsumer} from '../Context/AuthContext'

const Account = () => {
  const { user, logout } = AuthContextConsumer()
  const redirect = useNavigate()

  const handleClick = async () => {
    try {
      await logout()
      redirect('/')
    } catch (error) {
      console.log(error)
    }
  }
  // used for display msg before the redirection
  useEffect(() => {
    return () => {
      alert(`A la prochaine !`)
    }
  },[])
  return (
      <div className='w-[300px] m-auto'>
          <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
          <div>
        <p>Welcome,{user?.email}</p>
          </div>
          <button className='border py-2 px-5 mt-10' onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Account