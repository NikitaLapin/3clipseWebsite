import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header' {...props}>
            <div className='header-title'>
                <b style={{all: 'inherit', color: 'darkorange'}}>{props.titleorange}</b>
                <b style={{all: 'inherit', color: 'white'}}>{props.titlewhite}</b>
            </div>
            <div className='header-subtitle'>
                <b style={{all: 'inherit'}}>{props.subtitle}</b>
            </div>
        </div>
    );
};

export default Header;