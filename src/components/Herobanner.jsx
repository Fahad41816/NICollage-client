import React from 'react';
import Image from '../assets/image/herobanner.jpg'

const Herobanner = () => {
    return (
        <div className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover object-cover object-center bg-center"
          style={{
            backgroundImage: `url(${Image})`,
          }}
        ></div>
  
        {/* Hero Content */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to <span className='text-green-500'> NI collage</span> </h1>
            <div className="mt-8 text-center text-white max-w-xl">
          <p className="text-lg">
            NI collage is a prestigious institution committed to providing quality education and nurturing talented individuals. With a rich history of academic excellence and a focus on research and innovation, we strive to create leaders of tomorrow.
          </p>
           
        </div>
          </div>
          
        </div>
      </div>
    );
};

export default Herobanner;