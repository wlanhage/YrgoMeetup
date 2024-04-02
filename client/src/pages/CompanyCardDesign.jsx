import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import "../App.css";
import RedButton from '../components/RedButton';
import CompanyCardContent from '../components/CompanyCardContent';
import CompanyRegProgBar from '../components/CompanyRegProgBar';

function CompanyCardDesign () {
// FUNKTIONER -------------
    useEffect(() => {
      // Retrieve formData from local storage
      const formData = localStorage.getItem('submittedFormData');
      if (formData) {
          setSubmittedData(JSON.parse(formData));
      }
    }, []);


    const [selectedTitle, setSelectedTitle] = useState('Färg');

    const [cardColor, setCardColor] = useState('#F52A3B');
    const handleColorChange = (event) => {
        setCardColor(event.target.value)
    };

    const [emoji, setEmoji] = useState('');
    const handleIconChange = (event) => {
        setEmoji(event.target.value);
    }

    const [showColorButtons, setShowColorButtons] = useState(true);
   /*  const [showPatternButtons, setShowPatternButtons] = useState(false); */
    const [showIconButtons, setShowIconButtons] = useState(false);

    const handleColorClick = () => {
      setSelectedTitle('Färg');
      setShowColorButtons(!showColorButtons);
      /* setShowPatternButtons(false); */
      setShowIconButtons(false);
    }
    /* const handlePatternClick = () => {
        setShowPatternButtons(!showPatternButtons);
    } */
    const handleIconClick = () => {
      setSelectedTitle('Ikon');
      setShowIconButtons(!showIconButtons);
      setShowColorButtons(false);
      /* setShowPatternButtons(false); */
    }


    // STYLING -------------

    const headerText = {
        fontFamily: 'inter',
        fontSize: '34px',
        width: '320px',

        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '70px',
        marginBottom: '40px',
        textAlign: 'start',
    }

    const card = {
        width: '320px',
        height: '200px',
        backgroundColor: cardColor,
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '2.5px solid',
        borderRadius: '9px 9px 9px 9px',
        
    } 

    const selectionBar = {
        marginTop: '20px',
        marginBottom: '0px',
        marginLeft: 'auto',
        marginRight: 'auto',
        

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '310px',

        padding: '20px',
    }

   

    const emojiStyle = {
        fontSize: '50px',
        transform: 'rotate(20deg)',
        position: 'absolute',
        right: '70px',
    }

    const radioButton = {
        width: '50px',
        height: '50px',
        margin: '15px',
        border: 'none',
        backgroundColor: '#D9D9D9',
        /* outline: 'none',
        appearance: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none' */
    }

    const hiddenButton = {
        display: 'none',
    }

    const buttonContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',

        marginTop: '70px',
        
    }




    // FRONT END KOD -------------

    return (
        <>
            <Navbar />
            <CompanyRegProgBar number={'1'} redBarWidth={'110px'} grayBarWidth={'220px'} />

        <div style={headerText}>Designa ditt <br/> egna visitkort</div>

        {<div style={emojiStyle}>
                    {emoji}
                </div> }

        <div style={card}>
            <CompanyCardContent />
        </div>


        <div style={selectionBar}>
        <div 
          className="selectionBarTitle" 
          onClick={handleColorClick} 
          style={{ width:'70px', borderBottom: '3px solid', borderBottomColor: selectedTitle === 'Färg' ? 'red' : 'black', }}
        >
          Färg
        </div>
        <div 
          className="selectionBarTitle" 
          /* onClick={handlePatternClick}  */
          style={{ width:'70px', borderBottom: '3px solid', borderBottomColor: selectedTitle === 'Mönster' ? 'red' : 'black', }}
        >
          Mönster
        </div>
        <div 
          className="selectionBarTitle" 
          onClick={handleIconClick} 
          style={{ width:'70px', borderBottom: '3px solid', borderBottomColor: selectedTitle === 'Ikon' ? 'red' : 'black', }}
        >
          Ikon
        </div>
        </div>


        {showColorButtons && (
        <div>
            <input
            style={radioButton}
            type="radio"
            name="color"
            value="white"
            onChange={handleColorChange}
          />
        <input
            style={radioButton}
            type="radio"
            name="color"
            value="#F52A3B"
            onChange={handleColorChange}
          />
          <input 
            style={radioButton}
            type="radio"
            name="color"
            value="blue"
            onChange={handleColorChange}
          />
          <input
            style={radioButton}
            type="radio"
            name="color"
            value="green"
            onChange={handleColorChange}
          />
        </div>
        )}


        {/* <div style={hiddenButton}>
        <input
            style={radioButton}
            type="radio"
            name="pattern"
            value=""
            onChange={}
          />
          <input
            style={radioButton}
            type="radio"
            name="color"
            value=""
            onChange={}
          />
          <input
            style={radioButton}
            type="radio"
            name="color"
            value=""
            onChange={}
          />
        </div> */}

    {showIconButtons && (
        <div >
            <input
            style={radioButton}
            type="radio"
            name="Icon"
            value=""
            onChange={handleIconChange}
          />
        <input
            style={radioButton}
            type="radio"
            name="Icon"
            value="&#128507;"
            onChange={handleIconChange}
            
          />
          <input
            style={radioButton}
            type="radio"
            name="Icon"
            value="&#128511;"
            onChange={handleIconChange}
          />
          <input
            style={radioButton}
            type="radio"
            name="Icon"
            value="&#128508;"
            onChange={handleIconChange}
          />
        </div>
        )}

        <div style={buttonContainer}>
            <RedButton text={'Skapa'}/>
            <RedButton text={'Backa'} style={{ backgroundColor: 'white', border: '1px solid red', color: 'red', }}/>
        </div>
        </>
    )
}

export default CompanyCardDesign;