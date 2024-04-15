import RedButton from "./RedButton";
import "../App.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CompanyRegProgBar from "./CompanyRegProgBar";

function CompanyRegForm({ setIsFormSubmitted }) {
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
    borderRadius: "4px",
  };

  const label = {
    fontSize: "16px",
    color: "black",
    fontFamily: "inter",
    textAlign: "left",
  };

  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    firstname: "",
    lastname: "",
    email: "",
    Gdpr: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://yrgomeetup.onrender.com/companys",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response);

      const insertId = response.data[0].insertId;
      console.log("Inserted ID:", insertId);

      localStorage.setItem("submittedFormData", JSON.stringify(formData));
      localStorage.setItem("insertId", insertId);
      setFormData({
        companyName: "",
        website: "",
        firstname: "",
        lastname: "",
        email: "",
        gdpr: false,
      });
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
      <section>
        <form
          onSubmit={handleSubmit}
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 8px;

            ${mq[2]} {
              border: 1px solid #000000;
              width: 45vw;
              max-width: 620px;
              padding: 2rem;
            }
          `}
        >
          <CompanyRegProgBar
            number={"1"}
            redBarWidth={"110px"}
            grayBarWidth={"220px"}
          />

          <label htmlFor="companyName" style={label}>
            Företagsnamn
          </label>
          <input
            type="text"
            style={input}
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Företagsnamn..."
            required
          />
          <label htmlFor="website" style={label}>
            Hemsida
          </label>
          <input
            type="text"
            style={input}
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="URL till företaget"
          />
          <label htmlFor="firstname" style={label}>
            Förnamn
          </label>
          <input
            type="text"
            style={input}
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Namn"
          />
          <label htmlFor="lastname" style={label}>
            Efternamn
          </label>
          <input
            type="text"
            style={input}
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Namn"
          />
          <label htmlFor="email" style={label}>
            Email för kontaker
          </label>
          <input
            type="email"
            style={input}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@gmail.com"
            required
          />
          <div >
              <input type="checkbox" required name="gdpr"/>
              <label style={label} checked={formData.Gdpr} onChange={handleChange} htmlFor="gdpr">Jag accepterar GDPR-villkoren </label>
          </div>
          <RedButton text="Submit" />
        </form>
      </section>
    </>
  );
}

export default CompanyRegForm;
