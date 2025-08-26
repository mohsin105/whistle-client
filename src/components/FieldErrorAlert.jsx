import React from 'react';

const FieldErrorAlert = ({message}) => {
    return (
        <div>
            <span className='label-text-alt text-error'>{message}</span>
        </div>
    );
};

export default FieldErrorAlert;