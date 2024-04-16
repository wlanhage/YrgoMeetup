import RedButton from "./RedButton";
import "../App.css";
import axios from "axios";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CompanyRegProgBar from "../components/CompanyRegProgBar";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function CompanyRegFormSecond () {
    const navigate = useNavigate();
    const [description, setDescription] = useState("");
    const [services, setServices] = useState("");
    /* const [intern, setIntern] = useState("");


    const handleInternChange = (event) => {
    setIntern(event.target.value);
    }; */

    const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    };

    const handleServicesChange = (event) => {
    setServices(event.target.value);
    };

    const handleUpdateSubmit = async (event) => {
        event.preventDefault();
        const companyData = {
          description,
          services,
          /* intern, */
        };
      
        try {
          const insertId = localStorage.getItem("insertId");
          // await the axios post request
          const response = await axios.put(`https://yrgomeetup.onrender.com/companys/${insertId}/description`, 
          companyData, 
          {
          headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
          // Handle response if needed
          console.log("Response:", response.data);
          navigate("/CompanyCard");
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };

      const label = {
        fontSize: "16px",
        color: "black",
        fontFamily: "inter",
        textAlign: "left",
      };

      const input = {
        backgroundColor: "#ffffff",
        padding: "10px",
        fontSize: "16px",
        color: "black",
        fontFamily: "inter",
        marginBottom: "20px",
        textAlign: "left",
        border: "1px solid #000000",
        borderRadius: "4px, 4px, 4px, 4px",
      };

      const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);


    return (
        <>
        <form
          onSubmit={handleUpdateSubmit}
          css={css`
          margin-top: 50px;
            display: flex;
            flex-direction: column;

            justify-content: center;
            gap: 8px;

            /* padding: 2rem 2rem; */
            ${mq[2]} {
              border: 1px solid #000000;
              width: 45vw;
              max-width: 620px;
              padding: 2rem 2rem;
            }
          `}
        >

          <CompanyRegProgBar
                  number={"2"}
                  redBarWidth={"220px"}
                  grayBarWidth={"110px"}
                />

          <label htmlFor="" style={label}>
            Företagsbeskrivning - max 100 ord
          </label>
          <input
            type="text"
            style={input}
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Kort beskrivning av det vi gör..."
            required
          />{" "}
          <label htmlFor="" style={label}>
            Tjänster/Företagstyp
          </label>
          <input
            type="text"
            style={input}
            name="services"
            value={services} 
            onChange={handleServicesChange}
            placeholder="Kort om tekniker vi använder..."
          />
          {/* <label htmlFor="">
            Kan ni ta emot en LIA student mellan Dec - Maj?
          </label> */}
          {/* <input type="radio" value="No" name="intern" onChange={handleInternChange}/> Nej
          <input type="radio" value="Yes" name="intern" onChange={handleInternChange}/> Ja */}
          
          <RedButton onClick={handleUpdateSubmit} text="Submit" />
        </form>
        
        </>
    )
}

export default CompanyRegFormSecond