import React from 'react';
import {Typography} from "@mui/material";
import './NewsScreen.css';

const NewsScreen = () => {
    return (
        <div>
            <div className='background-image-news'/>
            <div className='news-text-block'>
                {/* <div className='scrollbar-back'> --!>
                    <div className='scrollbar-bar'/>
                </div>
                */}
                <div className='news'>
                    <div className='news-title'>
                        <Typography style={{all: "inherit"}}>Latest</Typography>
                    </div>
                    <div className='news-container'>
                        <div className='news'>
                            <div style={{all: "inherit"}}>
                                <b>A project website has been created</b>
                            </div>
                            <div style={{all: 'inherit', borderBottom: '2px solid white'}}>
                                <b>(17.06.2022)</b>
                            </div>
                        </div>
                        <div className='news'>
                            <div style={{all: "inherit"}}>
                                <b>A project website has been created</b>
                            </div>
                            <div style={{all: 'inherit', borderBottom: '2px solid white'}}>
                                <b>(14.06.2022)</b>
                            </div>
                        </div>
                        <div className='news'>
                            <div style={{all: "inherit"}}>
                                <b>Hard work continues on the first location</b>
                            </div>
                            <div style={{all: 'inherit', borderBottom: '2px solid white'}}>
                                <b> (09.06.2022)</b>
                            </div>
                        </div>
                        <div className='news'>
                            <div style={{all: "inherit"}}>
                                <b>Inventory system created</b>
                            </div>
                            <div style={{all: 'inherit', borderBottom: '2px solid white'}}>
                                <b> (28.05.2022)</b>
                            </div>
                        </div>
                        <div className='news'>
                            <div style={{all: "inherit"}}>
                                <b>Detailed prototype of the script has been created</b>
                            </div>
                            <div style={{all: 'inherit', borderBottom: '2px solid white'}}>
                                <b> (12.03.2022)</b>
                            </div>
                        </div>
                        <div className='news'>
                            <div style={{all: "inherit"}}>
                                <b>The concept of the main character has been created </b>
                            </div>
                            <div style={{all: 'inherit', borderBottom: '2px solid white'}}>
                                <b> (05.02.2022)</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsScreen;