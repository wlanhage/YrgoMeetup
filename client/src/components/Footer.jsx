import { onClick } from "react";
import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const HeroFooter = styled.div`
  width: 100%;
  text-align: left;
  padding: 12px 32px 48px 32px;

  @media (min-width: 768px) {
    height: 275px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const Paragraph = styled.p`
  font-family: "Inter";
  margin: 0.5rem 0 0.5rem 0;
`;

const breakpoints = [576, 768, 900, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

function Footer() {
  const navigate = useNavigate();

  const handleClickCompany = () => {
    navigate("/Company");
  };

  const handleClickStudent = () => {
    navigate("/Register");
  };
  return (
    <>
      <div
        css={css`
          height: 2px;
          background-color: #000000;

          margin: 2rem 2rem 0 2rem;
        `}
      ></div>
      <HeroFooter>
        <Paragraph>Kontakt</Paragraph>
        <Paragraph onClick={handleClickCompany}>
          Anmäl ditt företag här
        </Paragraph>
        <Paragraph onClick={handleClickStudent}>Logga in som student</Paragraph>
        <Paragraph>https://www.yrgo.se/</Paragraph>
      </HeroFooter>
    </>
  );
}

export default Footer;
