import React from 'react'
import Navbar from '../components/Navbar';
import UserProfileInfo from '../components/UserProfileInfo';  
import RedButton from '../components/RedButton';
import ReturnButton from '../components/ReturnButton';
import SecondaryButton from '../components/SecondaryButton';
import { useEffect, useState } from 'react';
import axios from 'axios';

//user info page. later this will fetch the user's name, area etc from the database and display their info here

const UserCreateProfile= () => {

    const basicStyle = {
        fontFamily: "Inter",
        fontSize: "16px",
        fontWeight: 400,
        color: "black",
        textAlign: "center",
        marginLeft: "2rem",
        marginRight: "2rem",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
    }
    const style = {
    display: "flex", 
    flexDirection: "row",
    marginBottom: "60px",
    }
    const header = {
        fontSize: "33px", 
        fontWeight: 400,
        fontFamily: "inter",
        textAlign: "center",
        marginLeft: "2rem",  
        marginRight: "2rem", 

   }
/* useEffect(() => {
    const getSkills = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/getSkills');
        const data = response.data;
        setSkills(data);
    
    }
    }
}, []) */

    return (
<div>
<Navbar />
<h1 style={header}>Skapa Profil</h1>
<form action="" style={basicStyle}>
<p>Vilka kunskaper har du?</p>
<p>Jag vill synas för företagen</p>
<div style={style}>
<label htmlFor="Ja/nej">Ja</label>
<input type="radio" name='Ja/Nej' value="Ja"/>
<label htmlFor="Ja/Nej">Nej</label>
<input type="radio" name='Ja/Nej' value="Nej" />
</div>
<RedButton text="Färdigställ Profil" />
<SecondaryButton text="Logga ut" />
</form>


</div>
    )
}
export default UserCreateProfile;
