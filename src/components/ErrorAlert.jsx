import React from 'react';

const ErrorAlert = ({errorMessage}) => {
    return (
        <div>
            <div>{errorMessage}</div>
        </div>
    );
};

export default ErrorAlert;