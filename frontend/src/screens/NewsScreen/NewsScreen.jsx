import React, {useState} from 'react';
import './NewsScreen.css';
import Header from "../../components/Header/Header";
import NewsList from "../../components/NewsList/NewsList";

const NewsScreen = () => {
    const[newses, setNewses] = useState([
        {id: 1, name:'Website Creation', description: 'For the convenience of users and our loyal fans, a project website has been created', date: '17.06.2022', isImportant: true, src: require('../../screens/NewsScreen/imports/news_pic1 1.jpg')},
        {id: 2, name:'First Location', description: 'Hard work continues on the first location. Height map prototype has been developed', date: '09.06.2022', isImportant: false, src: require('../../screens/NewsScreen/imports/news_pic2 1.jpg')},
        {id: 3, name:'Inventory Creation', description: 'Big part of inventory has been created. Loot system also was implemented', date: '28.05.2022', isImportant: false, src: require('../../screens/NewsScreen/imports/news_pic3 1.jpg')},
        {id: 4, name:'Detailed Plot', description: 'Detailed prototype of the plot has been created', date: '12.03.2022', isImportant: false, src: require('../../screens/NewsScreen/imports/news_pic4 1.jpg')},
        {id: 5, name:'Character Concept', description: 'The concept of the main character has been drawn', date: '05.02.2022', isImportant: true, src: require('../../screens/NewsScreen/imports/news_pic5 1.jpg')},
        {id: 6, name:'Character Concept', description: 'The concept of the main character has been drawn', date: '05.02.2022', isImportant: true, src: require('../../screens/NewsScreen/imports/news_pic5 1.jpg')}
    ]);

    return (
        <div className='black-box'>
            <div className='news-screen-anchor'/>
            <div className='container'>
                <Header titleorange='Latest' titlewhite='News'/>
                <NewsList newses={newses} isTopList={false}/>
                <Header titleorange='Top' titlewhite='News'/>
                <NewsList newses={newses.filter((news) => news.isImportant)} isTopList={true}/>
            </div>
        </div>
    );
};

export default NewsScreen;