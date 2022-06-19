import './TeamScreen.css';

const TeamScreen = () => {
    return (
        <div>
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
};

export default TeamScreen;