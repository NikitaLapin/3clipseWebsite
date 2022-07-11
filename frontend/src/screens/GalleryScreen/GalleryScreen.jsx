import React, {useState} from 'react';
import './GalleryScreen.css';
import Header from "../../components/Header/Header";
import NavButton from "../../components/NavButton/NavButton";
import ImagesGallery from "../../components/ImagesGallery/ImagesGallery";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

const GalleryScreen = () => {

    const[images, setImages] = useState([
        {id: 1, name:'Huge Boss', description:'A dead body of collosum in a middle of a cave', src: require('./imports/images/скелет_эклипс 1.jpg')},
        {id: 2, name:'Bastion', description:'A castle which holds huge amount of mysteries', src: require('./imports/images/бастион_эклипс 1.jpg')},
        {id: 3, name:'Giants', description:'Very rare specious. There are some legends talking about tricked to death travellers who were reborn into collosums', src: require('./imports/images/гиганты_эклипс 1.jpg')},
        {id: 4, name:'Dangerous Swamps', description:'Dead bodies in a compilation of people cries have formed swamps which only wants a revenge', src: require('./imports/images/горы_эклипс 1.jpg')},
        {id: 5, name:'Insect Forest', description:'Formed with death of one of collosums. Its very hard to say about the reason of his death whether it was brave hero or just senility', src: require('./imports/images/лес_эклипс 1.jpg')},
        {id: 6, name:'Fortress', description:'The only building which wasnt destroyed during war. It is made out of skin of collosums', src: require('./imports/images/крепость_эклипс 1.jpg')},
        {id: 7, name:'Heaven Colossum', description:'There are noone who met this creature and were still able to speak. Some of them became speechless because of the fear, some of them were dead and others got lost', src: require('./imports/images/ангел_эклипс 1.jpg')},
        {id: 8, name:'Tionto Fight', description:'Do you hear a hearttaking screams? Tionto fight may be close to you', src: require('./imports/images/мясорубка_эклипс 1.jpg')},
        {id: 9, name:'First Advent', description:'The first time humanity faced monsters', src: require('./imports/images/атаканакрепость_эклипс 1.jpg')},
        {id: 10, name:'Home of Witchery', description:'First witches have come from this place. Locals used to say that very scary things are going on here', src: require('./imports/images/болото_эклипс 1.jpg')}
    ])
    const[videos, setVideos] = useState([
        {id: 1, name: 'Lake in Queenstown, New Zealand', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iusto laudantium porro saepe velit voluptatibus! Alias laudantium minima natus vitae!', src: require('./imports/videos/Lake in Queenstown, New Zealand.mp4')},
        {id: 2, name: 'A man swimming and exploring the bottom of the mid-ocean ridge', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facilis fuga ipsam iure officiis quos rem tempore. Dignissimos, et eum?', src: require('./imports/videos/A man swimming and exploring the bottom of the mid-ocean ridge.mp4')},
        {id: 3, name: 'Curvy road in a snow-covered forest.mp4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos distinctio dolores perferendis porro quis, sit voluptates. Debitis ipsa, sunt.', src: require('./imports/videos/Curvy road in a snow-covered forest.mp4')},
        {id: 4, name: 'Motorcyclist on a road', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque laudantium libero necessitatibus nulla officia perferendis quae quam repudiandae tempora temporibus!', src: require('./imports/videos/Motorcyclist on a road.mp4')},
        {id: 5, name: 'Running with a kite', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci corporis dolor ipsam magnam provident quae ratione ullam. Facilis, optio!', src: require('./imports/videos/Running with a kite.mp4')},
        {id: 6, name: 'Trees in New Zealand', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at consequuntur inventore mollitia necessitatibus placeat reprehenderit sapiente temporibus voluptatibus?', src: require('./imports/videos/Trees in New Zealand.mp4')},
        {id: 7, name: 'Video editor using her phone during a short break in her work area.', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, dignissimos iusto maiores natus neque nobis omnis quaerat quo ratione sunt?', src: require('./imports/videos/Video editor using her phone during a short break in her work area..mp4')},
        {id: 8, name: 'Woman practicing yoga at night', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cupiditate error nam neque quod rem repellendus sapiente sequi soluta unde!', src: require('./imports/videos/Woman practicing yoga at night.mp4')}
    ])

    return (
        <div className='black-box' style={{zIndex: 29}}>
            <div className='gallery-container'>
                <div className='gallery-screen-anchor'/>
                <div className='title'>
                    <Header titleorange='Gallery'/>
                </div>
                <div className='images-gallery'>
                    <Tabs selectedTabClassName='active-tab'>
                        <TabList style={{display: 'flex'}}>
                            <Tab>
                                <NavButton title='Images'/>
                            </Tab>
                            <Tab>
                                <NavButton title='Videos'/>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <ImagesGallery items={images}/>
                        </TabPanel>
                        <TabPanel>
                            <ImagesGallery items={videos} isVideos={true}/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default GalleryScreen;