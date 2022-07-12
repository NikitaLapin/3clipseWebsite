import React from 'react';
import './SplitText.css';

const SplitText = ({description, ...props}) => {

    const words = description.split(' ');
    const rows = [];
    let currentRow = [];
    words.map((word) => {
        if(word === '<br/>') {
            rows.push(currentRow);
            currentRow = [];
        }
        else currentRow.push(word);
    });
    rows.push(currentRow);

    return (
        <div {...props}>
            {rows.map((row) =>
                <div className='split-text'>
                    {row.map((word, index) => <b className='split-text-word' key={index}>{word + ' '}</b>)}
                </div>
            )}
        </div>
    );
};

export default SplitText;