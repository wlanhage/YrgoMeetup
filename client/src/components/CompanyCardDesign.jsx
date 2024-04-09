import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import "../App.css";
import RedButton from '../components/RedButton';
import CompanyCardContent from '../components/CompanyCardContent';
import CompanyRegProgBar from '../components/CompanyRegProgBar';
import { Link } from "react-router-dom";
import pattern1 from "../assets/pattern-1.svg";
import pattern2 from "../assets/pattern-2.svg";
import pattern3 from "../assets/pattern-3.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import patternButton from "../assets/patternButton.svg";
import patternButton2 from "../assets/patternButton2.svg";
import patternButton3 from "../assets/patternButton3.svg";
import grayBox from "../assets/patternButton4.svg";
import redBox from "../assets/redBox.svg";
import blueBox from "../assets/blueBox.svg";
import lightblueBox from "../assets/lightblueBox.svg";


function CompanyCardDesign ({toggleDesign, setDesignData}) {
// FUNKTIONER -------------
const [submittedData, setSubmittedData] = useState({});
    useEffect(() => {
      // Retrieve formData from local storage
      const formData = localStorage.getItem('submittedFormData');
  let data = formData ? JSON.parse(formData) : {};

  setSubmittedData(data);
}, []);

    

    const [selectedTitle, setSelectedTitle] = useState('Färg');
   /*  const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (event) => {
      const selectedButtonValue = event.target.value;
      setPattern(selectedButtonValue);
    
      const buttons = document.querySelectorAll(`input[type="radio"][name="${event.target.name}"]`);
      buttons.forEach(button => {
        button.style.border = 'none';
        button.style.transform = 'scale(1)';
      });
    
      event.target.style.border = '2px solid black';
      event.target.style.transform = 'scale(0.7)';
    };
    
     */
    
    

    const [cardColor, setCardColor] = useState('#9C9A9A');
    const handleColorChange = (event) => {
        setCardColor(event.target.value)
        setDesignData(prevState => ({ ...prevState, color: event.target.value }));
        
    };

    const [icon, setIcon] = useState(icon4);
    const handleIconChange = (event) => {
        setIcon(event.target.value)
        setDesignData(prevState => ({ ...prevState, icon: event.target.value }));
    }

    const [pattern, setPattern] = useState('');
    const handlePatternChange = (event) => {
      setPattern(event.target.value)
      setDesignData(prevState => ({ ...prevState, pattern: event.target.value }))
    }

    const [showColorButtons, setShowColorButtons] = useState(true);
    const [showPatternButtons, setShowPatternButtons] = useState(false);
    const [showIconButtons, setShowIconButtons] = useState(false);

    const handleColorClick = () => {
      setSelectedTitle('Färg');
      setShowColorButtons(!showColorButtons);
      setShowPatternButtons(false);
      setShowIconButtons(false);
    }
     const handlePatternClick = () => {
      setSelectedTitle('Mönster');
      setShowPatternButtons(!showPatternButtons);
      setShowColorButtons(false);
      setShowIconButtons(false);
    } 
    const handleIconClick = () => {
      setSelectedTitle('Ikon');
      setShowIconButtons(!showIconButtons);
      setShowColorButtons(false);
      setShowPatternButtons(false);
    }

    const [isFlipped, setIsFlipped] = useState(true);
    const handleCardClick = () => {
      setIsFlipped(!isFlipped);
    }

    const handleCardSubmit = async () => {
      const cardData = {
        icon, pattern, cardColor,
      }
  
      try {
        await axios.post(
          "https://yrgomeetup.onrender.com/companys",
          cardData,
        );
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };


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
        backgroundColor: 'white',
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
        backgroundColor: `${cardColor}`,
        backgroundImage: `url(${pattern})`,
        backgroundSize: 'cover',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1.5px solid',
        borderRadius: '9px 9px 9px 9px',

        position: 'absolute',
        transform: 'translate(12px, -12px)',
    }

    const cardBacksideText = {
      position: 'relative',
      top: '115px',
      right: '65px',
      fontFamily: 'inter',
      fontSize: '30px',
      fontWeight: 'bold',
      color: 'white'
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

    const radioButton = (imageUrl) => ({
      width: '50px',
      height: '50px',
      margin: '15px',
      border: 'none',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      outline: 'none',
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    });

    const clickedButtonStyle = (buttonValue) => (
      selectedButton === buttonValue 
        ? { size: '95%', padding: '0px', border: '1px solid black' } 
        : {}
    );

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
                        <CompanyCardContent icon={icon}/>
                        
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={card}>
                      <CompanyCardContent icon={icon}/>
                      </div>
                      <div style={cardBackside}>
                        <p style={cardBacksideText}>{submittedData.company}</p>
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
          onClick={handlePatternClick}
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
            style={radioButton(grayBox)}
            type="radio"
            name="color"
            value='#9C9A9A'
            checked={cardColor === '#9C9A9A'}
            onChange={handleColorChange}
            /* onClick={handleButtonClick} */
          />
        <input
            style={{...radioButton(redBox), ...clickedButtonStyle}}
            type="radio"
            name="color"
            value='#F52A3B'
            onChange={handleColorChange}
           
          />
          <input 
            style={radioButton(lightblueBox)}
            type="radio"
            name="color"
            value='#35D4D1'
            onChange={handleColorChange}
            
          />
          <input
            style={radioButton(blueBox)}
            type="radio"
            name="color"
            value='#314673'
            onChange={handleColorChange}
            
          />
        </div>
        )}


        {showPatternButtons && (
          <div>
            <input
            style={radioButton(grayBox)}
            type="radio"
            name="pattern"
            value=""
            checked={pattern === ""}
            onChange={handlePatternChange}
            
          />
        <input
            style={radioButton(patternButton2)}
            type="radio"
            name="pattern"
            value={pattern1}
            onChange={handlePatternChange}
            
          />
          <input
            style={radioButton(patternButton3)}
            type="radio"
            name="pattern"
            value={pattern2}
            onChange={handlePatternChange}
            
          />
          <input
            style={radioButton(patternButton)}
            type="radio"
            name="pattern"
            value={pattern3}
            onChange={handlePatternChange}
            
          />

          </div>
)}

    {showIconButtons && (
        <div >
            <input
            style={radioButton(icon4)}
            type="radio"
            name="icon"
            value={icon4}
            checked={icon === icon4}
            onChange={handleIconChange}
            
          />
        <input
            style={radioButton(icon1)}
            type="radio"
            name="icon"
            value={icon1}
            onChange={handleIconChange}
            
            
          />
          <input
            style={radioButton(icon2)}
            type="radio"
            name="icon"
            value={icon2}
            onChange={handleIconChange}
            
          />
          <input
            style={radioButton(icon3)}
            type="radio"
            name="icon"
            value={icon3}
            onChange={handleIconChange}
            
          />
        </div>
        )}

        <div style={buttonContainer}>
            <RedButton onClick={() => {toggleDesign(); handleCardSubmit();}} text={'Skapa'}/>
            <RedButton onClick={() => {toggleDesign(); handleCardSubmit();}} text={'Hoppa över'} style={{ backgroundColor: 'white', border: '1px solid red', color: 'red', }}/>
        </div>
        </>
    )
}

export default CompanyCardDesign;