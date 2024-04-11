import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RedButton from "../components/RedButton";
/* import Cookies from "js-cookie"; */

function UserDashboard () {

//if user is authorized, display user dashboard, else redirect to login page
const [authorized, setAuthorized] = useState(false);
const navigate = useNavigate();
const [user, setUser] = useState('');
const [userId, setUserId] = useState('');

//verify the user
useEffect(() => {
        const token = Cookies.get('token');
        console.log(window.location.hostname);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.get("https://yrgomeetup.onrender.com/verifyUser", { withCredentials: true })
            .then((res) => {
                console.log('Response:', res);
                console.log('Response status:', res.data);
                if (res.data.status === "success") {
                    console.log("user is authorized", res.data);
                    setAuthorized(true);
                    setUserId(res.data.id);
                } else {
                    navigate("/Login");
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
}, []);

//get the user information
useEffect(() => {
    console.log("trying to get user information")
    if (userId){
        console.log("user id: ", userId)
        try{
            axios.post("https://yrgomeetup.onrender.com/getUserInformation",{user:userId}, { withCredentials: true })
            .then((res) => {
            console.log(res.data);
            setUser(res.data);
            console.log("user info fetched: ", user);
           
        })
    } catch(error) {
            console.error("Error fetching data:", error);
            
        };
    } else {
        navigate("/Login");
    }
    }, [userId]);


//logout the user
    const handleLogout = async (e) => {
        console.log("logging out")
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
    return (
    <div>
        {authorized ? 
            <div>
            <h1></h1>
            <p>Welcome {user.firstname} {user.lastname}</p>
            <RedButton text="Logga ut" onClick={handleLogout} />
          </div>
         :
         <div>
          {/* <Login/> */} 
          </div>
        }
    </div>
  );
};
export default UserDashboard;   
