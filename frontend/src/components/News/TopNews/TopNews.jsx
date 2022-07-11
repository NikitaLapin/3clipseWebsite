import React from 'react';
import './TopNews.css';
import {motion} from 'framer-motion';

const TopNews = ({news, isRight, ...props}) => {
    const animations = {
        initial: {opacity: 0, x: -500},
        animate: {opacity: 1, x: 0},
        initial1: {opacity: 0, x: 500},
    }

    let currentInitial = isRight ? animations.initial1 : animations.initial;

    return (
        <motion.a href={news.href} target='_blank' style={{textDecoration: 'none'}} variants={animations} initial={currentInitial} animate='animate'>
            <div className='news-container-small'>
                <div className='top-news-anchor'/>
                <div className='news-image-small'>
                    <img src={news.src} alt={news.name}/>
                </div>
                <div className='vertical-container'>
                    <div className='news-title-small'>{news.name}</div>
                    <div className='horizontal-container'>
                        <div className='news-date-small'>{news.date}</div>
                        <div className='star-small'/>
                    </div>
                </div>
            </div>
        </motion.a>
    );
};

export default TopNews;