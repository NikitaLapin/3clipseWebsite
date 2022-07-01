import React from 'react';
import './TopNews.css';

const TopNews = ({news, ...props}) => {
    return (
        <div className='news-container-small'>
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
    );
};

export default TopNews;