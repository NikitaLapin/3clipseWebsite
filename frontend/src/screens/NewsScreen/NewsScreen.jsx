import React, {useState} from 'react';
import './NewsScreen.css';
import Header from "../../components/Header/Header";
import NewsList from "../../components/NewsList/NewsList";
import {motion} from 'framer-motion';

const NewsScreen = () => {
    const [newses, setNewses] = useState([
        {
            id: 1,
            name: 'Website Creation',
            description: 'For the convenience of users and our loyal fans, a project website has been created',
            date: '17.06.2022',
            isImportant: true,
            src: require('../../screens/NewsScreen/imports/news_pic1 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 2,
            name: 'First Location',
            description: 'Hard work continues on the first location. Height map prototype has been developed',
            date: '09.06.2022',
            isImportant: false,
            src: require('../../screens/NewsScreen/imports/news_pic2 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 3,
            name: 'Inventory Creation',
            description: 'Big part of inventory has been created. Loot system also was implemented',
            date: '28.05.2022',
            isImportant: false,
            src: require('../../screens/NewsScreen/imports/news_pic3 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 4,
            name: 'Detailed Plot',
            description: 'Detailed prototype of the plot has been created',
            date: '12.03.2022',
            isImportant: false,
            src: require('../../screens/NewsScreen/imports/news_pic4 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 5,
            name: 'Character Concept',
            description: 'The concept of the main character has been drawn',
            date: '05.02.2022',
            isImportant: true,
            src: require('../../screens/NewsScreen/imports/news_pic5 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 6,
            name: 'Character Concept',
            description: 'The concept of the main character has been drawn',
            date: '05.02.2022',
            isImportant: true,
            src: require('../../screens/NewsScreen/imports/news_pic5 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 7,
            name: 'Website Creation',
            description: 'For the convenience of users and our loyal fans, a project website has been created',
            date: '17.06.2022',
            isImportant: true,
            src: require('../../screens/NewsScreen/imports/news_pic1 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 8,
            name: 'First Location',
            description: 'Hard work continues on the first location. Height map prototype has been developed',
            date: '09.06.2022',
            isImportant: false,
            src: require('../../screens/NewsScreen/imports/news_pic2 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 9,
            name: 'Inventory Creation',
            description: 'Big part of inventory has been created. Loot system also was implemented',
            date: '28.05.2022',
            isImportant: false,
            src: require('../../screens/NewsScreen/imports/news_pic3 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 10,
            name: 'Detailed Plot',
            description: 'Detailed prototype of the plot has been created',
            date: '12.03.2022',
            isImportant: false,
            src: require('../../screens/NewsScreen/imports/news_pic4 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 11,
            name: 'Character Concept',
            description: 'The concept of the main character has been drawn',
            date: '05.02.2022',
            isImportant: true,
            src: require('../../screens/NewsScreen/imports/news_pic5 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 12,
            name: 'Character Concept',
            description: 'The concept of the main character has been drawn',
            date: '05.02.2022',
            isImportant: true,
            src: require('../../screens/NewsScreen/imports/news_pic5 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 13,
            name: 'Website Creation',
            description: 'For the convenience of users and our loyal fans, a project website has been created',
            date: '17.06.2022',
            isImportant: true,
            src: require('../../screens/NewsScreen/imports/news_pic1 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 14,
            name: 'First Location',
            description: 'Hard work continues on the first location. Height map prototype has been developed',
            date: '09.06.2022',
            isImportant: false,
            src: require('../../screens/NewsScreen/imports/news_pic2 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 15,
            name: 'Inventory Creation',
            description: 'Big part of inventory has been created. Loot system also was implemented',
            date: '28.05.2022',
            isImportant: false,
            src: require('../../screens/NewsScreen/imports/news_pic3 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 16,
            name: 'Detailed Plot',
            description: 'Detailed prototype of the plot has been created',
            date: '12.03.2022',
            isImportant: false,
            src: require('../../screens/NewsScreen/imports/news_pic4 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 17,
            name: 'Character Concept',
            description: 'The concept of the main character has been drawn',
            date: '05.02.2022',
            isImportant: true,
            src: require('../../screens/NewsScreen/imports/news_pic5 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        },
        {
            id: 18,
            name: 'Character Concept',
            description: 'The concept of the main character has been drawn',
            date: '05.02.2022',
            isImportant: true,
            src: require('../../screens/NewsScreen/imports/news_pic5 1.jpg'),
            href: 'https://www.notimplementederror.com/'
        }
    ]);

    const animations = {
        initial: {opacity: 0, y: -150},
        animate: {opacity: 1, y: 0},
    }

    return (
        <div className='black-box'>
            <div className='news-screen-anchor'/>
            <div className='container'>
                <motion.div variants={animations} initial='initial' whileInView='animate' transition={{duration: 1}}>
                    <Header titleorange='Latest' titlewhite={' ' + 'News'}/>
                </motion.div>
                <NewsList newses={newses} isTopList={false}/>
                <Header titleorange='Top' titlewhite='News'/>
                <NewsList newses={newses.filter((news) => news.isImportant)} isTopList={true}/>
            </div>
        </div>
    );
};

export default NewsScreen;