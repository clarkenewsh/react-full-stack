import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ user, logoutHandler }) => {
  return (
    <>
      <nav className='wrapper'>
        <a id="logo">Instagram</a>
        {/* <Link to="/">Login / Register</Link> */}
        {user && <p>Logged In: {user}</p>}
        {user && <button onClick={logoutHandler}>Logout</button>}
      </nav>
    </>
  )
}

export default Navbar;