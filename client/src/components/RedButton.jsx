import { onClick } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const RedButtonStyled = styled.button`
  background-color: #f52a3b;
  color: white;
  border: none;
  border-radius: 35px 35px 35px 35px;
  width: 100%;
  height: 56px;
  padding: 16px 24px;
  justify-content: space-between;
  font-family: "inter";
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

function RedButton({ text, onClick }) {
  return <RedButtonStyled onClick={onClick}>{text}</RedButtonStyled>;
}

export default RedButton;
