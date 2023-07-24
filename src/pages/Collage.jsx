import React from 'react';
import CollageCart from '../components/CollageCart';
import { useLoaderData } from 'react-router-dom';
import Collages from '../components/Collages';
 

const Collage = () => {
    
    const Data =  useLoaderData()
    console.log(Data)
    return (
        <div className='xl:grid xl:grid-cols-3 xl:p-10 gap-10'>
            {
                Data.map(card => (
                    <Collages key={card.id} Clg={card}></Collages>
                ))
            }            
        </div>
    );
};

export default Collage;