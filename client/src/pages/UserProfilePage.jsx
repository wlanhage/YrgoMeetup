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
        const verifyUser = async () => {
            try {
                const response = await axios.get("https://yrgomeetup.onrender.com/verifyUser", { withCredentials: true });
                if (response.data.status === "success") {
                    setAuthorized(true);
                    setUserId(response.data.id);
                } else {
                    navigate("/Login");
                }
            } catch (error) {
                console.error("Error verifying user:", error);
                // Handle error appropriately (e.g., redirect to error page)
            }
        };
    
        verifyUser();
    }, []);
    
    useEffect(() => {
        if (authorized) {
            const fetchUserInformation = async () => {
                try {
                    const userResponse = await axios.post("https://yrgomeetup.onrender.com/getUserInformation", { user: userId }, { withCredentials: true });
                    setUser(userResponse.data);
                } catch (error) {
                    console.error("Error fetching user information:", error);
                    // Handle error appropriately
                }
            };
    
            const fetchUserSkills = async () => {
                try {
                    const skillsResponse = await axios.post("https://yrgomeetup.onrender.com/getUserSkills", { user: userId }, { withCredentials: true });
                    setSoftwares(skillsResponse.data.softwares);
                    setLanguages(skillsResponse.data.languages);
                } catch (error) {
                    console.error("Error fetching user skills:", error);
                    // Handle error appropriately
                }
            };
    
            fetchUserInformation();
            fetchUserSkills();
        }
    }, [userId, authorized]);
    

    //logout the user
        const handleLogout = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.get("https://yrgomeetup.onrender.com/logout", { withCredentials: true });
                if (response.data.message === "success") {
                    location.reload("true")
                }
            }catch(error){
                console.error('Error:', error);
            }
        }
        if (user.developer === 1) {
            skills = "Webbutveckling";
        }
        if (user.designer === 1) {
            skills = "Design";
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