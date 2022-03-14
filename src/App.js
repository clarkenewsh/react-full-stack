import './App.css';
import { useState } from 'react';
import Login from './components/login/login';

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
      {/* {user && <h2>{user.username}</h2>} */}
      {user ? <h1>{user.username}</h1> : <h1>Please type something...</h1>}
     <Login setUser={user} />
    </div>
  );
};

export default App;
