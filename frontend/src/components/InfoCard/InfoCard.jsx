import React from 'react';
import './InfoCard.css';
import {motion} from 'framer-motion';
import SplitText from "../SplitText/SplitText";

const InfoCard = ({card, ...props}) => {

    const pictureAnimations = {
        initialLeft: {x: -500, opacity: 0},
        animate: {x: 0, opacity: 1},
        initialRight: {x: 500, opacity: 0}
    }

    const transition = {duration: 1, ease: 'easeInOut'}

    return (
        <div {...props}>
            <div className='info-card'>
                {card.isReversed
                    ? <div className='info-card'>
                        <motion.div className='info-card-blur' variants={pictureAnimations} initial='initialLeft'
                                    whileInView='animate' exit='initialLeft' transition={transition}>
                            <img src={card.src} alt='card image' className='info-card-image'/>
                        </motion.div>
                        <motion.div className='card-text' variants={pictureAnimations} initial='initialRight'
                                    whileInView='animate' exit='initialRight' transition={transition}>
                            <b className='card-text-title'>{card.title}</b>
                            <div className='card-text-subtitle'>
                                <SplitText description={card.description}/>
                            </div>
                        </motion.div>
                    </div>
                    :
                    <div className='info-card'>
                        <motion.div className='card-text' variants={pictureAnimations} initial='initialLeft'
                                    whileInView='animate' exit='initialLeft' transition={transition}>
                            <b className='card-text-title'>{card.title}</b>
                            <div className='card-text-subtitle'>
                                <SplitText description={card.description}/>
                            </div>
                        </motion.div>
                        <motion.div className='info-card-blur' variants={pictureAnimations} initial='initialRight'
                                    whileInView='animate' exit='initialRight' transition={transition}>
                            <img src={card.src} alt='card image' className='info-card-image'/>
                        </motion.div>
                    </div>
                }
            </div>
        </div>
    );
};

export default InfoCard;