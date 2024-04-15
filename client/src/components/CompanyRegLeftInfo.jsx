import RedButton from "./RedButton";
import "../App.css";
import axios from "axios";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CompanyRegProgBar from "../components/CompanyRegProgBar";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CompanyCardContent from "./CompanyCardContent";
import icon from "../assets/icon4.svg";
import icon4 from "../assets/icon4.svg";


function CompanyRegLeftInfo () {
    const [isFlipped, setIsFlipped] = useState(true);


    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
      };


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
    background-color: #E4E9EB;
    
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

    return (
        <>
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
                <CompanyCardContent icon={icon4}/>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CompanyCardContent icon={icon4} />
              </Card>
              <CardBackside>
                <CardBacksideText>{submittedData.companyName}</CardBacksideText>
              </CardBackside>
            </>
          )}
        </CardContainer>
        </DesktopLeft>
        </>
    )
}

export default CompanyRegLeftInfo;