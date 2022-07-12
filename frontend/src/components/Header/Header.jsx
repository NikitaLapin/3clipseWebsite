import React from 'react';
import './Header.css';
import SplitText from "../SplitText/SplitText";

const Header = (props) => {

    return (
        <div className='header' {...props}>
            <div className='header-title'>
                <b className='title1'>{props.titleorange}</b>
                <b className='title2'>{props.titlewhite}</b>
            </div>
            <div className='header-subtitle'>
                {props.subtitle
                    ? <SplitText description={props.subtitle}/>
                    : <div/>
                }
            </div>
        </div>
    );
};

export default Header;