import React, { useState } from 'react';


const DisplayCard = (props) => {
    // console.log(props);
    const {id, name, features, image, published_in } = props.value;
    // const {mId,setmid}=useState()
   
    
    // const uniqueIdRender=(id)=>{
    //     setUniqueId(id);
    // }
    // console.log(uniqueid);
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    {
                        features.map((feature,index) => <p key={index}>{index+1}. {feature}</p>)
                    }
                    <hr className='border-1 border-indigo-500' />
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-3xl font-bold'>{name}</h1>
                            <i className="fa-solid fa-calendar-days"></i> <span>{published_in}</span>
                        </div>
                        {/* <div>
                            <button htmlFor="my-modal-5" className='btn border-none bg-indigo-400 hover:bg-indigo-300 text-black'><i className="fa-solid fa-arrow-right-long"></i></button>
                        </div> */}
                        <label onClick={() => props.setUniqueId(id)} htmlFor="my-modal-5" className="btn border-none bg-indigo-400 hover:bg-indigo-300 text-black"><i className="fa-solid fa-arrow-right-long"></i></label>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default DisplayCard;