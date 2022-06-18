import './styles/App.css';
import NavBar from "./components/NavBar/NavBar";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import {Grid, Typography} from "@mui/material";
import InfoCardRight from "./components/InfoCard/InfoCardRight";
import InfoCardLeft from "./components/InfoCard/InfoCardLeft";
import "overlayscrollbars/css/OverlayScrollbars.css";
import NavButton from "./components/nav-button/NavButton";

const App = () => {
    return (
        <div className="App">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Inter:wght@300&display=swap');
            </style>
            <meta name='viewport' content='width=1170'/>

            <div className='screen-filler'>
                <div className='background-image'/>
                <NavBar/>
                <div className='container-home'>
                    <div className='void-1'/>
                    <InfoBlock title='Project 3' subtitle='clipse'
                               description='“Hope is like the sun, which, as we journey toward it, casts shadow of your burden behind us”'/>
                </div>
            </div>
            <div className='transition-blur'/>
            <div className='black-image'>
                <div className='container-about'>
                    <div className='infoblock' style={{margin: 0}}>
                        <div className='infoblock-title' style={{width: 'auto'}}>
                            <Typography style={{all: 'inherit', color: 'orange'}}>About 3</Typography>
                            <Typography style={{all: 'inherit', color: 'white'}}>clipse</Typography>
                        </div>
                        <div className='stretch-screen-text'>
                            <b>3clipse is challenging action-RPG where your tactical skills will be tested in battles
                                with enemies, diseases and nature alike.</b>
                        </div>
                        <div className='stretch-screen-text'>
                            <b>In the world of Hition you’ll go on the adventure across corrupted lands where you’ll
                                decide how to approach each battle and situation.</b>
                        </div>
                    </div>
                    <div className='cards'>
                        <InfoCardRight title='Economics'
                                       description='Wartime economy is ruthless but full of opportunities - complete contracts, hunt for treasures, trade different goods and travel between the cities to make a coin.'
                                       src={require('./imports/economics-icon.jpg')}/>
                        <InfoCardLeft title='Character Development'
                                      description='Experiment with your build by combining magical skills and diffirent equipment without any class restriction and level prerequisites. Stone, fire or even blood - everyone will find magic to their liking.'
                                      src={require('./imports/characterdevelopment-icon.jpg')}/>
                        <InfoCardRight title='Enemy Variety'
                                       description='Combat with various factions: unpredictable orcs, disgusting cults, demended mags, raised dead - every each of them will require a unique approach, while the combinations of enemies will make battles more tense and exciting.'
                                       src={require('./imports/enemyvariety-icon.jpg')}/>
                        <InfoCardLeft title='Combat System'
                                      description='There is no hand holding here. Carefully plan ahead and adapt to your surroundings with your numerous skills.'
                                      src={require('./imports/combatsystem-icon.jpg')}/>
                        <InfoCardRight title='Karma'
                                       description='Different spells will affect your character’s mental state. High morale could turn the tide in your favor even in the most hopeless fights, and downed state of mind will only lead to panic attacks and paranoia.'
                                       src={require('./imports/karma-icon 1.jpg')}/>
                    </div>
                </div>
            </div>
            <div className='transition-blur-2'/>
            <div className='background-image-news'/>
            <div className='news-text-block'>
                {/* <div className='scrollbar-back'> --!>
                    <div className='scrollbar-bar'/>
                </div>
                */}
                <div className='news'>
                    <div className='news-title'>
                        <Typography style={{all: "inherit"}}>Latest</Typography>
                    </div>
                    <div className='news-container'>
                        <div className='news'>
                            <div style={{all: "inherit"}}>
                                <b>A project website has been created</b>
                            </div>
                            <div style={{all: 'inherit', borderBottom: '2px solid white'}}>
                                <b>(17.06.2022)</b>
                            </div>
                        </div>
                        <div className='news'>
                            <div style={{all: "inherit"}}>
                                <b>A project website has been created</b>
                            </div>
                            <div style={{all: 'inherit', borderBottom: '2px solid white'}}>
                                <b>(14.06.2022)</b>
                            </div>
                        </div>
                        <div className='news'>
                            <div style={{all: "inherit"}}>
                                <b>Hard work continues on the first location</b>
                            </div>
                            <div style={{all: 'inherit', borderBottom: '2px solid white'}}>
                                <b> (09.06.2022)</b>
                            </div>
                        </div>
                        <div className='news'>
                            <div style={{all: "inherit"}}>
                                <b>Inventory system created</b>
                            </div>
                            <div style={{all: 'inherit', borderBottom: '2px solid white'}}>
                                <b> (28.05.2022)</b>
                            </div>
                        </div>
                        <div className='news'>
                            <div style={{all: "inherit"}}>
                                <b>Detailed prototype of the script has been created</b>
                            </div>
                            <div style={{all: 'inherit', borderBottom: '2px solid white'}}>
                                <b> (12.03.2022)</b>
                            </div>
                        </div>
                        <div className='news'>
                            <div style={{all: "inherit"}}>
                                <b>The concept of the main character has been created </b>
                            </div>
                            <div style={{all: 'inherit', borderBottom: '2px solid white'}}>
                                <b> (05.02.2022)</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='black-image-2'/>
            <div className='transition-blur-3'/>
            <div className='gallery-container'>
                <div className='image'>
                    <div className='title'>
                        <b style={{all: 'inherit'}}>Gallery</b>
                    </div>
                </div>
                <div className='images-gallery'>
                    <div><NavButton title='. Image .'/>
                        <NavButton title='. Gifs .'/>
                        <NavButton title='. Videos .'/></div>
                    <div>
                        <div className='row'>
                            <div className='column'>
                                <img src={require('./imports/karma-icon 1.jpg')} className='grid-image'/>
                                <img src={require('./imports/karma-icon 1.jpg')} className='grid-image'/>
                                <img src={require('./imports/karma-icon 1.jpg')} className='grid-image'/>
                            </div>
                            <div className='column'>
                                <img src={require('./imports/karma-icon 1.jpg')} className='grid-image'/>
                                <img src={require('./imports/karma-icon 1.jpg')} className='grid-image'/>
                                <img src={require('./imports/karma-icon 1.jpg')} className='grid-image'/>
                            </div>
                            <div className='column'>
                                <img src={require('./imports/karma-icon 1.jpg')} className='grid-image'/>
                                <img src={require('./imports/karma-icon 1.jpg')} className='grid-image'/>
                                <img src={require('./imports/karma-icon 1.jpg')} className='grid-image'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='horizontal-scrollbar-back'>
                    <div className='horizontal-scrollbar-bar'>

                    </div>
                </div>
            </div>
            <div className='image-2'/>
            <div className='team-info-container'>
                <div className='news-title'>
                    <b style={{all: 'inherit'}}>Team</b>
                </div>
                <div className='team-text'>
                    <div style={{display: "inline-block"}}>
                        <b style={{all: 'inherit', color: 'orange'}}>-Technical Developer</b>
                        <b style={{all: 'inherit', color: 'white'}}>: Nikita Lapin-</b>
                    </div>
                </div>
                <div className='team-text'>
                    <div style={{display: "inline-block"}}>
                        <b style={{all: 'inherit', color: 'orange'}}>-Technical Developer</b>
                        <b style={{all: 'inherit', color: 'white'}}>: Mikhail Malyshev-</b>
                    </div>
                </div>
                <div className='team-text'>
                    <div style={{display: "inline-block"}}>
                        <b style={{all: 'inherit', color: 'orange'}}>-Game Designer</b>
                        <b style={{all: 'inherit', color: 'white'}}>: Alexander Ukhouv-</b>
                    </div>
                </div>
                <div className='team-text'>
                    <div style={{display: "inline-block"}}>
                        <b style={{all: 'inherit', color: 'orange'}}>-Plot and Visuals</b>
                        <b style={{all: 'inherit', color: 'white'}}>: Alexander Seleznev-</b>
                    </div>
                </div>
                <div className='team-text'>
                    <div className='description' style={{all: 'inherit'}}>
                        <b style={{all: 'inherit', color: 'white'}}>This project is inspired with projects like Berserk,
                            Dark Souls, Diablo, Magicka, Gothic</b>
                    </div>
                </div>
                <a href={'https://github.com/NikitaLapin/3clipse'} target='_blank'>
                    <img src={require('./imports/github_3clipse 1.jpg')} alt='github_link' className='git-link' />
                </a>
            </div>
        </div>
    );
}

export default App;
