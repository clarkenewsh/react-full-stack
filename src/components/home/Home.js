import React from 'react'
import { useState, useEffect } from 'react';
import { deleteUser } from '../../utils';
// import { Navigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './Home.css';

const Home = ({ user }) => {

  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('https://picsum.photos/v2/list/');
      // convert to json
      const data = await response.json();

      setPhotos(data);
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }


  // use effect hook to load response data on page load - using [] dependency to update on load
  useEffect(() => {
    fetchPhotos();
  }, []);

  const deleteHandler = (user) => {
    deleteUser();
    console.log(user);
  }

  return (
    <section className="wrapper">
      {/* {user && <Navigate to="/home" />} */}
        <button onClick={fetchPhotos}>Grab photos</button>
        <section className='photo-cards'> 
          {photos.map((photo, index) => (
            <PhotoContainer photo={photo} key={index} />
          ))}
        </section>
       <button onClick={() => deleteHandler(user)}>Delete account</button>
    </section>
  
  )
}

export default Home;