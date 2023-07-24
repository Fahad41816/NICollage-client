

const AddmitionCard = ({addmition}) => {
    console.log(addmition)
    return (

 
        <div className="xl:grid grid-cols-3 gap-10 p-5 m-10">
            {addmition.map(card => (
                <div key={card.id} className="card w-96 h-60 bg-base-100 shadow-xl image-full">
                    <figure><img src={card.collage_image} alt="img" /></figure>
                    <div className="card-body">
                    <h2 className="card-title text-green-400">{card.collage_name
}</h2>  
                    <div className="card-actions absolute bottom-10">
                        <button className="btn btn-success text-white">Addmition</button>
                    </div>
                    </div>
                    
                  
                </div>
            ))}
        </div>
        
            
        
        
    
    );
};

export default AddmitionCard;