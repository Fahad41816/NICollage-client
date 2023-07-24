import React from 'react';
import AddmitionCard from '../components/AddmitionCard';
import { useLoaderData } from 'react-router-dom';

const Addmition = () => {

    const Data = useLoaderData()
     

    return (
        <div>
            <AddmitionCard addmition={Data}></AddmitionCard>
        </div>
    );
};

export default Addmition;