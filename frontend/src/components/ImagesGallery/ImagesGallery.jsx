import React, {useEffect, useState} from 'react';
import GalleryImage from "./GalleryImage/GalleryImage";
import './ImagesGallery.css';
import GalleryVideo from "./GalleryVideo/GalleryVideo";
import ModalWindow from "../ModalWindow/ModalWindow";

const ImagesGallery = ({items, isVideos=false, ...props}) => {
    const chunk = (array, maxSize) => {
        let chunks_array = [];
        let chunkSize = maxSize;

        for (let i = 0; i < array.length; i += chunkSize) {
            chunkSize = Math.floor(Math.random() * maxSize) + 1;
            const this_chunk = array.slice(i, i + chunkSize);
            chunks_array.push(this_chunk);
        }

        return chunks_array;
    }

    const [chunks, setChunks] = useState([]);
    const [maxImagesInColumn, setMaxImagesInColumn] = useState(3);
    useEffect(() => {
        setChunks(chunk(items, maxImagesInColumn));
    }, [maxImagesInColumn]);

    const [open, setOpen] = useState(false);
    const [currentActiveImage, setCurrentActiveImage] = useState(items[0]);

    return (
        <div>
            <ModalWindow active={open} setActive={setOpen}>
                {isVideos
                    ? <video muted controls preload='metadata' className='modal-video' src={currentActiveImage.src}/>
                    : <img src={currentActiveImage.src} className='modal-image' alt='modal image unchanged'/>
                }
                <div className='modal-description'>
                    <b className='modal-title'>{currentActiveImage.name}</b>
                    <b className='modal-subtitle'>{currentActiveImage.description}</b>
                </div>
            </ModalWindow>

            <div className='row'>
                {chunks.map((chunk) => (
                    <div className='column' key={chunk[0].id}>
                        {chunk.map((item) => {
                            if (isVideos) return <GalleryVideo video={item} key={item.id} setOpen={setOpen}
                                                               setChildren={setCurrentActiveImage}/>;
                            else return <GalleryImage image={item} key={item.id} setOpen={setOpen}
                                                      setChildren={setCurrentActiveImage}/>
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImagesGallery;