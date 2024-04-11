import { onClick } from "react";
import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const HeroFooter = styled.div`
  width: 100%;
  text-align: left;
  padding: 12px 32px 48px 32px;
`;

const Paragraph = styled.p`
  font-family: "Inter";
  margin: 0.5rem 0 0.5rem 0;
`;

function Footer() {
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
        <Paragraph>Anmäl ditt företag här</Paragraph>
        <Paragraph>Logga in som student</Paragraph>
        <Paragraph>Hitta hit</Paragraph>
      </HeroFooter>
    </>
  );
}

export default Footer;
