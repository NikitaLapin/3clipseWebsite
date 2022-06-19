import React from 'react';
import {Typography} from "@mui/material";
import InfoCardRight from "../../components/InfoCard/InfoCardRight";
import InfoCardLeft from "../../components/InfoCard/InfoCardLeft";
import './AboutScreen.css';

const AboutScreen = () => {
    return (
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
    );
};

export default AboutScreen;