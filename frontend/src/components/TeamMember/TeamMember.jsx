import React from 'react';
import './TeamMember.css';

const TeamMember = ({teamMember, ...props}) => {
    return (
        <div className='team-member'>
            <div className='team-member-text'>
                <div>
                    <b style={{all: 'inherit', color: 'orange'}}>{teamMember.job}</b>
                    <b style={{all: 'inherit', color: 'white'}}>{teamMember.name}</b>
                </div>
            </div>
            <img src={teamMember.src} alt='member image' className='team-member-image'/>
        </div>
    );
};

export default TeamMember;