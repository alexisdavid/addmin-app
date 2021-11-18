import React from 'react';

const Wraptable = ({ children }) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card my-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Wraptable;
