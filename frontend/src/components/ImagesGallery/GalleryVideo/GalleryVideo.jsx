import React from 'react';
import './GalleryVideo.css';
import {motion} from 'framer-motion';

const GalleryVideo = ({video, setOpen, setChildren, isDragged, setIsDragged}) => {
    const play = (e) => {
        e.target.play();
    }
    const stop = (e) => e.target.pause();

    const animations = {
        initial: {rotate: 0},
        animate: {rotate: 360},
    }


    return (
        <div className='gallery-item' onClick={() => {
            if(!isDragged) {
                setChildren(video);
                setOpen(true);
            }
            else setIsDragged(false);
        }}>
            <video onMouseEnter={play} onMouseLeave={stop} loop muted src={video.src}/>
            <motion.div className='load-indicator' variants={animations} initial='initial' animate='animate' transition={{repeat: Infinity, type: 'just', duration: 1}}/>
        </div>
    );
};

export default GalleryVideo;