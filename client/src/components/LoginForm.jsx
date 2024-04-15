import RedButton from "./RedButton";
import "../App.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { ClassNames, css } from "@emotion/react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "karlsson@email.com",
    password: "123ABCabc",
  });
  const navigate = useNavigate();
  const breakpoints = [576, 768, 900, 1200];
  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
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
        console.log('Making request...');
        e.preventDefault();
        try {
           // try to login user with the provided email and password
            const response = await axios({
                url: 'https://yrgomeetup.onrender.com/login',
                method: 'POST', 
                data: formData,
                withCredentials: true, 
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            console.log('Request:', formData);
            console.log('Response:', response); 
            console.log('Response status:', response.data); 
    
            const token = response.data.token;

            localStorage.setItem('token', token);
    
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
            if(response.data.status === "success"){
                console.log("Login successful!")
                console.log(response.data);
                navigate('/UserDashboard'); 
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

  return (
    <>
      <section
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;

          ${mq[2]} {
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-start;
            margin: 2rem;
          }
        `}
      >
        <h2 style={header}>Logga In</h2>
        <form onSubmit={handleSubmit}>
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
        </form>
        <RedButton text="Inte medlem? Skapa konto" onClick={register} />
      </section>
    </>
  );
}

export default LoginForm;
