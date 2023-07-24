import React from 'react';
import Title from './Title';
import Image from '../assets/image/graduate.jpg'
import Image1 from '../assets/image/graduate3.jpg'
import Image2 from '../assets/image/graguate4.jpg'
 
import Image3 from '../assets/image/graguate7.jpg'
import Image4 from '../assets/image/graguate8.jpg'
import Image5 from '../assets/image/graguate9.jpg'
import Image6 from '../assets/image/graguate10.jpg'

const Graguate = () => {
    return (
        <div>
            <Title text={"graduate's "}></Title>

            <div className='xl:grid xl:grid-cols-3 items-center justify-center p-10 gap-3 '>
                 <img className='rounded w-80' src={Image} alt="" /> 
                 <img className='rounded w-80' src={Image1} alt=""   /> 
                 <img className='rounded w-80 ' src={Image2} alt=""   /> 
                 <img className='rounded w-80' src={Image3} alt=""   /> 
                 <img className='rounded w-80' src={Image4} alt=""   /> 
                 <img className='rounded w-80' src={Image5} alt=""   /> 
                 <img className='rounded w-80' src={Image6} alt=""   /> 
            </div>
        </div>
    );
};

export default Graguate;