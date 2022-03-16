import { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import { tokenLogin } from './utils';
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

  return (
    <div>
      <h1>React Full-Stack</h1>
      {/* if user exists render */}
      {user && <h2>{user}</h2>}
      {user ? <h1>{user}</h1> : <h1>Please type something...</h1>}
      {/* If not logged in render login. If logged in render home page */}
      {!user ? <Login setUser={setUser} /> : <Home />} 
     </div>
    //  <BrowserRouter className="App">
    //  <Routes>
    //    <Route path='/' element={ <Login setUser={setUser} user={user} /> } />
    //    <Route path='/home' element={ <Home user={user} /> } />
    //  </Routes>
    // </BrowserRouter>
  );
};

export default App;


