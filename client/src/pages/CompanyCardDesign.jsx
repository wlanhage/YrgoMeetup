import { useState } from 'react';

function CompanyCardDesign () {
// FUNKTIONER -------------

    const [cardColor, setCardColor] = useState('red');

    const handleColorChange = (event) => {
        setCardColor(event.target.value)
    };

    const [emoji, setEmoji] = useState('');
    const handleIconChange = (event) => {
        setEmoji(event.target.value);
    }


    // STYLING -------------

    const card = {
        width: '320px',
        height: '180px',
        backgroundColor: cardColor,

    } 

    const selectionBar = {
        marginTop: '50px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

        padding: '20px',
        borderRadius: '5px, 5px, 5px, 5px',
        backgroundColor: 'gray',
    }

    const emojiStyle = {
        fontSize: '50px',
        transform: 'rotate(20deg)',
        position: 'absolute',
        right: '70px',
    }

    // FRONT END KOD -------------

    return (
        <>
        <h1>Designa ditt egna kort</h1>


        <div style={card}>
            <div>
                <div style={emojiStyle}>
                    {emoji}
                </div>
            </div>
        </div>


        <div style={selectionBar}>
            <div>Färg
                <select  onChange={handleColorChange}>
                    <option value="black">Svart</option>
                    <option value="red">Röd</option>
                    <option value="yellow">Gul</option>
                    <option value="Blue">Blå</option>
                </select>
            </div>
            <div>Mönster</div>
            <div>Ikon
            <select  onChange={handleIconChange}>
                    <option value="&#128507;">Emoji 1</option>
                    <option value="&#128511;">Emoji 2</option>
                    <option value="&#128508;">Emoji 3</option>
                </select>
            </div>
        </div>
        
        </>
    )
}

export default CompanyCardDesign;