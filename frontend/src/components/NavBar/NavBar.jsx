import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import NavButton from "../NavButton/NavButton"
import { Link } from "react-scroll";
import './NavBar.css';
import {motion} from 'framer-motion';

class NavBar extends React.Component {
    componentDidMount() {
        const allButtons = document.querySelectorAll('.button-1, .button-2');
        let aboutButton;
        let newsButton;
        let galleryButton;
        let teamButton;

        allButtons.forEach(function (button) {
            if (button.title === 'About') aboutButton = button;
            else if (button.title === 'News') newsButton = button;
            else if (button.title === 'Gallery') galleryButton = button;
            else if (button.title === 'Team') teamButton = button;
        })

        const homeObserver = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting === true) {
                document.querySelector('.button-active')?.classList.remove('button-active');
                console.log(document.querySelector('.logo'));
                document.querySelector('.logo').classList.add('button-active');
            }
        }, {threshold: [0.5]});
        homeObserver.observe(document.querySelector('.screen-filler'));

        const aboutObserver = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting === true) {
                document.querySelector('.button-active')?.classList.remove('button-active');
                aboutButton.classList.add('button-active');
            }
        }, {threshold: [0.2]});
        aboutObserver.observe(document.querySelector('.info-cards'));

        const newsObserver = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting === true) {
                document.querySelector('.button-active')?.classList.remove('button-active');
                newsButton.classList.add('button-active');
            }
        }, {threshold: [0.5]});
        newsObserver.observe(document.querySelector('.container'));

        const galleryObserver = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting === true) {
                document.querySelector('.button-active')?.classList.remove('button-active');
                galleryButton.classList.add('button-active');
            }
        }, {threshold: [0.3]});
        galleryObserver.observe(document.querySelector('.images-gallery'));

        const teamObserver = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting === true) {
                document.querySelector('.button-active')?.classList.remove('button-active');
                teamButton.classList.add('button-active');
            }
        }, {threshold: [0.3]});
        teamObserver.observe(document.querySelector('.team'));
    }

    render() {
        const animations = {
            initial: {opacity: 0, y: -100},
            animate: {opacity: 1, y: 0}
        }

        return (
            <div>
                <AppBar position='fixed' className='upper-panel' elevation={0}>
                    <motion.div className='upper-blur' variants={animations} initial='initial' animate='animate'
                                exit='initial' transition={{duration: 0.5, delay: 0.5}}/>
                    <Toolbar className='toolbar'>
                        <Link to='screen-filler' smooth>
                            <motion.img src={require('./imports/logo.png')} alt='logo' className='logo'
                                        variants={animations} initial='initial' animate='animate'
                                        transition={{duration: 0.1, delay: 1}}/>
                        </Link>
                        <motion.Typography className='separator' variants={animations} initial='initial'
                                           animate='animate' transition={{duration: 0.2, delay: 1}}>|
                        </motion.Typography>
                        <div className='nav-buttons'>
                            <motion.div variants={animations} initial='initial' animate='animate'
                                        transition={{duration: 0.4, delay: 1}}>
                                <Link to='about-screen-anchor' smooth>
                                    <NavButton title='About' className='nav-button button-2'/>
                                </Link>
                            </motion.div>
                            <motion.div variants={animations} initial='initial' animate='animate'
                                        transition={{duration: 0.5, delay: 1}}>
                                <Link to='news-screen-anchor' smooth>
                                    <NavButton title='News' className='nav-button button-1'/>
                                </Link>
                            </motion.div>
                            <motion.div variants={animations} initial='initial' animate='animate'
                                        transition={{duration: 0.6, delay: 1}}>
                                <Link to='gallery-screen-anchor' smooth>
                                    <NavButton title='Gallery' className='nav-button button-2'/>
                                </Link>
                            </motion.div>
                            <motion.div variants={animations} initial='initial' animate='animate'
                                        transition={{duration: 0.7, delay: 1}}>
                                <Link to='team-screen-anchor' smooth>
                                    <NavButton title='Team' className='nav-button button-1'/>
                                </Link>
                            </motion.div>
                            <motion.div className='follow-buttons' variants={animations} initial='initial' animate='animate'
                                        transition={{duration: 0.8, delay: 1}}>
                                <a href='https://www.notimplementederror.com/' target='_blank'>
                                    <div className='reddit-button'/>
                                </a>
                                <a href='https://www.notimplementederror.com/' target='_blank'>
                                    <div className='steam-button'/>
                                </a>
                                <a href='https://www.notimplementederror.com/' target='_blank'>
                                    <div className='telegram-button'/>
                                </a>
                            </motion.div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar;