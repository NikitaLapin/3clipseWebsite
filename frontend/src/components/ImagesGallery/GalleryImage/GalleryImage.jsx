import React from 'react';
import './GalleryImage.css';

const GalleryImage = ({image, setOpen, setChildren, ...props}) => {

    return (
        <div className='gallery-item' onClick={() => { setChildren(image); setOpen(true);}}>
            <div className='text'>{image.name}</div>
            <div className='gallery-image'>
                <img src={image.src} alt='gallery image'/>
            </div>
        </div>
    );
};

export default GalleryImage;