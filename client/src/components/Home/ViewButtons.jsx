import RedButton from "../RedButton"; // RedButton component
import HeroButtonWhite from "../HeroButtonWhite"; // HomeButton component
import { useNavigate } from "react-router-dom"; // useNavigate
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function ViewButtons() {
  const navigate = useNavigate();

  const box = {};

  const text = {
    marginRight: "2rem",
    textAlign: "left",
  };

  const HeroButtonRed = styled.button`
    background-color: #f52a3b;
    color: white;

    border-radius: 35px 35px 35px 35px;
    border: none;

    width: 100%;
    height: 56px;
    padding: 16px 24px;
    font-family: "inter";
  `;

  const HeroButtonWhiteView = styled.button`
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 35px 35px 35px 35px;

    width: 100%;
    height: 56px;
    padding: 16px 24px;
    font-family: "inter";
  `;
  const NavigateToUserDashboard = (e) => {
    try {
      e.preventDefault();
      navigate("/UserDashboard");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
  return (
    <div
      css={css`
        color: black;
        border: none;
        padding: 36px;
        justify-content: left;
        margin: 32px;
        font-family: inter;
        font-size: 16px;
        background-color: white;

        ${mq[1]} {
          width: 400px;
          padding: 0;
        }
      `}
    >
      <p style={text}>Anmäl ditt företag till eventet</p>

      <HeroButtonRed>Gå till formuläret</HeroButtonRed>
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
