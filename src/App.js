import React, { createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { Login } from './components/login';
import { NavBar } from './components/navbar';
import { NotFound } from './components/notfound';
import { Posts } from './components/posts';

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(()=> {
    const user = JSON.parse(localStorage.getItem('user-cred'));
    if (user) {
      console.log(user)
      setUser(user);
    }
  }, [setUser])
  return (
    <UserContext.Provider value={{user, setUser}}>
        <div className='app'>
          <NavBar isLoged={user !== null}/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='*' element={<NotFound/>}/>
            {/**how to make not found page hide the navbar */}
          </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
