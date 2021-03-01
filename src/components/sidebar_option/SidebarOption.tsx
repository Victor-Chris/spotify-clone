import React from 'react';
import './SidebarOption.css';

const SidebarOption: React.FC<{ title: string, Icon: any }> = ({ title, Icon }) => {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className='sidebarOption__icon' />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
}

export default SidebarOption;
