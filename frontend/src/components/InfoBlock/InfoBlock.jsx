import React from 'react';
import {Typography} from "@mui/material";
import NavButton from "../nav-button/NavButton";
import './InfoBlock.css';
import { Link} from "react-scroll";

const InfoBlock = (props) => {
    return (
        <Link to={props.name} smooth>
            <div className='infoblock' {...props}>
                <div className='infoblock-title'>
                    <Typography style={{all: 'inherit', color: 'orange'}}>{props.title}</Typography>
                    <Typography style={{all: 'inherit', color: 'white'}}>{props.subtitle}</Typography>
                </div>
                <div className='infoblock-descriptor'>
                    <b>{props.description}</b>
                </div>
                <Link to='container-about' smooth>
                    <NavButton title='. More Info .' className='infoblock-button'/>
                </Link>
            </div>
        </Link>
    );
};

export default InfoBlock;