import RedButton from "./RedButton";
import "../App.css";
import axios from "axios";
import { useState } from "react";
import backarrow from "../assets/arrow_back.svg";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import iconMonitor from "../assets/icon3.svg";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "./SecondaryButton";
import CompanyRegProgBar from "./CompanyRegProgBar";
import styled from "@emotion/styled";

function StudentRegForm() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/");
    console.log("pressed");
  };

  const handleClickLogin = () => {
    navigate("/Login");
    console.log("pressed");
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
    marginLeft: "10px",
  };

  //both developer and designer are set to true by default just to make sure that the user is able to register before logic is added to the buttons

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    designer: false,
    developer: false,
    linkedin: "",
    portfolio: "",
    textfield: "",
    Gdpr: false,
  });

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    console.log(name, type, checked, value);
    let finalValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => {
      if (name === "profession") {
        return {
          ...prevFormData,
          designer: value === "designer",
          developer: value === "developer",
        };
      } else {
        return {
          ...prevFormData,
          [name]: finalValue,
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    if (!formData.Gdpr === true) {
      console.log(formData.Gdpr);

      alert("Du måste acceptera GDPR-villkoren för att kunna registrera dig");
      return;
    }
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
      ></header>
      <section
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          ${mq[2]} {
            flex-direction: row;
            gap: 4rem;
            align-items: flex-start;
            padding: 3rem;
          }
        `}
      >
        <div
          css={css`
            width: 100%;
            padding: 1rem 2rem;

            ${mq[2]} {
              width: 33%;
              padding: 3rem 1rem;
            }
          `}
        >
          <h2
            css={css`
              font-size: 36px;
              color: black;
              font-family: "inter";
              text-align: left;
              font-weight: 400;
              margin: 0;

              ${mq[2]} {
                font-size: 60px;
                font-weight: 300;
              }
            `}
          >
            Skapa Konto
          </h2>

          <p
            css={css`
              display: none;

              ${mq[2]} {
                display: block;
                font-family: "inter";
                text-align: left;
                max-width: 100%;
                font-size: 18px;
                line-height: 24px;
              }
            `}
          >
            Denna profil kommer kunna ses av de anmälda företagen och du kommer
            att kunna se alla deltagare i eventet.
          </p>
          <div
            css={css`
              ${mq[2]} {
                width: 100%;
                height: 400px;
              }
            `}
          >
            <img
              css={css`
                display: none;
                ${mq[2]} {
                  display: block;
                  width: 100%;
                  height: 100%;
                }
              `}
              src={iconMonitor}
            ></img>
          </div>
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
              padding: 2rem 2rem;
              width: 720px;
            }
          `}
        >
          <CompanyRegProgBar
            number={"1"}
            redBarWidth={"110px"}
            grayBarWidth={"220px"}
            onClick={() => navigate("/")}
          />
          <label htmlFor="" style={label}>
            Förnamn
          </label>
          <input
            type="text"
            name="firstname"
            style={input}
            css={css`
              ${mq[2]} {
                width: 50%;
              }
            `}
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
            css={css`
              ${mq[2]} {
                width: 50%;
              }
            `}
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
            <div
              css={css`
                width: 100%;
              `}
            >
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
            <div>
              <div
                css={css`
                  display: flex;
                  width: 100%;
                  flex-direction: row;
                  align-items: flex-start;
                  gap: 1rem;
                  ${mq[2]} {
                    flex-direction: row;
                  }
                `}
              >
                <input
                  type="radio"
                  name="profession"
                  value="developer"
                  checked={formData.developer}
                  onChange={handleChange}
                />
                <label htmlFor="developer" style={label}>
                  Webbutvecklare
                </label>
              </div>
              <div
                css={css`
                  margin-bottom: 20px;
                `}
              >
                <input
                  type="radio"
                  name="profession"
                  value="designer"
                  checked={formData.designer}
                  onChange={handleChange}
                />
                <label htmlFor="designer" style={label}>
                  Digital designer
                </label>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                value={formData.Gdpr}
                onChange={handleChange}
                name="Gdpr"
                required
              />
              <label style={label} htmlFor="Gdpr">
                Jag accepterar GDPR-villkoren{" "}
              </label>
            </div>
            <RedButton text="Nästa" className="regButton" />
            <SecondaryButton
              text="Redan medlem? Logga in"
              onClick={handleClickLogin}
              className="regButton"
            />
          </div>
        </form>
      </section>
    </>
  );
}
export default StudentRegForm;
