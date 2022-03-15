import './App.css';
import { useState } from 'react';
import Login from './components/login/login';
import Home from './components/home/Home';

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
