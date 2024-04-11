import RedButton from "./RedButton";
import "../App.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate }from "react-router-dom";


function LoginForm() {
    const [formData, setFormData] = useState({
        email: 'karlsson@email.com',
        password: '123ABCabc'
    });
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
    const label = {
        fontSize: "16px",
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
        <h2 style={header}>Logga In</h2>
        <form onSubmit={handleSubmit}>
                <label htmlFor="email" style={label} >e-mail</label><br />
                <input type="text" 
                style={input} 
                name="email"
                value={formData.email}
                onChange={handleChange}     
                placeholder="example@email.com" /> <br /><br />

                <label htmlFor="password" style={label}>Lösenord</label><br />
                <input type="password" 
                style={input} 
                name="password"
                value={formData.password}
                onChange={handleChange}     
                placeholder="*****" /> <br /><br />

        <RedButton text="Logga In" type="submit" />
        <br />
        <br />
        </form>
        <RedButton text="Inte medlem? Skapa konto" onClick={register} />

        </>
    );
}

export default LoginForm;