import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../../data/StateProvider';
import './Header.css';

const Header: React.FC<{ spotify?: any }> = (spotify) => {
    //@ts-ignore
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    className="header__search"
                    placeholder="Search for Artists, Songs or ..."
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;
