import RedButton from "./RedButton";
import "../App.css";
import axios from "axios";
import { useState } from "react";
import backarrow from "../assets/arrow_back.svg";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import SecondaryButton from "./SecondaryButton";
import { useNavigate } from "react-router-dom";

function StudentRegForm() {
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

  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  const label = {
    fontSize: "16px",
    color: "black",
    fontFamily: "inter",
    textAlign: "left",
  };

  // const form = {
  //   marginBottom: "24px",
  // };

  //both developer and designer are set to true by default just to make sure that the user is able to register before logic is added to the buttons

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    designer: true,
    developer: true,
    linkedin: "",
    portfolio: "",
    textfield: "",
  });

  const handleChange = (e) => {
    const { name, type, checked } = e.target;
    let value = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // Validate first name, last name, email, password, and text field
    console.log(formData);

    e.preventDefault();
    if (
      !formData.firstname ||
      typeof formData.firstname !== "string" ||
      !/^[a-zA-Z]+$/.test(formData.firstname)
    ) {
      alert("Invalid first name");
      return;
    }

    if (
      !formData.lastname ||
      typeof formData.lastname !== "string" ||
      !/^[a-zA-Z]+$/.test(formData.lastname)
    ) {
      alert("Invalid last name");
      return;
    }

    if (
      !formData.email ||
      typeof formData.email !== "string" ||
      !/\S+@\S+\.\S+/.test(formData.email)
    ) {
      alert("Invalid email");
      return;
    }
    if (
      !formData.password ||
      typeof formData.password !== "string" ||
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(formData.password)
    ) {
      alert("Invalid password");
      return;
    }

    if (typeof formData.linkedin !== "string") {
      alert("Invalid linkedin-url");
      return;
    }
    /*     if (
      typeof formData.developer !== "bool" ||
      typeof formData.designer !== "bool"
    ) {
      alert("Invalid developer or designer");
      return;
    } */

    try {
      const response = await axios({
        url: "https://yrgomeetup.onrender.com/students",
        method: "POST",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      console.log("Response:", response); // Log the entire response
      if (response.status === 201) {
        navigate("/UserCreateProfile"); // Try navigating regardless of the response status
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("Error details:", error.response);
    }
  };

  const login = (e) => {
    e.preventDefault();
    try {
      navigate("/Login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <header
        css={css`
          display: flex;
          padding: 1rem;
        `}
      >
        <img src={backarrow}></img>
      </header>
      <section
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          ${mq[2]} {
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-start;
            margin: 2rem;
          }
        `}
      >
        <h2
          css={css`
            font-size: 36px;
            color: black;
            font-family: "inter";
            font-weight: 400;
            margin: 0;
          `}
        >
          Skapa Konto
        </h2>
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
              padding: 2rem 2rem;
              width: 720px;
            }
          `}
        >
          <label htmlFor="" style={label}>
            Förnamn
          </label>
          <input
            type="text"
            name="firstname"
            style={input}
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Förnamn"
            required
          />

          <label htmlFor="" style={label}>
            Efternamn
          </label>
          <input
            type="text"
            name="lastname"
            style={input}
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Efternamn"
            required
          />

          <label htmlFor="" style={label}>
            E-mail
          </label>
          <input
            type="text"
            name="email"
            style={input}
            value={formData.email}
            onChange={handleChange}
            placeholder="namn@gmail.com"
            required
          />

          <label htmlFor="" style={label}>
            Skapa lösenord
          </label>
          <input
            type="password"
            name="password"
            style={input}
            value={formData.password}
            onChange={handleChange}
            placeholder="*****"
            required
          />

          {/* <label htmlFor="" style={label}>
            Linkedin
          </label>
          <input
            type="text"
            name="linkedin"
            style={input}
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="linkedin"
          />
          <label htmlFor="" style={label}>
            Övrigt
          </label>
          <input
            type="text"
            style={largeInput}
            name="textfield"
            value={formData.textfield}
            onChange={handleChange}
            placeholder="övrigt..."
          /> */}
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 10px;
              width: 100%;
              margin-bottom: 20px;
            `}
          >
            <div>
              <h3
                css={css`
                  font-size: 16px;
                  color: black;
                  font-family: "inter";
                  text-align: left;
                  font-weight: 400;
                `}
              >
                Vilket utbildning går du?
              </h3>
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
                gap: 1rem;
              `}
            >
              <input
                type="checkbox"
                name="developer"
                checked={formData.developer}
                onChange={handleChange}
              />
              <label htmlFor="developer" style={label}>
                Webbutvecklare
              </label>

              <input
                type="checkbox"
                name="designer"
                checked={formData.designer}
                onChange={handleChange}
              />
              <label htmlFor="designer" style={label}>
                Digital designer
              </label>
            </div>
          </div>
          <RedButton text="Nästa" className="regButton" />
        </form>
      </section>
    </>
  );
}
export default StudentRegForm;
