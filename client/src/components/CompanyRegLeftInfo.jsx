import RedButton from "./RedButton";
import "../App.css";
import axios from "axios";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CompanyRegProgBar from "../components/CompanyRegProgBar";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import CompanyCardContent from "./CompanyCardContent";
import icon from "../assets/icon4.svg";
import icon4 from "../assets/icon4.svg";

function CompanyRegLeftInfo() {
  const [submittedData, setSubmittedData] = useState({ companyName: '' });
  const [isFlipped, setIsFlipped] = useState(true);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const CardContainer = styled.div`
    position: relative;
    width: 384px;
    height: 240px;
    margin-left: auto;
    margin-right: auto;
  `;

  const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 384px;
    height: 240px;
    background-color: white;
    /* margin-left: auto;
    margin-right: auto; */
    border: 1.5px solid;
    border-radius: 9px;
    
    transform: translate(-12px, 12px);
  `;

  const CardBackside = styled.div`
    width: 384px;
    height: 240px;
    background-color: #e4e9eb;

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
    font-family: "inter";
    font-size: 30px;
    font-weight: bold;
    color: white;
  `;

  const Desktop = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin: 50px auto;
    

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
    margin: 50px;
  `;

  return (
    <>
      <DesktopLeft>
        <DesktopLeftTextArea>
          <div
            style={{
              fontFamily: "inter",
              fontSize: "60px",
              fontWeight: "300",
              textAlign: "start",
            }}
          >
            Anmälning till Branchevent 2024
          </div>
          <div
            style={{
              fontFamily: "inter",
              fontSize: "20px",
              weight: "400",
              textAlign: "start",
            }}
          >
            Informationen används i syfte för att eleverna ska ha möjlighet att
            lära känna ert företag innan dess att eventet sker
          </div>
        </DesktopLeftTextArea>
        <CardContainer onClick={handleCardClick}>
          {isFlipped ? (
            <>
              <CardBackside></CardBackside>
              <Card>
                <CompanyCardContent icon={icon4} companyName="Företag"/>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CompanyCardContent icon={icon4} />
              </Card>
              <CardBackside style={{ transform: 'translate(10px, -250px)'}}>
                <CardBacksideText>Företagsnamn</CardBacksideText>
              </CardBackside>
            </>
          )}
        </CardContainer>
      </DesktopLeft>
    </>
  );
}

export default CompanyRegLeftInfo;
