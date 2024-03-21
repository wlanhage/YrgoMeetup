import React, { useState, useEffect } from "react";
import axios from "axios";

function Visitors() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/visitors")
      .then((response) => {
        setVisitors(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      {visitors.map((visitor, index) => (
        <div key={index}>
          <h1>{visitor.name}</h1>
          <p>{visitor.company}</p>
        </div>
      ))}
    </div>
  );
}

export default Visitors;
