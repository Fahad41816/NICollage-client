import React from 'react';

const Collages = ({Clg}) => {
    return (
        <div key={Clg.id} className="card  w-80 bg-base-100 shadow-xl">
        <figure><img className='w-full h-40' src={Clg.collage_image} alt="Shoes" /></figure>
        <div className="card-body h-80">
            <h2 className="text-md font-semibold text-green-600">{Clg.collage_name
}</h2>
             <div><h3> <span className=' font-semibold text-green-600'>Addmition Date:</span> {Clg.admission_dates
}</h3></div>
             <div><h3> <span className=' font-semibold text-green-600'>Events:</span>{Clg.events_details
}</h3></div>
             <div><h3> <span className=' font-semibold text-green-600'>Research:</span>{Clg.research_history

             }</h3></div>
             <div><h3> <span className=' font-semibold text-green-600'>sports:</span>{Clg.sports}</h3></div>
            
        </div>
        <div className="card-actions mb-5 mr-5 justify-end">
            <button className="btn btn-success text-white">Details</button>
            </div>
    </div>
    );
};

export default Collages;