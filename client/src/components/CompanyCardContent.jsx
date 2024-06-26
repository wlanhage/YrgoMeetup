import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import icon4 from "../assets/icon4.svg";
import RedButton from "./RedButton";
import SmallRedButton from "./SmallRedButton";

const CardsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  marginTop: 50px,

  gap: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 110px; */
  gap: 20px;
  

  @media (min-width: 900px) {
    align-items: center;
  }
`;

const CompanyInfo = styled.div`
  width: 50%;
  text-align: left;
  font-family: inter;
`;

const CompanyText = styled.p`
  margin: 6px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

function CompanyCardContent({ designData = {}, icon }) {
  if (!designData.icon) {
    designData.icon = icon;
  }

  const [submittedData, setSubmittedData] = useState({});

  useEffect(() => {
    // Retrieve formData from local storage
    const formData = localStorage.getItem("submittedFormData");
    if (formData) {
      setSubmittedData(JSON.parse(formData));
    }
  }, []);

  return (
    <CardsWrapper>
      <Wrapper>
        <Icon src={designData.icon} alt="Company Icon" />
        <CompanyInfo>
          <CompanyText>{submittedData.companyName}</CompanyText>
          <CompanyText>{submittedData.website}</CompanyText>
          <CompanyText>{submittedData.email}</CompanyText>
          <CompanyText style={{ width: "50px" }}> </CompanyText>
          <a href={submittedData.website}>
            <SmallRedButton text={"Läs mer"} />
            {/* <RedButton
              text={"Ta reda på mer"}
              style={{
                width: "100%",
                padding: "5px",
                height: "auto",
              }}
            /> */}
          </a>
        </CompanyInfo>
      </Wrapper>
    </CardsWrapper>
  );
}

export default CompanyCardContent;
