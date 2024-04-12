/** @jsxImportSource @emotion/react */
import axios from 'axios';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import "../App.css";
import RedButton from './RedButton';
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
  const [submittedData, setSubmittedData] = useState({});
  useEffect(() => {
    const formData = localStorage.getItem('submittedFormData');
    let data = formData ? JSON.parse(formData) : {};
    setSubmittedData(data);
  }, []);

  const [selectedTitle, setSelectedTitle] = useState('Färg');
  const [cardColor, setCardColor] = useState('#9C9A9A');
  const [icon, setIcon] = useState(icon4);
  const [pattern, setPattern] = useState('');
  const [showColorButtons, setShowColorButtons] = useState(true);
  const [showPatternButtons, setShowPatternButtons] = useState(false);
  const [showIconButtons, setShowIconButtons] = useState(false);
  const [isFlipped, setIsFlipped] = useState(true);

  const handleColorChange = (event) => {
    setCardColor(event.target.value)
    setDesignData(prevState => ({ ...prevState, color: event.target.value }));
  };

  const handleIconChange = (event) => {
    setIcon(event.target.value)
    setDesignData(prevState => ({ ...prevState, icon: event.target.value }));
  };

  const handlePatternChange = (event) => {
    setPattern(event.target.value)
    setDesignData(prevState => ({ ...prevState, pattern: event.target.value }))
  };

  const handleColorClick = () => {
    setSelectedTitle('Färg');
    setShowColorButtons(!showColorButtons);
    setShowPatternButtons(false);
    setShowIconButtons(false);
  };

  const handlePatternClick = () => {
    setSelectedTitle('Mönster');
    setShowPatternButtons(!showPatternButtons);
    setShowColorButtons(false);
    setShowIconButtons(false);
  };

  const handleIconClick = () => {
    setSelectedTitle('Ikon');
    setShowIconButtons(!showIconButtons);
    setShowColorButtons(false);
    setShowPatternButtons(false);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCardSubmit = async () => {
    const cardData = {
      cardColor,
      icon,
      pattern,
    };
  
    try {
      const insertId = localStorage.getItem("insertId");
      // await the axios post request
      const response = await axios.put(`https://yrgomeetup.onrender.com/companys/${insertId}/design`, 
      cardData, 
      {
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
      // Handle response if needed
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  const Phone = styled.div`
  display: block;

  @media (min-width: 900px) {
    display: none;
  }
`;

  const HeaderText = styled.div`
    font-family: 'inter';
    font-size: 30px;
    width: 320px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
    margin-bottom: 40px;
    text-align: start;
  `;

  const CardContainer = styled.div`
    position: relative;
    width: 320px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
  `;

  const Card = styled.div`
    width: 320px;
    height: 200px;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    border: 1.5px solid;
    border-radius: 9px;
    position: absolute;
    transform: translate(-12px, 12px);
  `;

  const CardBackside = styled.div`
    width: 320px;
    height: 200px;
    background-color: ${cardColor};
    background-image: url(${pattern});
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    border: 1.5px solid;
    border-radius: 9px;
    position: absolute;
    transform: translate(12px, -12px);
  `;

  const CardBacksideText = styled.p`
    position: relative;
    top: 115px;
    right: 65px;
    font-family: 'inter';
    font-size: 30px;
    font-weight: bold;
    color: white;

  `;

  const SelectionBar = styled.div`
    margin-top: 20px;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 310px;
    padding: 20px;
  `;

  const RadioButton = styled.input`
    width: 50px;
    height: 50px;
    margin: 15px;
    border: none;
    background-image: url(${({ imageUrl }) => imageUrl});
    background-size: cover;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    ${({ selected }) => selected && css`
      width: 40px;
      height: 40px;
      border: 1px solid black;
    `}
  `;

  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 70px;
  `;


  const Desktop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 50px auto; /* Adjust this value as needed */

  @media (max-width: 900px) {
    display: none;
  }
  `;

  const DesktopLeft = styled.div`
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const DesktopLeftTextArea = styled.div`
    margin-bottom: 60px;

  `;

  const DesktopRight = styled.div`
    width: 50vw;
    align-items: center;
    padding: 20px;
    border: 1px solid #001A52;
  `;


  return (
    <>
      <Phone>
      <Navbar />
      <CompanyRegProgBar number={'3'} redBarWidth={'330px'} grayBarWidth={'0px'} />
      <HeaderText>Designa ett visitkort</HeaderText>
      <CardContainer onClick={handleCardClick}>
        {isFlipped ? (
          <>
            <CardBackside></CardBackside>
            <Card>
              <CompanyCardContent icon={icon}/>
            </Card>
          </>
        ) : (
          <>
            <Card>
              <CompanyCardContent icon={icon}/>
            </Card>
            <CardBackside>
              <CardBacksideText>{submittedData.companyName}</CardBacksideText>
            </CardBackside>
          </>
        )}
      </CardContainer>
      <SelectionBar>
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
      </SelectionBar>
      {showColorButtons && (
        <div>
          <RadioButton
            imageUrl={grayBox}
            type="radio"
            name="color"
            value='#9C9A9A'
            checked={cardColor === '#9C9A9A'}
            onChange={handleColorChange}
            selected={cardColor === '#9C9A9A'}
          />
          <RadioButton
            imageUrl={redBox}
            type="radio"
            name="color"
            value='#F52A3B'
            onChange={handleColorChange}
            selected={cardColor === '#F52A3B'}
          />
          <RadioButton 
            imageUrl={lightblueBox}
            type="radio"
            name="color"
            value='#35D4D1'
            onChange={handleColorChange}
            selected={cardColor === '#35D4D1'}
          />
          <RadioButton
            imageUrl={blueBox}
            type="radio"
            name="color"
            value='#314673'
            onChange={handleColorChange}
            selected={cardColor === '#314673'}
          />
        </div>
      )}
      {showPatternButtons && (
        <div>
          <RadioButton
            imageUrl={grayBox}
            type="radio"
            name="pattern"
            value=""
            checked={pattern === ""}
            onChange={handlePatternChange}
          />
          <RadioButton
            imageUrl={patternButton2}
            type="radio"
            name="pattern"
            value={pattern1}
            onChange={handlePatternChange}
          />
          <RadioButton
            imageUrl={patternButton3}
            type="radio"
            name="pattern"
            value={pattern2}
            onChange={handlePatternChange}
          />
          <RadioButton
            imageUrl={patternButton}
            type="radio"
            name="pattern"
            value={pattern3}
            onChange={handlePatternChange}
          />
        </div>
      )}
      {showIconButtons && (
        <div >
          <RadioButton
            imageUrl={icon4}
            type="radio"
            name="icon"
            value={icon4}
            checked={icon === icon4}
            onChange={handleIconChange}
          />
          <RadioButton
            imageUrl={icon1}
            type="radio"
            name="icon"
            value={icon1}
            onChange={handleIconChange}
          />
          <RadioButton
            imageUrl={icon2}
            type="radio"
            name="icon"
            value={icon2}
            onChange={handleIconChange}
          />
          <RadioButton
            imageUrl={icon3}
            type="radio"
            name="icon"
            value={icon3}
            onChange={handleIconChange}
          />
        </div>
      )}
      <ButtonContainer>
        <RedButton onClick={() => {toggleDesign(); handleCardSubmit();}} text={'Skapa'}/>
        <RedButton onClick={() => {toggleDesign(); handleCardSubmit();}} text={'Hoppa över'} style={{ backgroundColor: 'white', border: '1px solid red', color: 'red', }}/>
      </ButtonContainer>
      </Phone>

      <Desktop>
        <DesktopLeft>
          <DesktopLeftTextArea>
            <div style={{fontFamily: 'inter', fontSize: '60px', fontWeight: '300', textAlign: 'start'}}>
              Anmälning till Branchevent 2024</div>
            <div style={{fontFamily: 'inter', fontSize: '20px', weight: '400', textAlign: 'start'}}>
              Informationen används i syfte för att eleverna ska ha möjlighet att lära känna ert företag innan dess att eventet sker</div>
          </DesktopLeftTextArea>
          <CardContainer onClick={handleCardClick}>
          {isFlipped ? (
            <>
              <CardBackside></CardBackside>
              <Card>
                <CompanyCardContent icon={icon}/>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CompanyCardContent icon={icon}/>
              </Card>
              <CardBackside>
                <CardBacksideText>{submittedData.companyName}</CardBacksideText>
              </CardBackside>
            </>
          )}
        </CardContainer>
        </DesktopLeft>

        <DesktopRight>
        <Navbar />
        <CompanyRegProgBar number={'3'} redBarWidth={'330px'} grayBarWidth={'0px'} />
        <HeaderText>Designa ett visitkort</HeaderText>

        <SelectionBar>
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
        </SelectionBar>
        {showColorButtons && (
          <div>
            <RadioButton
              imageUrl={grayBox}
              type="radio"
              name="color"
              value='#9C9A9A'
              checked={cardColor === '#9C9A9A'}
              onChange={handleColorChange}
              selected={cardColor === '#9C9A9A'}
            />
            <RadioButton
              imageUrl={redBox}
              type="radio"
              name="color"
              value='#F52A3B'
              onChange={handleColorChange}
              selected={cardColor === '#F52A3B'}
            />
            <RadioButton 
              imageUrl={lightblueBox}
              type="radio"
              name="color"
              value='#35D4D1'
              onChange={handleColorChange}
              selected={cardColor === '#35D4D1'}
            />
            <RadioButton
              imageUrl={blueBox}
              type="radio"
              name="color"
              value='#314673'
              onChange={handleColorChange}
              selected={cardColor === '#314673'}
            />
          </div>
        )}
        {showPatternButtons && (
          <div>
            <RadioButton
              imageUrl={grayBox}
              type="radio"
              name="pattern"
              value=""
              checked={pattern === ""}
              onChange={handlePatternChange}
            />
            <RadioButton
              imageUrl={patternButton2}
              type="radio"
              name="pattern"
              value={pattern1}
              onChange={handlePatternChange}
            />
            <RadioButton
              imageUrl={patternButton3}
              type="radio"
              name="pattern"
              value={pattern2}
              onChange={handlePatternChange}
            />
            <RadioButton
              imageUrl={patternButton}
              type="radio"
              name="pattern"
              value={pattern3}
              onChange={handlePatternChange}
            />
          </div>
        )}
        {showIconButtons && (
          <div >
            <RadioButton
              imageUrl={icon4}
              type="radio"
              name="icon"
              value={icon4}
              checked={icon === icon4}
              onChange={handleIconChange}
            />
            <RadioButton
              imageUrl={icon1}
              type="radio"
              name="icon"
              value={icon1}
              onChange={handleIconChange}
            />
            <RadioButton
              imageUrl={icon2}
              type="radio"
              name="icon"
              value={icon2}
              onChange={handleIconChange}
            />
            <RadioButton
              imageUrl={icon3}
              type="radio"
              name="icon"
              value={icon3}
              onChange={handleIconChange}
            />
          </div>
        )}
        <ButtonContainer>
          <RedButton onClick={() => {toggleDesign(); handleCardSubmit();}} text={'Skapa'}/>
          <RedButton onClick={() => {toggleDesign(); handleCardSubmit();}} text={'Hoppa över'} style={{ backgroundColor: 'white', border: '1px solid red', color: 'red', }}/>
        </ButtonContainer>
        </DesktopRight>
      </Desktop>
    </>
  );

}
export default CompanyCardDesign;
