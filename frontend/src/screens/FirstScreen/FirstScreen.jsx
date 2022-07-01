import React from 'react';
import './FirstScreen.css';
import Header from "../../components/Header/Header";
import NavButton from "../../components/NavButton/NavButton";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-scroll";

const FirstScreen = (props) => {
    return (
        <div className='screen-filler' {...props}>
            <NavBar/>
            <div className='info-block'>
                <Header titleorange='Project 3' titlewhite='clipse'
                        subtitle={<p> “Hope is like the sun, which, as we <br/> journey toward it, casts shadow
                            of <br/> your burden behind us”</p>} className='info-block-text'/>
                <Link to='header-wrapper' smooth offset={-60} className='left-offset'>
                    <NavButton title='More Info' className='nav-button info-block-button' disableRipple={true}/>
                </Link>
            </div>
            <div className='main-to-about-transition'/>
        </div>
    );
};

export default FirstScreen;