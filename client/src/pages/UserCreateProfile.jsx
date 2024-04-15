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
import { useNavigate } from "react-router-dom";
import CompanyRegProgBar from "../components/CompanyRegProgBar";

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

  const header = {
    fontSize: "33px",
    fontWeight: 400,
    fontFamily: "inter",
    textAlign: "center",
    marginLeft: "2rem",
    marginRight: "2rem",
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

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, type, checked } = e.target;
    let value = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState({
    linkedin: "",
    portfolio: "",
  });

  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get(
          "https://yrgomeetup.onrender.com/languages"
        );
        setLanguages(response.data[0]); // The languages are in the first array in the response data
        console.log("Languages:", response.data[0]);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    fetchLanguages();
  }, []);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      languages: prevState.languages.includes(value)
        ? prevState.languages.filter((language) => language !== value)
        : [...prevState.languages, value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      // Fetch the latest student ID
      const responseLatest = await axios.get({
        url: "https://yrgomeetup.onrender.com/students/latest",
        withCredentials: true,
      });
      const latestStudentId = responseLatest.data[0].id;
      console.log("Latest student ID:", latestStudentId);

      // Update the student's data
      const response = await axios({
        url: `https://yrgomeetup.onrender.com/students/${latestStudentId}`,
        method: "PUT",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const studentId = localStorage.setItem("insertId", insertId);
      formData.languages.forEach(async (languageId) => {
        await axios.post("/student_languages", {
          student_id: studentId,
          language_id: languageId,
        });
      });
      navigate("Skills");
      console.log("Response:", response); // Log the entire response
      console.log("Data:", response.data); // Log the data from the response
      navigate("/Skills");
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("Error details:", error.response);
    }
    navigate("/Skills");
  };

  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  return (
    <div>
      <Navbar />
      <h1 style={header}>Skapa Profil</h1>
      <form action="" style={basicStyle} onSubmit={handleSubmit}>
        <CompanyRegProgBar
          number={"2"}
          redBarWidth={"220px"}
          grayBarWidth={"110px"}
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

        <div
          css={css`
            margin-bottom: 1rem;
          `}
        >
          <RedButton text="Nästa steg" onClick={handleSubmit} />
        </div>
        <div>
          <SecondaryButton text="Logga ut" />
        </div>
      </form>
    </div>
  );
};
export default UserCreateProfile;
