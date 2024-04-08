import RedButton from "./RedButton";
import "../App.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate }from "react-router-dom";


function LoginForm() {
    const navigate = useNavigate();
    const input = {
        backgroundColor: '#828282',
        width: '310px',
        height: '36px',
        padding: '8px',
        fontSize: '16px',
        color: 'white',
        fontFamily: 'inter',
        border: "none",
        borderRadius: "4px 4px 4px 4px",
    };

    const header = {
        fontSize: "36px",
        color: "black",
        fontFamily: "inter",
        fontWeight: 400,
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState, 
            [name]: value
        }));
    }

    const register = (e) => {
        e.preventDefault();
        try{
            navigate('/Register');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Making request...'); // This will log "Making request..." before the request is made
            const response = await axios.post( 'https://yrgomeetup.onrender.com/login', formData, { withCredentials: true });
            console.log('Response:', response); 
            console.log('Response status:', response.data); 

            const token = response.data.token;

            // Set the token in the request headers for subsequent requests
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            //if token exists, navigate to UserDashboard
            if(response.data.status === "success"){
              console.log("Login successful!")
              console.log(response.data);
              navigate('/UserDashboard'); 
            }
        }catch (error) {
            console.error('Error submitting form:', error);
            if (error.response && error.response.data.message === 'User not found') {
                console.error('Error: The user does not exist. Please check your email and try again.');
            } else {
                console.error('Error submitting form:', error.response);
            }
        }
    }

    return (
        <>
        <h2 style={header}>Logga In</h2>
        <form onSubmit={handleSubmit}>
                <label htmlFor="" style={label} >e-mail</label><br />
                <input type="text" 
                style={input} 
                name="email"
                value={formData.email}
                onChange={handleChange}     
                placeholder="example@email.com" /> <br /><br />

                <label htmlFor="" style={label}>Lösenord</label><br />
                <input type="password" 
                style={input} 
                name="password"
                value={formData.password}
                onChange={handleChange}     
                placeholder="*****" /> <br /><br />

        <RedButton text="Logga In" onClick={handleSubmit} />
        <br />
        <br />
        </form>
        <RedButton text="Inte medlem? Skapa konto" onClick={register} />

        </>
    );
}

export default LoginForm;