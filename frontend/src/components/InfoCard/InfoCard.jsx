import React from 'react';
import './InfoCard.css'
import {Typography} from "@mui/material";

const InfoCard = (props) => {
    return (
        <div className='info-card'>
            {props.card.isReversed
                ? <div className='info-card'>
                    <div className='info-card-blur'>
                        <img src={props.card.src} alt='card image' className='info-card-image'/>
                    </div>
                    <div className='card-text'>
                        <Typography className='card-text-title' style={{all: 'inherit', color: 'orange'}}>{props.card.title}</Typography>
                        <Typography style={{all: 'inherit', color: 'white'}}>{props.card.description}</Typography>
                    </div>
                </div>
                :
                <div className='info-card'>
                    <div className='card-text'>
                        <Typography className='card-text-title' style={{all: 'inherit', color: 'orange'}}>{props.card.title}</Typography>
                        <Typography style={{all: 'inherit', color: 'white'}}>{props.card.description}</Typography>
                    </div>
                    <div className='info-card-blur'>
                        <img src={props.card.src} alt='card image' className='info-card-image'/>
                    </div>
                </div>
            }
        </div>
    );
};

export default InfoCard;