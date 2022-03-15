import React from 'react'
import { useState, useEffect } from'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';

const Home = () => {

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


  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={fetchPhotos}>Grab photos</button>
      {photos.map((photo, index) => (
        <PhotoContainer photo={photo} key={index} />
      ))}
    </div>
  
  )
}

export default Home;