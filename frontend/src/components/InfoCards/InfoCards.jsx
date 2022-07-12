import React from 'react';
import InfoCard from "../InfoCard/InfoCard";

const InfoCards = ({cards, ...props}) => {
    return (
        <div {...props}>
            <div className='info-cards'>
                {cards.map((card) =>
                    <InfoCard card={card} key={card.order}/>
                )}
            </div>
        </div>
    );
};

export default InfoCards;