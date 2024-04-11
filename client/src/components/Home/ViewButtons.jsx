import RedButton from "../RedButton"; // RedButton component
import HeroButtonWhite from "../HeroButtonWhite"; // HomeButton component
import { useNavigate } from "react-router-dom"; // useNavigate
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function ViewButtons() {
  const navigate = useNavigate();

  const box = {
    color: "black",
    border: "none",
    width: "100%-4rem",
    height: "auto",

    margin: "0 2rem 2rem 2rem",
    justifyContent: "left",
    fontFamily: "inter",
    fontSize: 16,
  };

  const text = {
    marginRight: "2rem",
    textAlign: "left",
  };

  const HeroButtonRed = styled.button`
    background-color: red;
    color: white;
    border: 1px solid white;
    border-radius: 35px 35px 35px 35px;
    width: 100%;
    height: 56px;
    padding: 16px 24px;
    font-family: inter;
  `;

  const HeroButtonWhiteView = styled.button`
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 35px 35px 35px 35px;

    width: 100%;
    height: 56px;
    padding: 16px 24px;
    font-family: inter;
  `;
  const NavigateToUserDashboard = (e) => {
    try {
      e.preventDefault();
      navigate("/UserDashboard");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div style={box}>
      <p style={text}>Anmäl ditt företag till eventet</p>
      <RedButton
        text="Gå till formuläret"
        css={css`
          color: black;
          border: 1px solid black;
        `}
      />
      <p style={text}>Är du Student?</p>
      <HeroButtonWhiteView onClick={NavigateToUserDashboard}>
        {" "}
        Är du Student?
      </HeroButtonWhiteView>
      <p style={text}>Har du inget konto?</p>
      <p
        style={text}
        css={css`
          text-decoration: underline;
        `}
      >
        Skapa konto
      </p>
    </div>
  );
}
