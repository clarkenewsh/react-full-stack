import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
// import { tokenLogin } from './utils';
// import createUSer, login funcs from utils
import { createUser, login } from '../../utils';


const Login = ({ setUser, user }) => {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);

  // use effect here if using router router dom
  // call token login on page load to grab user token. setUser with the token to persist login 
  // useEffect(() => {
  //   tokenLogin(setUser);
  // },[]);

  const submitHandler = (e) => {
    e.preventDefault();
    // setUser({username: username, email: email, pass: pass});

    // if press login bool is true and therefore runs the login function
    if(bool) {
      // use the login utils function to login user in - then pass setUser as an argument and use setter in the utils to log user in
      login(username, pass, setUser)
    } else if(email && email.includes("@")) {
        // use the createUser utils functions to post data - then pass setUser as an argument and use setter in the utils
        createUser(username, email, pass, setUser);
    } 
  };

  return (
    <>
      {/* {!user && <Navigate to="/" />} */}
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