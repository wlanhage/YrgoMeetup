import React, { useEffect, useState } from 'react';
import RedButton from '../components/RedButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReturnButton from '../components/ReturnButton';
import SettingsButton from '../components/SettingsButton';
import ProfilePicture from '../components/ProfilePicture';
import SkillsButton from '../components/SkillButton';
import UserLinkedAccounts from '../components/UserLinkedAccounts';

function UserProfilePage () {
     
         const header = {            
            /* Yrgo/Headline/H4-reg 34px */
            fontFamily: "Inter",
            fontSize: "33px",
            fontWeight: 400,
            color: "black",
         }
         const navButtons = {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",   
            marginLeft: "2rem",
            marginRight: "2rem",
            marginBottom: "1.5rem",
            }
     
        const description = {
            fontFamily: "Inter",
            fontSize: "20px",
        }
         const paragraph = {
             fontSize: '16px',
             color: 'black', 
             fontFamily: 'inter',
             fontWeight: 400,
             textAlign: 'left',
             marginLeft: '2rem',
         }
         const skillsGrid = {
            display:'grid',
            gap: '17px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 0.5fr))',
            marginLeft: '2rem',
            marginRight: '2rem',
            marginBottom: '1.5rem',
         }

    const [authorized, setAuthorized] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');
    const [softwares, setSoftwares] = useState([]);
    const [languages, setLanguages] = useState([]);
    let skills = "";

useEffect(() => {
    try{
    axios.get("http://localhost:8080/verifyUser", { withCredentials: true })
        .then((res) => {
            console.log(res.data);
            if (res.data.status === "success") {
                setAuthorized(true);
                setUserId(res.data.id);
            } else {
                navigate("/Login");
            }
        })
    } catch (error) {
            console.error("Error fetching data:", error);
        };
    },
 []);
    useEffect(() => {
        if (authorized){
            try{
        axios.post("http://localhost:8080/getUserInformation",{user:userId}, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
        } catch(error) {
                console.error("Error fetching data:", error);
            };
            try{
                axios.post("http://localhost:8080/getUserSkills",{user:userId}, { withCredentials: true })
                    .then((res) => {
                        console.log(res.data); 
                        setSoftwares(res.data.softwares);
                        setLanguages(res.data.languages);
                        {console.log(softwares)}
                        {console.log(languages)}
                    })
                } catch(error) {
                        console.error("Error fetching data:", error);
                    };
                }
                }, [userId]);

    //logout the user
        const handleLogout = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.get("http://localhost:8080/logout", { withCredentials: true });
                if (response.data.message === "success") {
                    location.reload("true")
                }
            }catch(error){
                console.error('Error:', error);
            }
        }
        if (user.developer === 1) {
            skills = "webbutveckling";
        }
        if (user.designer === 1) {
            skills = "webbdesign";
        }
        
    return (
    <div>
        {authorized ? 
            <div>
                <div style={navButtons}>
                   {/*  //return button */}
                <ReturnButton />
                {/* settings button */}
                <SettingsButton />
                </div>
                <ProfilePicture />
                <h1 style={header} >{user.firstname} {user.lastname}</h1>
                <p style={description}>Studerar {skills}</p>

                <h2 style={paragraph}>Kunskaper</h2>
                <div style={skillsGrid}>
                    {softwares && softwares.map(software =>
                        <SkillsButton key={software.id} text={software.name}/> )}
                    {languages && languages.map(language =>
                        <SkillsButton key={language.id} text={language.name}/> )}
                </div>
                <h2 style={paragraph}> Länkade Konton</h2>
                <UserLinkedAccounts text="Linkedin" link="testTest" />
                <UserLinkedAccounts text="Linkedin" link="testTest" />

                {/* //log out button */}
                <RedButton text="Logga ut" onClick={handleLogout} />
   
            </div>
           
            : 
            <h1></h1>
            }
     </div>
    );
};
export default UserProfilePage;