import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import NavButton from "../nav-button/NavButton";
import { Link, animateScroll as scroll } from "react-scroll";
import './NavBar.css';

const NavBar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div>
            <AppBar position='fixed' className='upper-panel' elevation={0}>
                <div className='background-blur'/>
                <Toolbar className='toolbar'>
                    <img src={require('./imports/logo.png')} alt='logo' className='logo' onClick={scrollToTop}/>
                    <Typography className='separator'>|</Typography>
                        <NavButton title='. Home .' onClick={scrollToTop}/>
                    <Link to='container-about' smooth>
                        <NavButton title='. About .'/>
                    </Link>
                    <Link to='background-image-news' smooth>
                        <NavButton title='. News .'/>
                    </Link>
                    <Link to='transition-blur-3' smooth>
                        <NavButton title='. Gallery .'/>
                    </Link>
                    <Link to='image-2' smooth>
                        <NavButton title='. Team .'/>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;