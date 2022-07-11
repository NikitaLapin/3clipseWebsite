import React from 'react';
import TeamMember from "../TeamMember/TeamMember";
import './TeamList.css';
import {motion} from 'framer-motion';

const animations = {
    initialLeft: {x: -200, opacity: 0},
    animate: {x: 0, opacity: 1},
    initialRight: {x: 200, opacity: 0},
}

const TeamList = ({team}) => {
    return (
        <div className='team'>
            <div className='team-row'>
                <motion.div variants={animations} initial='initialLeft' whileInView='animate' transition={{duration: 1}}>
                    <TeamMember teamMember={team[0]}/>
                </motion.div>
                <motion.div variants={animations} initial='initialRight' whileInView='animate' transition={{duration: 1}}>
                    <TeamMember teamMember={team[1]}/>
                </motion.div>
            </div>
            <div className='team-row'>
                <motion.div variants={animations} initial='initialLeft' whileInView='animate' transition={{duration: 1}}>
                    <TeamMember teamMember={team[2]}/>
                </motion.div>
                <motion.div variants={animations} initial='initialRight' whileInView='animate' transition={{duration: 1}}>
                    <TeamMember teamMember={team[3]}/>
                </motion.div>
            </div>
        </div>
    );
};

export default TeamList;