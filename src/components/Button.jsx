import React from 'react';

const Button = ({type, color, children}) => {
    return (
        <div>
            <button
                type={type? type: 'submit'}
                className={`btn ${color? color:'btn-accent'} px-8 font-bold`}>
                    {children}
            </button>
        </div>
    );
};

export default Button;