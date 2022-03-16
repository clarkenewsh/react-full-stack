import React from 'react';
import './PhotoContainer.css';


const PhotoContainer = ({ photo }) => {
  return (
    <figure className='photo-card'>
      <img src={photo.download_url} alt="lorem picsum random pic" />
      <p>{photo.author}</p>
    </figure>
  )
}

export default PhotoContainer