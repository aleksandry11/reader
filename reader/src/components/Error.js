import React from 'react';

const Error = ({ errors }) => {
    return (
        <div>
            {errors ?
                errors.map((item, index) => {
                    return <p className="error" key={index}>{item}</p>
                })
                : null
            }
        </div>
    )
}

export default Error;