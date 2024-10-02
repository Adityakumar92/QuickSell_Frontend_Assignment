import React from 'react';
import './Userlcon';

function Userlcon({ name, available }) {
    return (
        <div className="usericon-container">
            {name}
            <div className={`user-status ${available ? 'available' : ''}`}></div>
        </div>
    );
}

export default Userlcon;
