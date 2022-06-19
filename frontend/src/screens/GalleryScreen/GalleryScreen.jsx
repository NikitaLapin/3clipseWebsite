import React from 'react';
import NavButton from "../../components/nav-button/NavButton";
import './GalleryScreen.css';

const GalleryScreen = () => {
    return (
        <div style={{zIndex: 2}}>
            <div className='black-image-2'/>
            <div className='gallery-container'>
                <div className='image'>
                    <div className='title'>
                        <b style={{all: 'inherit'}}>Gallery</b>
                    </div>
                </div>
                <div className='images-gallery'>
                    <div>
                        <NavButton title='. Image .'/>
                        <NavButton title='. Gifs .'/>
                        <NavButton title='. Videos .'/>
                    </div>
                    <div>
                        <div className='row'>
                            <div className='column'>
                                <img src={require('./imports/скелет_эклипс 1.jpg')} className='grid-image' />
                                <img src={require('./imports/атаканакрепость_эклипс 1.jpg')} className='grid-image'/>
                                <img src={require('./imports/мясорубка_эклипс 1.jpg')} className='grid-image'/>
                            </div>
                            <div className='column'>
                                <img src={require('./imports/ангел_эклипс 1.jpg')} className='grid-image'/>
                                <img src={require('./imports/лес_эклипс 1.jpg')} className='grid-image'/>
                                <img src={require('./imports/крепость_эклипс 1.jpg')} className='grid-image'/>
                            </div>
                            <div className='column'>
                                <img src={require('./imports/горы_эклипс 1.jpg')} className='grid-image'/>
                                <img src={require('./imports/гиганты_эклипс 1.jpg')} className='grid-image'/>
                                <img src={require('./imports/бастион_эклипс 1.jpg')} className='grid-image'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='horizontal-scrollbar-back'>
                    <div className='horizontal-scrollbar-bar'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryScreen;