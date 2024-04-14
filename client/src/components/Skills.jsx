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

function Skills() {
  const handleChange = (e) => {
    const { name, type, checked } = e.target;
    let value = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;

    setSelectedLanguages((prevLanguages) => {
      if (prevLanguages.includes(value)) {
        // If the language is already selected, unselect it
        return prevLanguages.filter((language) => language !== value);
      } else {
        // If the language is not selected, select it
        return [...prevLanguages, value];
      }
    });
  };

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

  const [currentStudentId, setCurrentStudentId] = useState(null);

  useEffect(() => {
    const fetchLatestStudentId = async () => {
      try {
        const response = await axios.get(
          "https://yrgomeetup.onrender.com/students/latest"
        );
        setCurrentStudentId(response.data[0].id);
      } catch (error) {
        console.error("Error fetching latest student ID:", error);
      }
    };

    fetchLatestStudentId();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Assuming `selectedLanguages` is an array of selected language IDs
    for (const languageId of selectedLanguages) {
      try {
        await axios.post("https://yrgomeetup.onrender.com/student_languages", {
          student_id: currentStudentId, // Replace with the current student's ID
          language_id: languageId,
        });
      } catch (error) {
        console.error(`Error posting language ${languageId}:`, error);
      }
    }

    // Continue with any other form submission logic...
  };

  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  return (
    <>
      <Navbar />
      <section
        css={css`
          font-family: "Inter", sans-serif;
          font-weight: 400;
          font-size: 20px;

          display: flex;
          flex-direction: column;
          padding: 2rem 2rem;
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
            margin: 1rem;

            ${mq[2]} {
              font-size: 60px;
              font-weight: 300;
            }
          `}
        >
          Välj språk
        </h2>
        <form>
          <section
            css={css`
              display: flex;
              justify-content: flex-start;
              align-items: left;
              flex-wrap: wrap;
              width: 100%;
              margin: 0 0 2rem 0;
              /* background-color: #ae6363; */
            `}
          >
            {languages.map((language) => (
              <div
                key={language.id}
                css={css`
                  padding: 1rem;
                `}
              >
                <input
                  type="checkbox"
                  id={`language-${language.id}`}
                  name="language"
                  value={language.id}
                  onChange={handleCheckboxChange}
                  css={css`
                    margin-right: 0.5rem;
                  `}
                />
                <label htmlFor={`language-${language.id}`}>
                  {language.name}
                </label>
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
        </form>
      </section>
    </>
  );
}

export default Skills;
