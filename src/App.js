import { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import { tokenLogin } from './utils';
import Navbar from './components/navbar/Navbar';
import './App.css';

const App = () => {

  // how useState works under the hood
  // const useState = (initialVal) => {
  //   let state = initialVal;
  //   const setState = (newValue) => {
  //     state = newValue;
  //   }
  //   return [state, setState]
  // }

  const [user, setUser] = useState();

  // call token login on page load to grab user token. setUser with the token to persist login - here if not using react router dom
  useEffect(() => {
    if (localStorage.key("myToken")) {
      tokenLogin(setUser);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("myToken");
    setUser(null);
  }

  return (
    <>
      <header>
        <Navbar user={user} logoutHandler={logoutHandler} />
      </header>
      <main className='wrapper'>
        {/* if user exists render */}
        {/* {user && <h2>{user}</h2>} */}
        {user ? <h1>Welcome, {user}</h1> : <h1>Login / Register</h1>}
        {/* If not logged in render login. If logged in render home page */}
        {!user ? <Login setUser={setUser} /> : <Home />} 
      </main>
     </>
    //  <BrowserRouter className="App">
    //  <Routes>
    //    <Route path='/' element={ <Login setUser={setUser} user={user} /> } />
    //    <Route path='/home' element={ <Home user={user} /> } />
    //  </Routes>
    // </BrowserRouter>
  );
};

export default App;


