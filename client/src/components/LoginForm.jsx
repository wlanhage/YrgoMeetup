import RedButton from "./RedButton";
import "../App.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { ClassNames, css } from "@emotion/react";
import backarrow from "../assets/arrow_back.svg";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "karlsson@email.com",
    password: "123ABCabc",
  });
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate("/");
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
    width: "100%",
  };

  const label = {
    fontSize: "16px",
    color: "black",
    fontFamily: "inter",
    fontWeight: 400,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const register = (e) => {
    e.preventDefault();
    try {
      navigate("/Register");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSubmit = async (e) => {
    console.log("Making request...");
    e.preventDefault();
    try {
      // try to login user with the provided email and password
      const response = await axios({
        url: "https://yrgomeetup.onrender.com/login",
        method: "POST",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log("Request:", formData);
      console.log("Response:", response);
      console.log("Response status:", response.data);

      const token = response.data.token;

      localStorage.setItem("token", token);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      if (response.data.status === "success") {
        console.log("Login successful!");
        console.log(response.data);
        navigate("/UserDashboard");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  return (
    <>
      <section
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          /* background-color: aquamarine; */
        `}
      >
        <section
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            width: 100%;
            /* background-color: #b12424; */

            ${mq[2]} {
              flex-direction: column;
              /* justify-content: center; */
              /* align-items: flex-start; */
              /* margin: 2rem; */
            }
          `}
        >
          <section
            css={css`
              display: flex;
              justify-content: flex-start;
              align-items: center;
              width: 100%;
              /* background-color: #536f45; */

              ${mq[2]} {
                width: 720px;
              }
            `}
          >
            <div>
              <img src={backarrow} onClick={handleClickBack}></img>
            </div>
            <h2
              css={css`
                font-size: 36px;
                color: black;
                font-family: "inter";
                text-align: left;
                font-weight: 400;
                margin: 0;
                padding: 1rem 2rem;

                ${mq[2]} {
                  font-size: 60px;
                  font-weight: 300;
                  padding: 2rem 2rem;
                }
              `}
            >
              Logga In
            </h2>
          </section>
          <form
            onSubmit={handleSubmit}
            css={css`
              display: flex;
              flex-direction: column;
              /* background-color: #62c82b; */
              width: 100%;
              justify-content: center;
              /* gap: 8px; */

              padding: 2rem 2rem;
              ${mq[2]} {
                border: 1px solid #000000;
                padding: 2rem 2rem;
                width: 720px;
              }
            `}
          >
            <label htmlFor="email" style={label}>
              e-mail
            </label>
            <br />
            <input
              type="text"
              style={input}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />{" "}
            <br />
            <br />
            <label htmlFor="password" style={label}>
              Lösenord
            </label>
            <br />
            <input
              type="password"
              style={input}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="*****"
            />{" "}
            <br />
            <br />
            <RedButton text="Logga In" type="submit" />
            <br />
            <br />
            <RedButton text="Inte medlem? Skapa konto" onClick={register} />
          </form>
        </section>
      </section>
    </>
  );
}

export default LoginForm;
