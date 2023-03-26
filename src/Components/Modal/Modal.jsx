import React from 'react';

const Modal = (props) => {
    // console.log(props.singalData);
    const { tool_name, description, features, image_link, integrations, input_output_examples } = props.singalData;
    // console.log(input_output_examples ? input_output_examples[0].output:"NO DATA FOUND");
    // console.log(Object.values(features||{}));
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box w-11/12 max-w-5xl  ">
                    <div className='flex gap-7 items-center'>
                        <div className='w-[50%] h-full bg-red-100 border-2 border-red-600 rounded-md'>
                            <h1 className='text-2xl my-3 mx-3 font-bold'>{description}</h1>
                            <div className='flex justify-around'>
                                <div className='h-28 w-28 bg-red-700'></div>
                                <div className='h-28 w-28 bg-red-700'></div>
                                <div className='h-28 w-28 bg-red-700'></div>

                            </div>
                            <div className='flex justify-around items-start my-5'>
                                <div>
                                    <h1 className='text-2xl font-bold'>Feature:</h1>
                                    {
                                        Object.values(features || {}).map((value, index) => <p key={index}>{index + 1}. {value.feature_name ? value.feature_name:"No Data Found"}</p>)
                                    }
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold'>Integrations:</h1>
                                    {
                                        integrations && integrations.map((dta, index) => <p key={index}>{index+1}.{dta?dta:"No Data Found"}</p>)
                                    }
                                </div>

                            </div>

                        </div>
                        <div className='w-[50%] h-full border-2 border-gray-600 rounded-md'>
                            <img className='w-[90%] rounded-lg mx-auto my-6' src={image_link ? image_link[0] : ""} alt="" />

                            <h1 className='text-center text-lg font-bold'>{input_output_examples ? input_output_examples[0].input : "NO DATA FOUND"}</h1>
                            <h1 className='text-center text-sm font-bold'>{input_output_examples ? input_output_examples[0].output : "NO DATA FOUND"}</h1>

                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;