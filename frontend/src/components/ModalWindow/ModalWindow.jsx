import React, {useEffect} from 'react';
import './ModalWindow.css';

const ModalWindow = ({active, setActive, children}) => {

    useEffect(() => {
        if(active) document.querySelector('.upper-panel').style.zIndex = 15;
        else document.querySelector('.upper-panel').style.zIndex = 30;
    }, [active])

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;