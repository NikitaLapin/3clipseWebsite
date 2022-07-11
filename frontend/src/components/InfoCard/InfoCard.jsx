import React from 'react';
import './InfoCard.css';
import {motion} from 'framer-motion';

const InfoCard = (props) => {
    const words = props.card.description.split(' ');
    const rows = [];
    let currentRow = [];
    words.map((word) => {
        if(word === '<br/>') {
            rows.push(currentRow);
            currentRow = [];
        }
        else currentRow.push(word);
    });
    rows.push(currentRow);

    const pictureAnimations = {
        initialLeft: {x: -500, opacity: 0},
        animate: {x: 0, opacity: 1},
        initialRight: {x: 500, opacity: 0}
    }

    const transition = {duration: 1, ease: 'easeInOut'}

    return (
        <div className='info-card'>
            {props.card.isReversed
                ? <div className='info-card'>
                    <motion.div className='info-card-blur' variants={pictureAnimations} initial='initialLeft' whileInView='animate' exit='initialLeft' transition={transition}>
                        <img src={props.card.src} alt='card image' className='info-card-image'/>
                    </motion.div>
                    <motion.div className='card-text' variants={pictureAnimations} initial='initialRight' whileInView='animate' exit='initialRight' transition={transition}>
                        <b className='card-text-title'>{props.card.title}</b>
                        <div className='card-text-subtitle'>
                            {rows.map((row) =>
                                <div className='split-text'>
                                    {row.map((word, index) => <b className='split-text-word' key={index}>{word + ' '}</b>)}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
                :
                <div className='info-card'>
                    <motion.div className='card-text' variants={pictureAnimations} initial='initialLeft' whileInView='animate' exit='initialLeft' transition={transition}>
                        <b className='card-text-title'>{props.card.title}</b>
                        <div className='card-text-subtitle'>
                            {rows.map((row) =>
                                <div className='split-text'>
                                    {row.map((word) => <b className='split-text-word'>{word + ' '}</b>)}
                                </div>
                            )}
                        </div>
                    </motion.div>
                    <motion.div className='info-card-blur' variants={pictureAnimations} initial='initialRight' whileInView='animate' exit='initialRight' transition={transition}>
                        <img src={props.card.src} alt='card image' className='info-card-image'/>
                    </motion.div>
                </div>
            }
        </div>
    );
};

export default InfoCard;