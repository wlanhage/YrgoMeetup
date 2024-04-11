import { onClick } from 'react';

function SecondaryButton ({text, style: additionalStyle, onClick }) {

    const style = {
        backgroundColor: 'transparent',
        color: 'red',
        border: 'solid 2px red',
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

export default SecondaryButton;