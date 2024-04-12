import React from "react";
import Navbar from "../components/Navbar";
import UserProfileInfo from "../components/UserProfileInfo";
import RedButton from "../components/RedButton";
import ReturnButton from "../components/ReturnButton";
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
  });

  const handleChange = (e) => {
    const { name, type, checked } = e.target;
    let value = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  /* useEffect(() => {
    const getSkills = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/getSkills');
        const data = response.data;
        setSkills(data);
    
    }
    }
}, []) */

  return (
    <div>
      <Navbar />
      <h1 style={header}>Skapa Profil</h1>
      <form action="" style={basicStyle}>
        <label htmlFor="" style={label}>
          Förnamn
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
          placeholder="Förnamn"
          required
        />

        <label htmlFor="" style={label}>
          Efternamn
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
          placeholder="Efternamn"
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
          <div
            css={css`
              margin-bottom: 20px;
            `}
          >
            <input
              type="checkbox"
              name="designer"
              checked={formData.designer}
              onChange={handleChange}
            />
            <label htmlFor="designer" style={label}>
              PHP
            </label>
          </div>
          <div
            css={css`
              margin-bottom: 20px;
            `}
          >
            <input
              type="checkbox"
              name="designer"
              checked={formData.designer}
              onChange={handleChange}
            />
            <label htmlFor="designer" style={label}>
              C#
            </label>
          </div>
          <div
            css={css`
              margin-bottom: 20px;
            `}
          >
            <input
              type="checkbox"
              name="designer"
              checked={formData.designer}
              onChange={handleChange}
            />
            <label htmlFor="designer" style={label}>
              Laravel
            </label>
          </div>
          <div
            css={css`
              margin-bottom: 20px;
            `}
          >
            <input
              type="checkbox"
              name="designer"
              checked={formData.designer}
              onChange={handleChange}
            />
            <label htmlFor="designer" style={label}>
              Javascript
            </label>
          </div>
          <div
            css={css`
              margin-bottom: 20px;
            `}
          >
            <input
              type="checkbox"
              name="designer"
              checked={formData.designer}
              onChange={handleChange}
            />
            <label htmlFor="designer" style={label}>
              HTML
            </label>
          </div>
          <div
            css={css`
              margin-bottom: 20px;
            `}
          >
            <input
              type="checkbox"
              name="designer"
              checked={formData.designer}
              onChange={handleChange}
            />
            <label htmlFor="designer" style={label}>
              CSS
            </label>
          </div>
          <div
            css={css`
              margin-bottom: 20px;
            `}
          >
            <input
              type="checkbox"
              name="designer"
              checked={formData.designer}
              onChange={handleChange}
            />
            <label htmlFor="designer" style={label}>
              Python
            </label>
          </div>
        </section>
        {/* <p>Jag vill synas för företagen</p>
        <div style={style}>
          <label htmlFor="Ja/nej">Ja</label>
          <input type="radio" name="Ja/Nej" value="Ja" />
          <label htmlFor="Ja/Nej">Nej</label>
          <input type="radio" name="Ja/Nej" value="Nej" />
        </div> */}
        <div
          css={css`
            margin-bottom: 1rem;
          `}
        >
          <RedButton text="Skapa konto" />
        </div>
        <div>
          <SecondaryButton text="Logga ut" />
        </div>
      </form>
    </div>
  );
};
export default UserCreateProfile;
