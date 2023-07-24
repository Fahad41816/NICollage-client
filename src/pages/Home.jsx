import React from 'react';
import Herobanner from '../components/Herobanner';
import CollageCart from '../components/CollageCart';
import { useLoaderData } from 'react-router-dom';
import Graguate from '../components/graguate';


const Home = () => {
    const Data = useLoaderData()
    console.log(Data)
    return (
        <div>
            <Herobanner></Herobanner>
              
            <CollageCart collage={Data}></CollageCart>

            <Graguate></Graguate>

            
        </div>
    );
};

export default Home;