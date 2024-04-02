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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://yrgomeetup.onrender.com/students",
        formData
      );
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
        <label htmlFor="" style={label}>
          Lösenord
        </label>
        <br />
        <input
          type="text"
          style={input}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="*****"
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
        <RedButton text="Nästa" />
      </form>
    </>
  );
}
export default StudentRegForm;
