import React, { useState, useEffect } from "react";
import axios from "axios";

function Visitors() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        const users = response.data[0];
        setUsers(users);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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

export default Visitors;
