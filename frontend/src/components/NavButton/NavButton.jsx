import React from 'react';
import {IconButton} from "@mui/material";
import './NavButton.css';

const NavButton = ({disableRipple, onClick, ...props}) => {
    return (
        <IconButton onClick={onClick} disableRipple={disableRipple}>
            <div className='nav-button' {...props}>
                <b>{props.title}</b>
            </div>
        </IconButton>
    );
};

export default NavButton;