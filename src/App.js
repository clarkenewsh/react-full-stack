import { useState, useEffect } from 'react';
import Login from './components/login/login';
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

  // call token login on page load to grab user token. setUser with the token to persit login 
  useEffect(() => {
    tokenLogin(setUser);
  },[]);

  return (
    <div className="App">
      <h1>React Full-Stack</h1>
      {/* if user exists render */}
      {user && <h2>{user}</h2>}
      {user ? <h1>{user}</h1> : <h1>Please type something...</h1>}
      {/* If not logged in render login. If logged in render home page*/}
     {!user ? <Login setUser={setUser} /> : <Home />}
    </div>
  );
};

export default App;
