import React,{useEffect} from 'react'
import { GoogleButton } from 'react-google-button';
import { AuthContextConsumer } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { user, signin } = AuthContextConsumer()
  const redirect = useNavigate()

  const handleClick = async () => {
    try {
      await signin()
      redirect('/account')
    } catch (error) {
      console.log(error)
    }
  } 

  // used for automatically redirect user when he is already authenticate
  useEffect(() => {
    if (user?.email) {
      setTimeout(() => {
        alert('Vous êtes déjà connecté !')
        redirect('/account')
      }, 1000);
      
    }
  },[])

  return (
      <div>
          <h1 className="text-center text-3xl font-bold py-8">Sign in</h1>
          <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleClick}/>
          </div>
    </div>
  )
}

export default Signin