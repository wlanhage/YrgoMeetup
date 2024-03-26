import RedButton from "./RedButton";
import "../App.css";
import axios from "axios";
import { useState } from "react";

function CompanyRegForm() {
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
    marginBottom: "50px",
  };

  const label = {
    fontSize: "16px",
    color: "black",
    fontFamily: "inter",
  };

  const [formData, setFormData] = useState({
    companyName: "",
    description: "",
    contactName: "",
    webpage: "",
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
        "http://localhost:3000/companys",
        formData
      );
      console.log(response.data);

      setFormData({
        company: "",
        email: "",
        phone: "",
        linkedin: "",
        textfield: "",
        web: false,
        design: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <h2 style={header}>Anmälningsformulär</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" style={label}>
          Företagsnamn
        </label>
        <br />
        <input
          type="text"
          style={input}
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="company..."
        />{" "}
        <br />
        <br />
        <label htmlFor="" style={label}>
          Vilka är vi?
        </label>
        <br />
        <input
          type="text"
          style={largeInput}
          name="textfield"
          value={formData.textfield}
          onChange={handleChange}
          placeholder="Text är..."
        />
        <br />
        <br />
        <label htmlFor="" style={label}>
          Phone
        </label>
        <br />
        <input
          type="text"
          style={largeInput}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="phone..."
        />
        <br />
        <br />
        <label htmlFor="" style={label}>
          Email
        </label>
        <br />
        <input
          type="text"
          style={input}
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email..."
        />
        <br />
        <br />
        <label htmlFor="" style={label}>
          Vad vi jobbar med
        </label>
        <br />
        {/* <input type="text" 
            style={largeInput} 
            placeholder="Utveckling inom backend/frontend..." /><br /><br /> */}
        <label htmlFor="" style={label}>
          Webbplats
        </label>
        <br />
        <input
          type="text"
          style={input}
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="www."
        />
        <br />
        <br />
        <label htmlFor="web" style={label}>
          Web
        </label>
        <br />
        <input
          type="checkbox"
          name="web"
          checked={formData.web}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="design" style={label}>
          Design
        </label>
        <br />
        <input
          type="checkbox"
          name="design"
          checked={formData.design}
          onChange={handleChange}
        />
        <br />
        <br />
        <RedButton text="Submit" />
      </form>
    </>
  );
}

export default CompanyRegForm;
