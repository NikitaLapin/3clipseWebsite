import React from 'react';
import {Typography} from "@mui/material";
import './InfoCard.css';

const InfoCardRight = (props) => {
    return (
        <div className='card'>
            <div className='card-text'>
                <Typography className='card-text-title' style={{all: 'inherit', color: 'orange'}}>{props.title}</Typography>
                <Typography style={{all: 'inherit', color: 'white'}}>{props.description}</Typography>
            </div>
            <div className='card-blur'>
                <img src={props.src} alt='block image' className='card-image'/>
            </div>
        </div>
    );
};

export default InfoCardRight;