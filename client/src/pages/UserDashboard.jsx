import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RedButton from "../components/RedButton";
import Menu from "../components/Menu";
import ReturnButton from "../components/ReturnButton";


function UserDashboard() {
  //if user is authorized, display user dashboard, else redirect to login page
  const [authorized, setAuthorized] = useState(false); 
  const navigate = useNavigate();
  const [user, setUser] = useState("");
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
        setAuthorized(true);
        userId = res.data.id;
        setUserId(userId);


        const userRes = await axios({
          url: 'https://yrgomeetup.onrender.com/getUserInformation',
          method: 'POST', 
          data: { user: userId },
          withCredentials: true, 
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
      });
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
          <div>
                   {/*  //return button */}
                <div onClick={() => navigate('/')}>
                <ReturnButton />
                </div> 
                {/* settings button */}
                </div>
                <Menu />
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

