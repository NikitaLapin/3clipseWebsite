import React from 'react';
import './Header.css';

const Header = (props) => {
    let words = [];
    if(props.subtitle != null) words = props.subtitle.split(' ');
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
        <div className='header' {...props}>
            <div className='header-title'>
                <b className='title1'>{props.titleorange}</b>
                <b className='title2'>{props.titlewhite}</b>
            </div>
            <div className='header-subtitle'>
                {rows.map((row) =>
                    <div className='split-text'>
                        {row.map((word) => <b className='split-text-word'>{word + ' '}</b>)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;