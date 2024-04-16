import React, { useState, useEffect } from "react";
import axios from "axios";
import burgerMenu from "../assets/menu.svg";
import yrgologo from "../assets/icon4.svg";
import "../App.css";
import RedButton from "./RedButton";
import SmallRedButton from "./SmallRedButton";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function CompanysPage() {
  const cardsWrapper = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "24px",
  };

  const companyCardContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",

    fontSize: "14px",
    color: "black",
    fontFamily: "inter",
  };

  const header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    width: "100%",
    height: "100px",
    backgroundColor: "#F52A3B",
  };

  const nav = {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const lookingFor = {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    fontFamily: "Inter",
    fontSize: "20px",
    FontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0.15px",
    padding: "0 0 0 0",
  };

  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: "https://yrgomeetup.onrender.com/companys",
          method: "GET",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        setCompanyData(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  return (
    <div
      style={companyCardContainer}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 24px;
        font-size: 14px;
        color: black;
        font-family: "inter";
      `}
    >
      <header style={header}>
        <nav style={nav}>
          <h1
            css={css`
              font-family: "inter";
              font-size: 33px;
              font-style: normal;
              font-weight: 300;
              line-height: 32px;

              ${mq[2]} {
                font-size: 33px;
              }
            `}
          >
            Företagen
          </h1>
          <img src={burgerMenu} alt="logo" />
        </nav>
      </header>
      <section style={lookingFor}>
        <p>Söker alla</p>
        <p>Söker DD</p>
        <p>Söker WU</p>
      </section>

      <section style={cardsWrapper}>
        {companyData.map((company, index) => (
          <div
            key={index}
            css={css`
              display: flex;
              flex-wrap: wrap;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              width: 308px;
              height: 200px;
              border-radius: 8.04px;
              border: 1px solid #000;
              background: #e4e9eb;
              gap: 16px;

              ${mq[2]} {
                width: 427px;
                height: 278px;
                font-size: 14px;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: left;
                align-items: center;
                width: 70%;
                height: 110px;
                gap: 20px;
                padding: 0;

                ${mq[2]} {
                  padding: 20px;
                  width: 100%;
                  justify-content: center;
                  align-items: center;
                }
              `}
            >
              <img
                src={yrgologo}
                css={css`
                  display: none;

                  ${mq[2]} {
                    display: block;
                  }
                `}
              ></img>

              <div
                css={css`
                  width: 100%;
                  text-align: left;

                  ${mq[2]} {
                    width: 50%;
                  }
                `}
              >
                <h2
                  css={css`
                    font-size: 26px;
                    margin: 6px 0;
                    ${mq[2]} {
                      /* font-size: 30px; */
                    }
                  `}
                >
                  {company.companyname}
                </h2>
                <p style={{ margin: "6px" }}>{company.email}</p>
                <p style={{ margin: "6px" }}>{company.phone}</p>
                <p style={{ width: "50px", margin: "6px" }}>
                  <a href={company.linkedin}>Linkedin</a>{" "}
                </p>

                <SmallRedButton text={"Ta reda på mer"} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CompanysPage;
