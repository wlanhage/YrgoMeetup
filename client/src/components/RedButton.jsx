import { onClick } from 'react';

function RedButton ({text, style: additionalStyle, onClick }) {

    const style = {
        backgroundColor: '#F52A3B',
        color: 'white',
        border: 'none',
        borderRadius: '35px 35px 35px 35px',
        width: 'calc(100vw - 4rem)',
        height: '56px',
        padding: '16px 24px',
        justifyContent: 'space-between',
        fontFamily: 'inter',
        ...additionalStyle
         
    };

    return (
        <button style={style} onClick={onClick}> 
            {text}
        </button>
        
    )
}

export default RedButton;