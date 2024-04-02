import RedButton from "./RedButton";
import '../App.css'
import React, { useState } from 'react';
import axios from "axios";


function LoginForm() {
    const input = {
        backgroundColor: '#828282',
        width: '310px',
        height: '36px',
        padding: '8px',

        fontSize: '16px',
        color: 'white',
        fontFamily: 'inter',

        border: 'none',
        borderRadius: '4px, 4px, 4px, 4px'
        
    }

    const header= {
        fontSize: '36px',
        color: 'black', 
        fontFamily: 'inter',
        fontWeight: 400,
    }

    const label = {
        fontSize: '16px',
        color: 'black', 
        fontFamily: 'inter',
    }
    const [formData, setFormData] = useState({
        email: '', 
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState, 
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', formData);
            console.log(response.data);

        }catch (error) {
            if (error.response && error.response.data.message === 'User not found') {
                console.error('Error: The user does not exist. Please check your email and try again.');
            } else {
                console.error('Error submitting form:', error.response.data);
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
    </form>
    </>
);
}
export default LoginForm;