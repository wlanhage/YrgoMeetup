/** @jsxImportSource @emotion/react */
import axios from "axios";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import CompanyRegForm from "../components/CompanyRegForm.jsx";
import Navbar from "../components/Navbar.jsx";
import CompanyRegFormSecond from "../components/CompanyRegFormSecond.jsx";
import CompanyRegLeftInfo from "../components/CompanyRegLeftInfo.jsx";
import { useState } from "react";
import Footer from "../components/Footer.jsx";

function CompanyReg() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  const DisplayWrapper = styled.div`
    @media (max-width: 900px) {
      display: none;
    }
  `;

  return (
    <>
      <Navbar />
      <Wrapper>
        <DisplayWrapper>
          <CompanyRegLeftInfo />
        </DisplayWrapper>
        {isFormSubmitted ? (
          <CompanyRegFormSecond />
        ) : (
          <CompanyRegForm setIsFormSubmitted={setIsFormSubmitted} />
        )}
      </Wrapper>
      <Footer />
    </>
  );
}

export default CompanyReg;
