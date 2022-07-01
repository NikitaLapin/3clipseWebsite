import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import NavButton from "../NavButton/NavButton"
import { Link, animateScroll as scroll } from "react-scroll";
import './NavBar.css';

class NavBar extends React.Component{
    componentDidMount() {
        const allButtons = document.querySelectorAll('.button-1, .button-2');
        let homeButton;
        let aboutButton;
        let newsButton;
        let galleryButton;
        let teamButton;

        allButtons.forEach(function (button){
            if(button.title === 'Home') homeButton = button;
            else if(button.title === 'About') aboutButton = button;
            else if(button.title === 'News') newsButton = button;
            else if(button.title === 'Gallery') galleryButton = button;
            else if(button.title === 'Team') teamButton = button;
        })

        const homeObserver = new IntersectionObserver(function (entries){
            if(entries[0].isIntersecting === true){
                document.querySelector('.button-active')?.classList.remove('button-active');
                homeButton.classList.add('button-active');
            }
        }, {threshold: [0.5]});
        homeObserver.observe(document.querySelector('.screen-filler'));

        const aboutObserver = new IntersectionObserver(function (entries){
            if(entries[0].isIntersecting === true){
                document.querySelector('.button-active')?.classList.remove('button-active');
                aboutButton.classList.add('button-active');
            }
        }, {threshold: [0.2]});
        aboutObserver.observe(document.querySelector('.info-cards'));

        const newsObserver = new IntersectionObserver(function (entries){
            if(entries[0].isIntersecting === true) {
                document.querySelector('.button-active')?.classList.remove('button-active');
                newsButton.classList.add('button-active');
            }
        }, {threshold: [0.5]});
        newsObserver.observe(document.querySelector('.container'));

        const galleryObserver = new IntersectionObserver(function (entries){
            if(entries[0].isIntersecting === true) {
                document.querySelector('.button-active')?.classList.remove('button-active');
                galleryButton.classList.add('button-active');
            }
        }, {threshold: [0.3]});
        galleryObserver.observe(document.querySelector('.images-gallery'));

        const teamObserver = new IntersectionObserver(function (entries){
            if(entries[0].isIntersecting === true) {
                document.querySelector('.button-active')?.classList.remove('button-active');
                teamButton.classList.add('button-active');
            }
        }, {threshold: [0.3]});
        teamObserver.observe(document.querySelector('.team'));
    }

    render(){
        return(
            <div>
                <AppBar position='fixed' className='upper-panel' elevation={0}>
                    <div className='upper-blur'/>
                    <Toolbar className='toolbar'>
                        <Link to='screen-filler' smooth>
                            <img src={require('./imports/logo.png')} alt='logo' className='logo'/>
                        </Link>
                        <Typography className='separator'>|</Typography>
                        <div className='nav-buttons'>
                            <Link to='screen-filler' smooth>
                                <NavButton title='Home' className='nav-button button-1'/>
                            </Link>
                            <Link to='about-screen-anchor' smooth>
                                <NavButton title='About' className='nav-button button-2'/>
                            </Link>
                            <Link to='news-screen-anchor' smooth>
                                <NavButton title='News' className='nav-button button-1'/>
                            </Link>
                            <Link to='team-image' smooth>
                                <NavButton title='Gallery' className='nav-button button-2'/>
                            </Link>
                            <Link to='team-screen-anchor' smooth>
                                <NavButton title='Team' className='nav-button button-1'/>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar;