import RedButton from "./RedButton";
import "../App.css";
import axios from "axios";
import { useState } from "react";

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
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   maxWidth: "710px",
  //   padding: "2rem 8rem",
  //   backgroundColor: "#F2F2F2",
  // };


  // const regWrapper = {
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  // };


  };
  const form = {
    marginBottom: "24px",
  }


  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    developer: false,
    designer: false,
    email: "",
    linkedin: "",
    password: "",
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
      const response = await axios.post(
        "https://yrgomeetup.onrender.com/students",
        formData
      );    
      console.log('Response:', response); // Log the entire response
      if (response.status === 201) {
      navigate("/UserCreateProfile"); // Try navigating regardless of the response status
    } 
  }catch (error) {
      console.error("Error submitting form:", error);
      console.error("Error details:", error.response);
    }
  };

  const login = (e) => {
    e.preventDefault();
    try{
        navigate('/Login');
    } catch (error) {
        console.error('Error:', error);
    }
  }

  return (
    <>
      <header
        css={css`
          display: flex;
          padding: 1rem;
        `}
      >
        <img src="../assets/arrow_back.svg"></img>
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
          />{" "}
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
            Lösenord
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
          <label htmlFor="" style={label}>
            Phone
          </label>
          <input
            type="text"
            name="phone"
            style={input}
            value={formData.phone}
            onChange={handleChange}
            placeholder="phone"
          />
          <label htmlFor="" style={label}>
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
          {/* <div className="skillsWrapper">
            <label htmlFor="php" style={label}>
              PHP
            </label>
            <input
              type="checkbox"
              name="languages[]"
              style={input}
              value={3}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="csharp" style={label}>
              C#
            </label>
            <input
              type="checkbox"
              name="languages[]"
              style={input}
              value={4}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="html" style={label}>
              HTML
            </label>
            <input
              type="checkbox"
              name="languages[]"
              style={input}
              value={5}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="css" style={label}>
              CSS
            </label>
            <input
              type="checkbox"
              name="languages[]"
              style={input}
              value={6}
              onChange={handleChange}
            />
            <br />
            <br />
          </div> */}
          <RedButton text="Nästa" className="regButton" />
        </form>
      </section>

      <h2 style={header}>Skapa Konto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" style={label}>
          E-mail
        </label>
        <br />
        <input
          type="text"
          style={input}
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="namn@gmail.com"
          required
        />
        <br />
        <br />
        <label htmlFor="" style={label}>
          Förnamn
        </label>
        <br />
        <input
          type="text"
          style={input}
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="Förnamn"
          required
        />{" "}
        <br />
        <br />
        <label htmlFor="" style={label}>
          Efternamn
        </label>
        <br />
        <input
          type="text"
          style={input}
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Efternamn"
          required
        />
        <br />
        <br />
        <label htmlFor="" style={label}>
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
          required
        />
        <br />
        <br />
        <label htmlFor="" style={label}>
          Linkedin
        </label>
        <br />
        <input
          type="text"
          style={input}
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="linkedin"
        />
        <br />
        <br />
{/*         <p>Vilken inriktning går du?</p>
        <label htmlFor="developer">Webbutveckling</label>
        <input type="radio" name="developer" checked={formData.developer} onChange={handleChange}/>
        <label htmlFor="designer">Design</label>
        <input type="radio" name="designer" checked={formData.designer} onChange={handleChange}/> */}

        <RedButton style={{marginTop:"24px"}} text="Nästa" type="submit" />
      </form>
      <SecondaryButton text="Logga in" onClick={login}/>

    </>
  );
}
export default StudentRegForm;
