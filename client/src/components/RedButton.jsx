import { onClick } from 'react';

<<<<<<< HEAD
function RedButton ({text, style: additionalStyle, onClick }) {
=======
function RedButton ({ text, style: additionalStyle, onClick }) {
>>>>>>> finishedCard-and-students-loop

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
<<<<<<< HEAD
        <button style={style} onClick={onClick}> 
=======
        <button onClick={onClick} style={style}> 
>>>>>>> finishedCard-and-students-loop
            {text}
        </button>
        
    )
}

export default RedButton;