import React from 'react';
import './News.css';
import {Tooltip} from "@mui/material";
import {Link} from 'react-scroll';
import {motion} from 'framer-motion';
import SplitText from "../../SplitText/SplitText";

const News = ({news, isRight}) => {

    function DisplayImportance() {
        if (news.isImportant) {
            return (
                <Link to='top-news-anchor' smooth>
                    <Tooltip title='Important news'>
                        <div className='star'/>
                    </Tooltip>
                </Link>
            );
        }
    }

    const animations = {
        initial: {opacity: 0, x: -500},
        animate: {opacity: 1, x: 0},
        initial1: {opacity: 0, x: 500},
    }

    let currentInitial = isRight ? animations.initial1 : animations.initial;

    return (
        <motion.a href={news.href} target='_blank' style={{textDecoration: 'none'}} variants={animations}
                  initial={currentInitial} animate='animate'>
            <div className='news-container'>
                <div className='news-image'>
                    <img src={news.src} alt={news.name}/>
                    <div className='background-blur'/>
                    <Tooltip title='News post date'>
                        <div className='news-date'>{news.date}</div>
                    </Tooltip>
                    <DisplayImportance/>
                </div>
                <div className='news-title'>{news.name}</div>
                <SplitText description={news.description} className='news-description'/>
            </div>
        </motion.a>
    );
};

export default News;