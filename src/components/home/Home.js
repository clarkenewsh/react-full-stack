import React from 'react'
import { useState, useEffect } from 'react';
import { deleteUser } from '../../utils';
// import { Navigate } from 'react-router-dom';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './Home.css';

const Home = ({ user, setUser }) => {

  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);


  const fetchPhotos = async () => {
    try {
      const response = await fetch('https://picsum.photos/v2/list/');

      if(response.status !== 200) {
        throw new Error('oops, could not connect to resource');
      }
      // parse data to json
      const data = await response.json();

      setPhotos(data);
      console.log(data);

    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }


  // use effect hook to load response data on page load - using [] dependency to update on load
  useEffect(() => {
    fetchPhotos();
  }, []);

  const deleteUserHandler = (user) => {
    deleteUser(setUser);
    console.log(user);
  }

  return (
    <section className="wrapper">
      {error && <h1>An error has occurred: {error}</h1>}
      <button onClick={() => deleteUserHandler(user, setUser)}>Delete account</button>
      {/* {user && <Navigate to="/home" />} */}
        <button onClick={fetchPhotos}>Grab photos</button>
        <section className='photo-cards'> 
          {photos.map((photo, index) => (
            <PhotoContainer photo={photo} key={index} />
          ))}
        </section>
       
    </section>
  
  )
}

export default Home;