import React, { useEffect, useState } from "react";

const VisitorsList = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetch("/visitors")
      .then((response) => response.json())
      .then((data) => setVisitors(data));
  }, []);

  return (
    <div>
      {visitors.map((visitor) => (
        <div key={visitor.id}>{visitor.name}</div>
      ))}
    </div>
  );
};

export default VisitorsList;
