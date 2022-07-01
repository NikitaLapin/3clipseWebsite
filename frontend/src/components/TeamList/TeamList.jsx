import React from 'react';
import TeamMember from "../TeamMember/TeamMember";
import './TeamList.css';

const TeamList = ({team, ...props}) => {
    return (
        <div className='team'>
            <div className='team-row'>
                <TeamMember teamMember={team[0]}/>
                <TeamMember teamMember={team[1]}/>
            </div>
            <div className='team-row'>
                <TeamMember teamMember={team[2]}/>
                <TeamMember teamMember={team[3]}/>
            </div>
        </div>
    );
};

export default TeamList;