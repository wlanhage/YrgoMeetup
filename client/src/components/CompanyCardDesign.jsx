import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import "../App.css";
import RedButton from '../components/RedButton';
import CompanyCardContent from '../components/CompanyCardContent';
import CompanyRegProgBar from '../components/CompanyRegProgBar';
import { Link } from "react-router-dom";

function CompanyCardDesign ({toggleDesign, setDesignData}) {
// FUNKTIONER -------------
    useEffect(() => {
      // Retrieve formData from local storage
      const formData = localStorage.getItem('submittedFormData');
      if (formData) {
          setSubmittedData(JSON.parse(formData));
      }
    }, []);

    const [submittedData, setSubmittedData] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState('Färg');

    const [cardColor, setCardColor] = useState('#FFFFFF');
    const handleColorChange = (event) => {
        setCardColor(event.target.value)
        setDesignData(prevState => ({ ...prevState, color: event.target.value }));
    };

    const [emoji, setEmoji] = useState('');
    const handleIconChange = (event) => {
        setEmoji(event.target.value)
        setDesignData(prevState => ({ ...prevState, emoji: event.target.value }));
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

    const [isFlipped, setIsFlipped] = useState(true);
    const handleCardClick = () => {
      setIsFlipped(!isFlipped);
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

    const cardContainer = {
      position: 'relative',
      width: '320px',
      height: '200px',
      marginLeft: 'auto',
      marginRight: 'auto',
  }

    const card = {
        width: '320px',
        height: '200px',
        backgroundColor: cardColor,
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1.5px solid',
        borderRadius: '9px 9px 9px 9px',

        position: 'absolute',
        transform: 'translate(-12px, 12px)',
    } 

    const cardBackside = {
        width: '320px',
        height: '200px',
        backgroundColor: '#F52A3B',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1.5px solid',
        borderRadius: '9px 9px 9px 9px',

        position: 'absolute',
        transform: 'translate(12px, -12px)',
    }

    const cardBacksideText = {
      position: 'relative',
      top: '30px',
      fontFamily: 'inter',
      fontSize: '40px',
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
        left: '85px',
        bottom: '130px'
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
            <CompanyRegProgBar number={'2'} redBarWidth={'220px'} grayBarWidth={'110px'} />

        <div style={headerText}>Designa ditt <br/> egna visitkort</div>

        
                <div style={cardContainer} onClick={handleCardClick}>
                  {isFlipped ? (
                    <>
                      <div style={cardBackside}></div>
                      <div style={card}>
                        <CompanyCardContent />
                        <div style={emojiStyle}>
                          {emoji}
                        </div> 
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={card}>
                        <CompanyCardContent />
                      </div>
                      <div style={cardBackside}>
                        <h3 style={cardBacksideText}>{submittedData.company}</h3>
                      </div>
                    </>
                  )}
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
            value="#FFFFFF"
            onChange={handleColorChange}
          />
        <input
            style={radioButton}
            type="radio"
            name="color"
            value="#C5EBD8"
            onChange={handleColorChange}
          />
          <input 
            style={radioButton}
            type="radio"
            name="color"
            value="#FCFA58"
            onChange={handleColorChange}
          />
          <input
            style={radioButton}
            type="radio"
            name="color"
            value="#A8E8E7  "
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
            <RedButton onClick={toggleDesign} text={'Skapa'}/>

            <Link to="/Company">
              <RedButton text={'Backa'} style={{ backgroundColor: 'white', border: '1px solid red', color: 'red', }}/>
            </Link>
        </div>
        </>
    )
}

export default CompanyCardDesign;