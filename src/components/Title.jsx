import React from 'react';

const Title = ({text}) => {
    return (
        <div>
            <h1 className=' text-2xl font-bold text-center pt-10 text-green-600'>{text}</h1>
        </div>
    );
};

export default Title;