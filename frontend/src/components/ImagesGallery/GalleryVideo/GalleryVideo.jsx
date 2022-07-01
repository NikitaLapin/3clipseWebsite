import React from 'react';
import './GalleryVideo.css';

const GalleryVideo = ({video, setOpen, setChildren}) => {
    const play = (e) => {
        e.target.play();
    }
    const stop = (e) => e.target.pause();

    return (
        <div className='gallery-item' onClick={() => { setChildren(video); setOpen(true);}}>
            <video onMouseEnter={play} onMouseLeave={stop} loop muted preload='metadata' src={video.src}>
            </video>
        </div>
    );
};

export default GalleryVideo;