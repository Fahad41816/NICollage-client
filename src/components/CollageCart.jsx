import React from 'react';
import Title from './Title';
import Collages from './Collages';

const CollageCart = ({collage}) => {
    return (
        <div>
             <Title text={"Our Collage"}></Title>
            <div className='gap-10 xl:grid xl: grid-cols-3 items-center justify-center xl:p-20 '>

            {
                collage.map(Clg => (
                    <Collages key={Clg.id} Clg={Clg}></Collages>
                )).slice(0,3)
            }
               
            </div> 
        </div>
    );
};

export default CollageCart;