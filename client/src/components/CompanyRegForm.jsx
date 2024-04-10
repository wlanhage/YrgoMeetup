import RedButton from "./RedButton";
import "../App.css";
import axios from "axios";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CompanyRegProgBar from "../components/CompanyRegProgBar";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function CompanyRegForm() {
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

  const header = {
    fontSize: "36px",
    color: "black",
    fontFamily: "inter",
    fontWeight: 400,
    margin: "0 0 50px 0",
  };

  const label = {
    fontSize: "16px",
    color: "black",
    fontFamily: "inter",
    textAlign: "left",
  };

  /*  ---------  */

  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
    linkedin: "",
    textfield: "",
    web: false,
    design: false,
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
      const response = await axios.post(
        "https://yrgomeetup.onrender.com/companys",
        formData,

        localStorage.setItem("submittedFormData", JSON.stringify(formData)),

        setFormData({
          company: "",
          email: "",
          phone: "",
          linkedin: "",
          textfield: "",
          web: false,
          design: false,
        }),

        navigate("/CompanyCard")
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  return (
    <>
      <CompanyRegProgBar
        number={"1"}
        redBarWidth={"110px"}
        grayBarWidth={"220px"}
      />
      <section
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;

          ${mq[2]} {
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-start;
            margin: 2rem;
          }
        `}
      >
        <div
          css={css`
            text-align: left;
            padding: 0 2rem;
          `}
        >
          <h2 style={header}>Anmälningsformulär</h2>
          <p
            css={css`
              max-width: 400px;
              font-family: "Inter";
              font-size: 16px;
            `}
          >
            Informationen används i syfte för att eleverna ska ha möjlighet att
            lära känna ert företag innan dess att eventet sker
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          css={css`
            display: flex;
            flex-direction: column;

            justify-content: center;
            gap: 8px;

            padding: 2rem 2rem;
            ${mq[2]} {
              border: 1px solid #000000;

              width: 720px;
            }
          `}
        >
          <label htmlFor="" style={label}>
            Företagsnamn
          </label>
          <input
            type="text"
            style={input}
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="company..."
            required
          />{" "}
          <label htmlFor="" style={label}>
            Vilka är vi?
          </label>
          <input
            type="text"
            style={largeInput}
            name="textfield"
            value={formData.textfield}
            onChange={handleChange}
            placeholder="Text är..."
          />
          <label htmlFor="" style={label}>
            Phone
          </label>
          <input
            type="text"
            style={largeInput}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="phone..."
          />
          <label htmlFor="" style={label}>
            Email
          </label>
          <input
            type="email"
            style={input}
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email..."
          />
          <label htmlFor="" style={label}>
            Vad vi jobbar med
          </label>
          <label htmlFor="" style={label}>
            Webbplats
          </label>
          <input
            type="text"
            style={input}
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="www."
            required
          />
          <label htmlFor="web" style={label}>
            Web
          </label>
          <input
            type="checkbox"
            name="web"
            checked={formData.web}
            onChange={handleChange}
          />
          <label htmlFor="design" style={label}>
            Design
          </label>
          <input
            type="checkbox"
            name="design"
            checked={formData.design}
            onChange={handleChange}
          />
          <RedButton onClick={handleSubmit} text="Submit" />
        </form>
      </section>
    </>
  );
}

export default CompanyRegForm;
