import RedButton from "./RedButton";
import "../App.css";
import axios from "axios";
import { useState } from "react";
import SecondaryButton from "./SecondaryButton";
import { useNavigate } from "react-router-dom";

function StudentRegForm() {
  const navigate = useNavigate();
  const input = {
    backgroundColor: "#ffffff",
    width: "310px",
    // height: "36px",
    padding: "8px",

    fontSize: "16px",
    color: "black",
    fontFamily: "inter",

    marginTop: "8px",

    border: "1px solid #000000",
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
    textAlign: "center",
    width: "320px",
  };

  const programWrapper = {
    display: "flex",

    justifyContent: "center",
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
