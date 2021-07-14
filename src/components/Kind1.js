import React from 'react';

function Kind1({ kind1, clickButton }) {

    
    return (
        <div className="kind1">
            {
                kind1.map((kind, i) => 
                    <button 
                        key={i} 
                        className="btn_kind1" 
                        onClick={clickButton}
                        kind={kind}
                    >
                        {kind}
                    </button>
                )
            }
        </div>
    );
}

export default Kind1;
