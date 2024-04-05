import React, { useState, useEffect } from "react";
import axios from "axios";

function CompanysPage() {
  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://yrgomeetup.onrender.com/companys"
        );
        console.log(response.data[0]);
        setCompanyData(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  //   console.log(companyData);
  return (
    <div>
      <h1>Company Information</h1>
      {companyData.map((company, index) => (
        <div key={index}>
          <h2>{company.company}</h2>
          <p>Email: {company.email}</p>
          <p>Phone: {company.phone}</p>
          <p>LinkedIn: {company.linkedin}</p>
        </div>
      ))}
    </div>
  );
}

export default CompanysPage;
