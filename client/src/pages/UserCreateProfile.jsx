import React from "react";
import Navbar from "../components/Navbar";
import UserProfileInfo from "../components/UserProfileInfo";
import RedButton from "../components/RedButton";
import SecondaryButton from "../components/SecondaryButton";
import { useEffect, useState } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

//user info page. later this will fetch the user's name, area etc from the database and display their info here

const UserCreateProfile = () => {
  const basicStyle = {
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 400,
    color: "black",

    marginLeft: "2rem",
    marginRight: "2rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  };
  const style = {
    display: "flex",
    flexDirection: "row",
    marginBottom: "60px",
  };
  const header = {
    fontSize: "33px",
    fontWeight: 400,
    fontFamily: "inter",
    textAlign: "center",
    marginLeft: "2rem",
    marginRight: "2rem",
  };

  const label = {
    fontSize: "16px",
    color: "black",
    fontFamily: "inter",
    textAlign: "left",
    marginLeft: "10px",
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

  const [formData, setFormData] = useState({
    linkedin: "",
    portfolio: "",
    languages: [],
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setFormData((prevState) => {
      if (type === "checkbox") {
        // If the checkbox is checked, add the language ID to the array
        // If the checkbox is unchecked, remove the language ID from the array
        const updatedLanguages = checked
          ? [...prevState.languages, Number(name)]
          : prevState.languages.filter((id) => id !== Number(name));

        return { ...prevState, languages: updatedLanguages };
      } else {
        // For other input types, just update the value
        return { ...prevState, [name]: value };
      }
    });
  };

  const createUserProfile = async (formData) => {
    try {
      const response = await axios({
        url: "https://yrgomeetup.onrender.com/students",
        method: "PUT",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return response;
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserProfile(formData);

      console.log(response);

      const insertId = response.data[0].insertId;
      console.log("Inserted ID:", insertId);

      localStorage.setItem("submittedFormData", JSON.stringify(formData));
      localStorage.setItem("insertId", insertId);
      setFormData({
        linkedin: "",
        portfolio: "",
        languages: [],
      });
      setIsFormSubmitted(true);
      console.log(setIsFormSubmitted);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  const languages = [
    { id: 1, name: "PHP" },
    { id: 2, name: "C#" },
    { id: 3, name: "HTML" },
    { id: 4, name: "CSS" },
    { id: 5, name: "Laravel" },
    { id: 6, name: "Javascript" },
    // ...
  ];

  return (
    <div>
      <Navbar />
      <h1 style={header}>Skapa Profil</h1>
      <form action="" style={basicStyle} onSubmit={handleSubmit}>
        <label
          htmlFor=""
          css={css`
            font-size: 16px;
            color: black;
            font-family: inter;
            text-align: left;
            margin-bottom: 10px;
          `}
        >
          Länk till LinkedIn
        </label>
        <input
          type="text"
          name="linkedin"
          style={input}
          css={css`
            ${mq[2]} {
              width: 50%;
            }
          `}
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="Linkedin"
          required
        />

        <label
          htmlFor=""
          css={css`
            font-size: 16px;
            color: black;
            font-family: inter;
            text-align: left;
            margin-bottom: 10px;
          `}
        >
          Länk till portfolio
        </label>

        <input
          type="text"
          name="portfolio"
          style={input}
          css={css`
            ${mq[2]} {
              width: 50%;
            }
          `}
          value={formData.portfolio}
          onChange={handleChange}
          placeholder="Portfolio"
          required
        />

        <p>Vilka kunskaper har du?</p>

        <section
          css={css`
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            /* background-color: #ae6363; */
          `}
        >
          {languages.map((language) => (
            <div key={language.id}>
              <input
                type="checkbox"
                name={language.id.toString()} // Convert the ID to a string
                checked={formData.languages.includes(language.id)}
                onChange={handleChange}
              />
              <label htmlFor={language.id}>{language.name}</label>
            </div>
          ))}
        </section>

        <div
          css={css`
            margin-bottom: 1rem;
          `}
        >
          <RedButton text="Skapa konto" onClick={handleSubmit} />
        </div>
        <div>
          <SecondaryButton text="Logga ut" />
        </div>
      </form>
    </div>
  );
};
export default UserCreateProfile;
