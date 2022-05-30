import React from 'react';
import Signin from './Pages/Signin';
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Account from './Pages/Account';
import { AuthContextProvider } from './Context/AuthContext'
import RouteProtector from './Components/RouteProtector'

function App() {
  return (
    <div>
      <AuthContextProvider>
          <NavBar />
        <Routes>
          <Route exact path='/' element={<Home/> }/>
          <Route exact path='/signin' element={<Signin/> }/>
          <Route exact path='/account' element={<RouteProtector>
            <Account/>
          </RouteProtector> }/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
