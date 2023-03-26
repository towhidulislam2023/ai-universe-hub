import React from 'react';

const Button = (props) => {
    console.log();
    return (
        <>
        <div className=' text-center my-3 '>
            <button className="btn btn-accent font-bold">{props.children}</button>
        </div>
            
        </>
    );
};

export default Button;