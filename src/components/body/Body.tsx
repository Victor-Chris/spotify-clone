import React from 'react';
import Header from '../header/Header';
import './Body.css';

const Body: React.FC<{ spotify?: any }> = (spotify) => {
    return (
        <div className='body'>
            <Header spotify={spotify}/> 
        </div>
    )
}

export default Body
