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
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setUser({username: username, email: email, pass: pass});
  }

  return (
    <div className="App">
      <h1>React Full-Stack</h1>
      {/* if user exists render */}
      {user && <h2>{user.username}</h2>}
      {user ? <h1>{user.username}</h1> : <h1>Please type something...</h1>}
     <Login 
        handler={submitHandler} 
        nameSetter={setUsername} 
        emailSetter={setEmail} 
        passSetter={setPass} 
        boolSetter={setBool}
        bool={bool}
      />
    </div>
  );
};

export default App;
