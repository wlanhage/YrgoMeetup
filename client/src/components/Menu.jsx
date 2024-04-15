import "../App.css";
import menu from "../assets/menu.svg";
import profilebig from "../assets/profilebig.svg";
import profilesmall from "../assets/profilesmall.svg";
import link from "../assets/link.svg";
import heart from "../assets/heart.svg";
import logout from "../assets/logout.svg";
import chevron from "../assets/chevron_right.svg";
import menublack from "../assets/menu_black.svg";
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const header = {
  display: "flex",
  justifyContent: "flex-end",
  height: "5%",
  position: 'absolute',
  top: '2rem',
  right: '2rem',
  zIndex: 1,
};
const student = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "16px",
  marginTop: '80px',
  textAlign: 'left',


  height: "25%",
  backgroundColor: "white",
};
const options = {
  display: "flex",
  flexDirection: "column",

  height: "70%",
  //   backgroundColor: "blue",
};

const option = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "10%",
  width: "100%",
  backgroundColor: "white",

  //   padding: "0 10px",
};


const h2 = {
  fontSize: "20px",
  marginBottom: "0px",
  marginLeft:'5px'
};

const breakpoints = [576, 768, 900, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

function Menu() {


  const navigate = useNavigate();

  
let [user, setUser] = useState("");
let [userId, setUserId] = useState("");

//verify the user
useEffect(() => {
const fetchUser = async () => {
  const token = localStorage.getItem('token'); 
  console.log("token is:",token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  try {
    const res = await axios({
      url: "https://yrgomeetup.onrender.com/verifyUser",
      method: 'GET',
      withCredentials: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': '/json',
        'Authorization': 'Bearer ' + token 
      }
    }); 

    if (res.data.status === "success") {
      userId = res.data.id;
      console.log("userId is:", userId);
      setUserId(userId);

      const userRes = await axios.post("https://yrgomeetup.onrender.com/getUserInformation", { user: userId }, { withCredentials: true });
      setUser(userRes.data);
    } else {
      navigate("/Login");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    navigate("/Login");
  }
};

fetchUser();
}, []); 
  const navigateToProfile = () => {
  console.log("Navigating to profile")
  navigate("/userProfilePage")
  };
const [menuOpen, setMenuOpen] = useState(false);
const handleLogout = async (e) => {
  console.log("logging out")
  e.preventDefault();
  try {
      const response = await axios.get("https://yrgomeetup.onrender.com/logout", { withCredentials: true });

          localStorage.removeItem('token');
          if (response.data.message === "success") {
          location.reload("true")
      }
  }catch(error){
      console.error('Error:', error);
  }
}

  return (
    <>
    <div>
           <section style={header}>
          <img src={menublack} onClick={() => setMenuOpen((prev) => !prev) }></img>
        </section>
      <div
        css={
          menuOpen ? css`
          position: absolute;
          right: 0;
          top: 0;
          height: 100vh;
          width: 45%;

          font-family: "inter";
          font-weight: 400;
          font-size: 16px;

          padding: 32px 32px;

          background-color: white;

          border: 1px solid #e5e5e5;

          ${mq[2]} {
            width: 35%;
          }
        ` : css` display: none; `}
      >
        <div style={menuOpen ? {'display':'block' } : {'display': "none"}} >
        <section style={{...student,  borderTop: '2px solid #F52A3B'}}>
          <p style={h2}>{user.firstname} {user.lastname}</p>
          <p style={{ margin: "5px" }}>
           {user.developer === 1 ? "Webbutvecklare" : "Digital Designer"}
          </p>
        </section>
        <section style={options} >
          <div style={option} onClick={navigateToProfile}>
            <div style={{ display: "flex", gap: "15px"}}>
              <img src={profilesmall}></img>
              <p>Min profil</p>
            </div>
            <div>
              <img src={chevron}></img>
            </div>
          </div>

          <div style={option}>
            <div style={{ display: "flex", gap: "15px" }}>
              <img src={heart}></img>

              <p>Mina likes</p>
            </div>
            <div>
              <img src={chevron}></img>
            </div>
          </div>

          <div style={option}>
            <div style={{ display: "flex", gap: "15px" }}>
              <img src={link}></img>
              <p>Länkade konton</p>
            </div>
            <div>
              <img src={chevron}></img>
            </div>
          </div>

          <div style={{...option, position: "fixed", bottom: 0,}}  onClick={handleLogout}>
            <div style={{ display: "flex"}}>
              <img src={logout}></img>
              <p>Logga ut</p>
            </div>
            <div>
              <img src={chevron}></img>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
    </>
  );
}

export default Menu;
