import { onClick } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const SmallRedButtonStyled = styled.button`
  background-color: #f52a3b;
  color: white;
  border: none;
  border-radius: 35px 35px 35px 35px;
  /* width: 100%;
  height: 56px; */
  padding: 0.5rem 2rem;
  justify-content: space-between;
  font-family: "inter";
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

function SmallRedButton({ text, onClick }) {
  return <SmallRedButtonStyled onClick={onClick}>{text}</SmallRedButtonStyled>;
}

export default SmallRedButton;
