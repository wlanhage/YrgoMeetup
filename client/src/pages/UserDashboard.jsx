import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import Login from "./Login";

function UserDashboard () {

//if user is authorized, display user dashboard, else redirect to login page
const [authorized, setAuthorized] = useState(false);
const navigate = useNavigate();
const [user, setUser] = useState('');
const [userId, setUserId] = useState('');


useEffect(() => {
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
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}, []);

useEffect(() => {
    if (userId){
    axios.post("http://localhost:8080/getUserInformation",{user:userId}, { withCredentials: true })
        .then((res) => {
            console.log(res.data);
            setUser(res.data);
           
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }
    }, [userId]);

    return (
    <div>
        {authorized ? 
            <div>
            <h1></h1>
            <p>Welcome {user.firstname} {user.lastname}</p>
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
