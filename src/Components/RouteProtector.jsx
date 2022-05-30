import React from 'react'
import { Navigate } from 'react-router-dom'
import Signin from '../Pages/Signin'
import { AuthContextConsumer } from '../Context/AuthContext'

const RouteProtector = ({ children }) => {
    const { user } = AuthContextConsumer()
    if (!user?.email) {
        setTimeout(() => {
            alert(`Merci de vous connecter pour acceder à cette page !`);
        },1000)
        return <Navigate to={'/signin'}/>
    }
  return (
      <div>{children }</div>
  )
}

export default RouteProtector