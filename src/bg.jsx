import React from 'react';
import Foooter from './Foooter';

const BackgroundImage = () => {
  const backgroundImageStyle = {
    backgroundImage: "url('https://example.com/your-image.jpg')",
    backgroundSize: 'cover', // Ensures the image covers the entire background
    backgroundPosition: 'center', // Centers the image
    height: '100vh', // Full height of the viewport
    width: '100%',
  };

  return (
   <>
   <img src="" alt="" />

   <Foooter/>
   </>
  
  );
};

export default BackgroundImage;
