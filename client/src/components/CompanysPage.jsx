import React, { useState, useEffect } from "react";
import axios from "axios";
import burgerMenu from "../assets/menu.svg";
import yrgologo from "../assets/yrgo.svg";
import "../App.css";
import RedButton from "./RedButton";

function CompanysPage() {
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
  const companyCard = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    height: "201px",
    width: "316px",
    borderRadius: "8.04px",
    border: "1px solid var(--Base-Black, #000)",
    background: "var(--Base-White, #FFF)",
    padding: "18px 22px",
    gap: "16px",
  };

  const companyInfo = {
    width: "50%",
    textAlign: "left",
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

  const wrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "110px",
    gap: "20px",
  };

  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://yrgomeetup.onrender.com/companys"
        );
        //    console.log(response.data[0]);
        setCompanyData(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  //   console.log(companyData);
  return (
    <div style={companyCardContainer}>
      <header style={header}>
        <nav style={nav}>
          <h1
            style={{
              fontFamily: "Inter",
              fontSize: "33px",
              FontStyle: "normal",
              fontWeight: "300",
              lineHeight: "32px",
            }}
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
      {companyData.map((company, index) => (
        <div key={index} style={companyCard}>
          <div style={wrapper}>
            <img src={yrgologo}></img>

            <div style={companyInfo}>
              <h2 style={{ margin: "6px" }}>{company.company}</h2>
              <p style={{ margin: "6px" }}>{company.email}</p>
              <p style={{ margin: "6px" }}>{company.phone}</p>
              <p style={{ width: "50px", margin: "6px" }}>
                <a href={company.linkedin}>Linkedin</a>{" "}
              </p>
              <RedButton
                text={"Ta reda på mer"}
                style={{
                  width: "100%",
                  padding: "5px",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompanysPage;
