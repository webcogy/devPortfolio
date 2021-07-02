import React from 'react';

function Wrapper({ children }) {
    return (
        <div className="wrapper">
            <h2>DEVELOPER</h2>

            <div id="page">
                <h3>PORTFOLIO</h3>
                
                {children}
            </div>
        </div>
    );
}

export default Wrapper;
