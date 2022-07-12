import React from 'react';
import './FirstScreen.css';
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import {motion} from 'framer-motion';
import SplitText from "../../components/SplitText/SplitText";

const animations = {
    initial1: {opacity: 0, x: -100},
    animate: {opacity: 1, x: 0, y: 0},
    initial2: {opacity: 0, x: 100},
};

const description = '"Hope is like the sun, which, as we <br/> journey toward it, casts shadow of <br/> your burden behind us"';

const FirstScreen = () => {
    return (
        <div className='screen-filler'>
            <NavBar/>
            <motion.div className='info-block' variants={animations} initial='initial1' whileInView='animate' exit='initial1' transition={{duration: 0.5}}>
                <Header titleorange='Project 3' titlewhite='clipse' className='info-block-text'/>
                <SplitText description={description} className='info-block-subtext'/>
            </motion.div>
            <div className='main-to-about-transition'/>
        </div>
    );
};

export default FirstScreen;