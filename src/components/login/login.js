import React from 'react';
import { useState } from 'react';


const Login = ({ setUser }) => {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setUser({username: username, email: email, pass: pass});
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
        {/* only render email input if bool is false */}
        {!bool && <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" />}
        <input onChange={(event) => setPass(event.target.value)} type="password" placeholder="Password" />
        <button type='submit'>Submit</button>
      </form>
      {/* Set bool to opposite */}
      <button onClick={() => setBool(!bool)}>Login or sign-up</button>
    </>
  );
}

export default Login;