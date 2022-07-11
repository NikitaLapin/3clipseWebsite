import React from 'react';
import './GalleryImage.css';

const GalleryImage = ({image, setOpen, setChildren, isDragged, setIsDragged}) => {

    return (
        <div className='gallery-item' onClick={() => {
            if(!isDragged) {
                setChildren(image);
                setOpen(true);
            }
            else setIsDragged(false);
        }}>
            <div className='text'>{image.name}</div>
            <div className='gallery-image'>
                <img src={image.src} alt='gallery image' draggable={false}/>
            </div>
        </div>
    );
};

export default GalleryImage;