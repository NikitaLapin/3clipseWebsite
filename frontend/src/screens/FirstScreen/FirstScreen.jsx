import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import './FirstScreen.css';
import NavButton from "../../components/nav-button/NavButton";
import {Link} from "react-scroll";

const FirstScreen = () => {
    return (
        <div className='screen-filler'>
            <div className='background-image'/>
            <NavBar/>
            <div className='container-home'>
                <div className='void-1'/>
                <InfoBlock title='Project 3' subtitle='clipse'
                           description='“Hope is like the sun, which, as we journey toward it, casts shadow of your burden behind us”'/>
                <Link to='container-about' smooth>
                    <NavButton title='. More Info .' className='infoblock-button'/>
                </Link>
            </div>
        </div>
    );
};

export default FirstScreen;