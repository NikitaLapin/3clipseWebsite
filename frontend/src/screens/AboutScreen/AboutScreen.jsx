import React from 'react';
import './AboutScreen.css';
import InfoCards from "../../components/InfoCards/InfoCards";
import Header from "../../components/Header/Header";
import {motion} from 'framer-motion';

const AboutScreen = () => {
    const cards = [
        {
            order: 1,
            isReversed: false,
            title: 'Economics',
            description: 'Wartime economy is ruthless but full of opportunities - complete contracts, hunt for treasures, trade different goods and travel between the cities to make a coin',
            src: require('../../screens/AboutScreen/imports/economics-icon.jpg')
        },
        {
            order: 2,
            isReversed: true,
            title: 'Character Development',
            description: 'Experiment with your build by combining magical skills and different equipment without any class restriction and level prerequisites. Stone, fire or even blood - everyone will find magic to their liking.',
            src: require('../../screens/AboutScreen/imports/characterdevelopment-icon.jpg')
        },
        {
            order: 3,
            isReversed: false,
            title: 'Enemy Variety',
            description: 'Combat with various factions: unpredictable orcs, disgusting cults, demented mags, raised dead - every each of them will require a unique approach, while the combinations of enemies will make battles more tense and exciting.',
            src: require('../../screens/AboutScreen/imports/enemyvariety-icon.jpg')
        },
        {
            order: 4,
            isReversed: true,
            title: 'Combat System',
            description: 'There is no hand holding here. Carefully plan ahead and adapt to your surroundings with your numerous skills.',
            src: require('../../screens/AboutScreen/imports/combatsystem-icon.jpg')
        },
        {
            order: 5,
            isReversed: false,
            title: 'Karma',
            description: 'Different spells will affect your character’s mental state. High morale could turn the tide in your favor even in the most hopeless fights, and downed state of mind will only lead to panic attacks and paranoia.',
            src: require('../../screens/AboutScreen/imports/karma-icon.jpg')
        }
    ]
    const description1 = '3clipse is challenging action-RPG where your tactical skills will be tested in battles with ' +
        'enemies, diseases and nature alike.';
    const description2 = ' In the world of Hition you’ll go on the adventure across corrupted lands ' +
        'where you’ll decide how to approach each battle and situation.';

    const titleAnimations = {
        initial: {opacity: 0},
        animate: {opacity: 1}
    };
    const titleTransition = {duration: 5, type: 'spring'};

    const descriptionAnimations = {
        initialUpper: {opacity: 0.5, y: 80},
        initialBottom: {opacity: 0.5, y: -80},
        animate: {opacity: 1, y: 0},
    }
    const descriptionTransition = {duration: 0.5, ease: 'easeInOut'}


    return (
        <div className='black-box'>
            <div className='about-screen-anchor'/>
            <div className='header-wrapper'>
                <motion.div variants={titleAnimations} initial='initial' whileInView='animate' transition={titleTransition} className='bottom-margin'>
                    <Header titleorange='About 3' titlewhite='clipse'/>
                </motion.div>
                <motion.div variants={descriptionAnimations} initial='initialUpper' whileInView='animate' transition={descriptionTransition} className='bottom-margin'>
                    <Header subtitle={description1}/>
                </motion.div>
                <motion.div variants={descriptionAnimations} initial='initialBottom' whileInView='animate' transition={descriptionTransition} className='bottom-margin'>
                    <Header subtitle={description2}/>
                </motion.div>
            </div>
            <InfoCards cards={cards}/>
        </div>
    );
};

export default AboutScreen;