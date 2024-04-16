import "../App.css";
import leftArrow from "../assets/smallicons/leftarrow.svg";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

function CompanyRegProgBar({ number, grayBarWidth, redBarWidth, link }) {
  const navigate = useNavigate();

  const textStyle = {
    fontFamily: "inter",
  };

  const ProgBarContainer = {
    display: "flex",
    flexDirection: "row",
    width: "333px",
    justifyContent: "space-between",

    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "15px",
    marginBottom: "15px",
  };

  const grayBar = {
    width: grayBarWidth,
    height: "3px",
    backgroundColor: "gray",
    borderRadius: "10px",
    transition: "width 0.7s ease-in-out",
  };

  const redBar = {
    width: redBarWidth,
    height: "3px",
    backgroundColor: "#F52A3B",
    borderRadius: "50px",
    transition: "width 0.7s ease-in-out",
  };

  const container = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  };

  const empty = {
    width: "20px",
  };

  return (
    <>
      <div style={container}>
        <div onClick={() => navigate(link)}>
          <img src={leftArrow} alt="leftArrow" />
        </div>
        <div style={textStyle}>Steg {number} av 3</div>
        <div style={empty}></div>
      </div>
      <div style={ProgBarContainer}>
        <div style={redBar}></div>
        <div style={grayBar}></div>
      </div>
    </>
  );
}

export default CompanyRegProgBar;
