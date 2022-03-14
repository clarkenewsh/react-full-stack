import React from 'react';


const Login = ({ handler, nameSetter, emailSetter, passSetter, boolSetter, bool }) => {

  return (
    <>
      <form onSubmit={handler}>
        <input onChange={(event) => nameSetter(event.target.value)} placeholder="Username" />
        {/* only render email input if bool is false */}
        {!bool && <input onChange={(event) => emailSetter(event.target.value)} placeholder="Email" />}
        <input onChange={(event) => passSetter(event.target.value)} placeholder="Password" />
        <button type='submit'>Submit</button>
      </form>
      {/* Set bool to opposite */}
      <button onClick={() => boolSetter(!bool)}>Login or sign-up</button>
    </>
  );
}

export default Login;