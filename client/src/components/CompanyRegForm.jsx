import RedButton from "./RedButton";
import '../App.css'
import axios from "axios";
import { useState } from "react";



function CompanyRegForm() {

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

    const largeInput = {
        ...input,
        paddingBottom: '80px'
    }
    const header= {
        fontSize: '36px',
        color: 'black', 
        fontFamily: 'inter',
        fontWeight: 400,
        marginBottom: '50px'
    }


    const label = {
        fontSize: '16px',
        color: 'black', 
        fontFamily: 'inter',
    }

    const [formData, setFormData] = useState({
        companyName: '',
        description: '',
        contactName: '',
        webpage: ''
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
            const response = await axios.post('http://localhost:3000/visitors', formData);
            console.log(response.data);

            setFormData({
                companyName: '',
                description: '',
                contactName: '',
                webpage: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <>
        <h2 style={header}>Anmälningsformulär</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="" 
            style={label} >
            Företagsnamn</label><br />
            <input type="text" 
            style={input} 
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}     
            placeholder="Namn..." /> <br /><br />

            <label htmlFor="" 
            style={label}>
            Vilka är vi?</label><br />
            <input type="text" 
            style={largeInput}
            name="description"
            value={formData.description}
            onChange={handleChange}     
            placeholder="Text är..." 
            /><br /><br />

            <label htmlFor="" 
            style={label}>
            Kontaktperson</label><br />
            <input type="text" 
            style={input}
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}    
            placeholder="Namn..." /><br /><br />

            <label htmlFor="" 
            style={label}>
            Vad vi jobbar med</label><br />
            {/* <input type="text" 
            style={largeInput} 
            placeholder="Utveckling inom backend/frontend..." /><br /><br /> */}

            <label htmlFor="" 
            style={label}>
            Webbplats</label><br />
            <input type="text" 
            style={input}
            name="webpage"
            value={formData.webpage}
            onChange={handleChange}  
            placeholder="www." /><br /><br />
            
            <RedButton text="Submit" />
        </form>
        </>
    )
}

export default CompanyRegForm;