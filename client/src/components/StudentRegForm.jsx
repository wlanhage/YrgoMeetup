import RedButton from "./RedButton";
import "../App.css";
import axios from "axios";
import { useState } from "react";

function StudentRegForm() {
  const input = {
    backgroundColor: "#828282",
    width: "310px",
    height: "36px",
    padding: "8px",

    fontSize: "16px",
    color: "white",
    fontFamily: "inter",

    border: "none",
    borderRadius: "4px, 4px, 4px, 4px",
  };

  const largeInput = {
    ...input,
    paddingBottom: "80px",
  };

  const header = {
    fontSize: "36px",
    color: "black",
    fontFamily: "inter",
    fontWeight: 400,
  };

  const label = {
    fontSize: "16px",
    color: "black",
    fontFamily: "inter",
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    program: "",
    developer: false,
    designer: false,
    email: "",
    phone: "",
    linkedin: "",
    textfield: "",
    password: "",
  });

  const [languageData, setLanguageData] = useState({
    studentId: "",
    languageId: "",
  });

  const handleChange = (e) => {
    const { name, type, checked } = e.target;
    let value = e.target.value;

    if (type === "checkbox") {
      value = checked;
      if (name === "languages[]") {
        setLanguageData((prevState) => {
          if (checked) {
            return {
              ...prevState,
              languageId: e.target.value,
            };
          } else {
            return prevState.filter((id) => id !== value);
          }
        });
        return;
      }
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // Validate first name, last name, email, password, and text field
    console.log(formData);
    console.log(languageData);
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

    //temporary max length for text field
    if (
      typeof formData.textfield !== "string" ||
      formData.textfield.length > 250
    ) {
      alert("Invalid text field");
      return;
    }
    if (
      typeof formData.phone !== "string" ||
      (formData.phone.length !== 0 && formData.phone.length !== 10) ||
      !formData.phone.startsWith("07")
    ) {
      alert("Invalid phone number");
      return;
    }
    if (typeof formData.linkedin !== "string") {
      alert("Invalid linkedin-url");
      return;
    }
    if (
      typeof formData.developer !== "boolean" ||
      typeof formData.designer !== "boolean"
    ) {
      alert("Invalid developer or designer");
      return;
    }

    try {
      const response = await axios.post(
        "https://yrgomeetup.onrender.com/students",
        formData
      );
      if (response.status === 200) {
        const studentId = response.data.insertId; // Get studentId from response
        for (const languageId of languageData) {
          await axios.post(
            "https://yrgomeetup.onrender.com/student_languages",
            {
              studentId,
              languageId,
            }
          );
        }
      } else {
        // Handle error...
      }
      console.log(response.data);
      setFormData({
        firstname: "",
        lastname: "",
        developer: false,
        designer: false,
        email: "",
        phone: "",
        linkedin: "",
        textfield: "",
        password: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <h2 style={header}>Skapa Konto</h2>
      <form onSubmit={handleSubmit}>
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
          Phone
        </label>
        <br />
        <input
          type="text"
          style={input}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="phone"
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
        <label htmlFor="" style={label}>
          Övrigt
        </label>
        <br />
        <input
          type="text"
          style={largeInput}
          name="textfield"
          value={formData.textfield}
          onChange={handleChange}
          placeholder="övrigt..."
        />
        <br />
        <br />
        <label htmlFor="developer" style={label}>
          Webbutvecklare
        </label>
        <input
          type="checkbox"
          name="developer"
          style={input}
          checked={formData.developer}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="designer" style={label}>
          Digital designer
        </label>
        <input
          type="checkbox"
          name="designer"
          style={input}
          checked={formData.designer}
          onChange={handleChange}
        />
        <br />
        <br />
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
        <RedButton text="Nästa" />
      </form>
    </>
  );
}
export default StudentRegForm;
