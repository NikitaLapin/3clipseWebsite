import './TeamScreen.css';
import Header from "../../components/Header/Header";
import {useState} from "react";
import TeamList from "../../components/TeamList/TeamList";

const TeamScreen = () => {
    const[team, setTeam] = useState([
        {name: 'Nikita Lapin', job: 'Technical Developer', src: require('./imports/Nikita01 1.jpg')},
        {name: 'Mikhail Malyshev', job: 'Technical Developer', src: require('./imports/Misha01 1.jpg')},
        {name: 'Alexander Ukhouv', job: 'Game Designer', src: require('./imports/ya01 1.jpg')},
        {name: 'Alexander Seleznev', job: 'Plot and Visuals', src: require('./imports/Selezenkin01 1.jpg')},
    ])

    const subtitle='Our game was inspired by such projects as Berserk, Dark Souls, Diablo, Magicka, Gothic';

    return (
        <div className='black-box'>
            <div className='team-screen-anchor'/>
            <div>
                <Header titleorange='Team' style={{fontsize: 'inherit'}}/>
            </div>
            <TeamList team={team}/>
            <div className='inspire-text'>
                <b>{subtitle}</b>
            </div>
            <a href={'https://github.com/NikitaLapin/3clipse'} target='_blank'>
                <img src={require('./imports/github_3clipse 1.jpg')} alt='github_link' className='git-link' />
            </a>
        </div>
    );
};

export default TeamScreen;