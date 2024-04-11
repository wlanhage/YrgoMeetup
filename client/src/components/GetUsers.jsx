import React, { useState, useEffect } from "react";
import axios from "axios";

function getUsers() {
  const [users, setUsers] = useState([]);




  useEffect(() => {
    const fetchUsers = async () => {
      try{
    const response = await axios({
      url: 'https://yrgomeetup.onrender.com/users',
      method: 'GET', 
      withCredentials: true, 
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      }
    });
        const users = response.data[0];
        setUsers(users);
      }catch(error) {
        console.error("Error:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h1>{user.name}</h1>
          <p>{user.company}</p>
        </div>
      ))}
    </div>
  );
}

export default getUsers;
