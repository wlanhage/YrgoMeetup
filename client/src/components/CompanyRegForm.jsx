import RedButton from "./RedButton";
import "../App.css";
import axios from "axios";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CompanyRegProgBar from "../components/CompanyRegProgBar";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function CompanyRegForm({setIsFormSubmitted}) {
  const navigate = useNavigate();

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

  const largeInput = {
    ...input,
    paddingBottom: "80px",
  };

  const label = {
    fontSize: "16px",
    color: "black",
    fontFamily: "inter",
    textAlign: "left",
  };

  /*  ---------  */

  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: "https://yrgomeetup.onrender.com/companys",
        method: "POST",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(response);

      const insertId = response.data[0].insertId;
      console.log("Inserted ID:", insertId);

      localStorage.setItem("submittedFormData", JSON.stringify(formData)),
      localStorage.setItem("insertId", insertId);
        setFormData({
          companyName: "",
          website: "",
          firstname: "",
          lastname: "",
          email: "",
        }),
        setIsFormSubmitted(true);
        console.log(setIsFormSubmitted);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  return (
    <>
        <form
      

          onSubmit={handleSubmit}
          css={css`
            display: flex;
            flex-direction: column;

            justify-content: center;
            gap: 8px;

            /* padding: 2rem 2rem; */
            ${mq[2]} {
              border: 1px solid #000000;
              width: 620px;
              padding: 2rem 2rem;
            }
          `}
        >
          <label htmlFor="" style={label}>
            Företagsnamn
          </label>
          <input
            type="text"
            style={input}
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Företagsnamn..."
            required
          />{" "}
          <label htmlFor="" style={label}>
            Hemsida
          </label>
          <input
            type="text"
            style={input}
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="URL till företaget"
          />
          <label htmlFor="" style={label}>
            Förnamn
          </label>
          <input
            type="text"
            style={input}
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Namn"
          />
          <label htmlFor="" style={label}>
            Efternamn
          </label>
          <input
            type="text"
            style={input}
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Namn"
          />
          <label htmlFor="" style={label}>
            Email för kontaker
          </label>
          <input
            type="email"
            style={input}
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@gmail.com"
            required
          />
          
          <RedButton onClick={handleSubmit} text="Submit" />
        </form>
      
    </>
  );
}

export default CompanyRegForm;
