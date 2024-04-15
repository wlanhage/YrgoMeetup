import { onClick } from 'react';

function SecondaryButton ({text, style: additionalStyle, onClick, color}) {

    const style = {
        backgroundColor: 'transparent',
        color:color ? color : '#001A52',
        border: 'solid 2px',
        borderColor: color ? color : '#001A52',
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