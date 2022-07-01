import React from 'react';
import InfoCard from "../InfoCard/InfoCard";

const InfoCards = ({cards}) => {
    return (
        <div className='info-cards'>
            {cards.map((card) =>
                <InfoCard card={card} key={card.order}/>
            )}
        </div>
    );
};

export default InfoCards;