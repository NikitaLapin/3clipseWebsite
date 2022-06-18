import React from 'react';
import './NavButton.css';
import {IconButton} from "@mui/material";

const NavButton = (props) => {
    return (
        <IconButton>
            <div className='nav-button' {...props}>
                <b>{props.title}</b>
            </div>
        </IconButton>
    );
};

export default NavButton;