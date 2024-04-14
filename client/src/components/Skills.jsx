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

  return (
    <>
      <div>
        <h1>Hello, world!</h1>
      </div>

      <form>
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
                id={`language-${language.id}`}
                name="language"
                value={language.id}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={`language-${language.id}`}>{language.name}</label>
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
    </>
  );
}

export default Skills;
