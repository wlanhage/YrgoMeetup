import React, { useEffect, useState } from 'react';
import RedButton from '../components/RedButton';
import axios from 'axios';
import { useNavigate, useNavigationType } from 'react-router-dom';
import ReturnButton from '../components/ReturnButton';
import SettingsButton from '../components/SettingsButton';
import ProfilePicture from '../components/ProfilePicture';
import SkillsButton from '../components/SkillButton';
import UserLinkedAccounts from '../components/UserLinkedAccounts';
import SecondaryButton from '../components/SecondaryButton';
import LinkIcon from '../components/LinkIcon';

function UserProfilePage () {
     
         const header = {            
            /* Yrgo/Headline/H4-reg 34px */
            fontFamily: "Inter",
            fontSize: "34px",
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

         }
         const skillsGrid = {
            display:'grid',
            gap: '17px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 0.5fr))',
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
                    console.log(userId);
                    const userResponse = await axios({
                        url: 'https://yrgomeetup.onrender.com/getUserInformation',
                        method: 'POST', 
                        data:{ user: userId},
                        withCredentials: true, 
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },
                    });
                    setUser(userResponse.data);
                } catch (error) {
                    console.error("Error fetching user information:", error);
                    // Handle error appropriately
                }
            };      
    
            const fetchUserSkills = async () => {
                try {

                    const skillsResponse = await axios({
                        url: 'https://yrgomeetup.onrender.com/getUserSkills',
                        method: 'POST', 
                        data: { user: userId},
                        withCredentials: true, 
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },
                    });
                    if (skillsResponse.data.softwares ){
                    setSoftwares(skillsResponse.data.softwares);
                    console.log(skillsResponse.data.softwares);
                    } else {
                        console.log("no skills found")
                    }
                    if (skillsResponse.data.languages) {
                    setLanguages(skillsResponse.data.languages);
                    console.log(skillsResponse.data.languages);
                } else {
                    console.log("No skills found");
                }
                } catch (error) {
                    console.error("Error fetching user skills:", error);
                    // Handle error appropriately
                }
            };
    
            fetchUserInformation(userId);
            fetchUserSkills(userId);
        }
    }, [userId, authorized]);
                
        const editProfile = async (e) => {
            e.preventDefault();
            navigate("/EditProfile"); //soemthing like this
        }
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

        console.log(user);

        
    return (
    <div>
        {authorized ? 
            <div style={{textAlign: 'left', marginLeft: '2rem', marginRight: '2rem'}}>
                <div style={{...navButtons,  borderBottom: '2px solid #F52A3B', fontFamily: 'Inter', fontSize: '24px'}}>
                   {/*  //return button */}
                   <div onClick={ () => navigate(-1)}>
                <ReturnButton  />
                </div>
                <p>STUDENTKONTO</p>
                {/* settings button */}
                <SettingsButton />
                </div>
                <h1 style={header} >{user.firstname} {user.lastname}</h1>
                <p style={description}> {"Digital Developer"}</p>
                <h2 style={paragraph}> Länkade Konton</h2>
                <div style={{display: 'flex', flexDirection: 'row', width:'100%', alignItems: 'center'}}>
                    <LinkIcon />
                    <UserLinkedAccounts link="testTest" />
                </div>
                <h2 style={paragraph}>Kunskaper</h2>
                {softwares ? 
                <div style={skillsGrid}>
                    {softwares && softwares.map(software =>
                        <SkillsButton key={software.id} text={software.name}/> ) }
                </div>
                  : null  }
                  { languages ?
                    <div style={skillsGrid}>
                    {languages && languages.map(language =>
                        <SkillsButton key={language.id} text={language.name}/> )}
                    </div>
                    : null }
                {/* //log out button */}
                <SecondaryButton text="Hantera Lösenord" onClick={editProfile} />
                <br />
                <br />
                <SecondaryButton text="Logga ut" onClick={handleLogout} />
   
            </div>
           
            : 
            <h1></h1>
            }
     </div>
    );
};
export default UserProfilePage;