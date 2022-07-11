import React from 'react';
import './FirstScreen.css';
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import {motion} from 'framer-motion';

const animations = {
    initial1: {opacity: 0, x: -100},
    animate: {opacity: 1, x: 0, y: 0},
    initial2: {opacity: 0, x: 100},
};

const FirstScreen = () => {
    return (
        <div className='screen-filler'>
            <NavBar/>
            <motion.div className='info-block' variants={animations} initial='initial1' animate='animate' exit='initial1' transition={{duration: 0.5}}>
                <Header titleorange='Project 3' titlewhite='clipse' className='info-block-text'/>
                <p className='split-text'>
                    <span className='split-text-word'>"Hope </span>
                    <span className='split-text-word'>is </span>
                    <span className='split-text-word'>like </span>
                    <span className='split-text-word'>the </span>
                    <span className='split-text-word'>sun</span>
                    <span className='split-text-word'>, which</span>
                    <span className='split-text-word'>, as </span>
                    <span className='split-text-word'>we </span>
                    <br/>
                    <span className='split-text-word'>journey </span>
                    <span className='split-text-word'>toward </span>
                    <span className='split-text-word'>it</span>
                    <span className='split-text-word'>, casts </span>
                    <span className='split-text-word'>shadow </span>
                    <span className='split-text-word'>of </span>
                    <br/>
                    <span className='split-text-word'>your </span>
                    <span className='split-text-word'>burden </span>
                    <span className='split-text-word'>behind </span>
                    <span className='split-text-word'>us"</span>
                </p>

            </motion.div>
            <div className='main-to-about-transition'/>
        </div>
    );
};

export default FirstScreen;