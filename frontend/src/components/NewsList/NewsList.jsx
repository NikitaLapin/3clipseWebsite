import React, {useEffect, useState} from "react";
import TopNews from "../News/TopNews/TopNews";
import './NewsList.css';
import News from "../News/LatestNews/News";

const NewsList = ({newses, isTopList}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [amountOfPages, setAmountOfPages] = useState(0);
    const [pageLimit, setPageLimit] = useState(3);
    const [displayedNewsesStartId, setDisplayedNewsesStartId] = useState(0);

    useEffect(() => {
        setDisplayedNewsesStartId(currentPage * pageLimit);
    }, [currentPage])

    useEffect(() => {
        setPageLimit(isTopList ? 3 : 5);
    }, [])

    useEffect(() => {
        setAmountOfPages(Math.ceil(newses.length / pageLimit));
    }, [pageLimit])

    return (
        <div className='newses'>
            <div className='list-container'>
                <div className='newses-container'>
                    {currentPage > 0
                        ? <div className='arrow-active turn-left' onClick={(_) => {
                            setCurrentPage(currentPage - 1)
                        }}/>
                        : <div className='arrow-disabled turn-left'/>
                    }
                    {newses.slice(displayedNewsesStartId, displayedNewsesStartId + pageLimit).map((news) =>
                        isTopList ? <TopNews news={news} key={news.id}/> : <News news={news} key={news.id}/>
                    )}
                    {currentPage < amountOfPages - 1
                        ? <div className='arrow-active turn-right' onClick={(_) => {
                            setCurrentPage(currentPage + 1)
                        }}/>
                        : <div className='arrow-disabled turn-right'/>
                    }
                </div>
            </div>
            <div className='news-title news-page'>{currentPage + 1}/{amountOfPages}</div>
        </div>
    );
};

export default NewsList;