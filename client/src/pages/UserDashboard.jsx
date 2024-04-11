import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RedButton from "../components/RedButton";
import Cookies from "js-cookie";

function UserDashboard() {
  //if user is authorized, display user dashboard, else redirect to login page
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");

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
        setAuthorized(true);
        const userId = res.data.id;
        setUserId(userId);

        const userRes = await axios.post("https://yrgomeetup.onrender.com/getUserInformation", { user: userId }, { withCredentials: true });
        setUser(userRes.data);
      } else {
        navigate("/Login");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchUser();
}, []);



  //logout the user
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
    <div>
      {authorized ? (
        <div>
          <h1></h1>
          <p>
            Welcome {user.firstname} {user.lastname}
          </p>
          <RedButton text="Logga ut" onClick={handleLogout} />
        </div>
      ) : (
        <div>{/* <Login/> */}</div>
      )}
    </div>
  );
};
export default UserDashboard;   

