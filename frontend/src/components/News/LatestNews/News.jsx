import React from 'react';
import './News.css';
import {Tooltip} from "@mui/material";

const News = ({news, ...props}) => {

    function DisplayImportance() {
        if (news.isImportant){
            return(
                <Tooltip title='Important news'>
                    <div className='star'/>
                </Tooltip>
            );
        }
    }


    return (
        <div className='news-container' {...props}>
            <div className='news-image'>
                <img src={news.src} alt={news.name}/>
                <div className='background-blur'/>
                <Tooltip title='News post date' >
                    <div className='news-date'>{news.date}</div>
                </Tooltip>
                <DisplayImportance/>
            </div>
            <div className='news-title'>{news.name}</div>
            <div className='news-description'>{news.description}</div>
        </div>
    );
};

export default News;