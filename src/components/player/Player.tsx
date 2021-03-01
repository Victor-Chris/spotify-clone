import React from 'react';
import Body from '../body/Body';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import './Player.css';

const Player: React.FC<{spotify: any}> = (spotify) => {
    return (
        <div className='player'>
            <div className="player__body">
                {/**Sidebar */}
                <Sidebar />
                {/**Body */}
                <Body spotify={spotify} />
            </div>
            {/**Footer */}
            <Footer />
        </div>
    )
}

export default Player;
