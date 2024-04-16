import { onClick } from "react";
import styled from "@emotion/styled";

function HeroButton({ text, style: additionalStyle, onClick }) {
  const HeroButton = styled.button`
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 35px;
    width: 100%;
    height: 56px;
    padding: 16px 24px;
    font-family: inter;
    transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease;
    &:hover {
      background-color: white;
      opacity: 0.8;
      color: black;
      cursor: pointer;
    }
  `;
  return (
    <>
      <HeroButton onClick={onClick}>{text}</HeroButton>
    </>
  );
}

export default HeroButton;
