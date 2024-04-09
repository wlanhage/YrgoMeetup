import React, { useEffect, useState } from 'react';
import '../App.css';
import icon4 from "../assets/icon4.svg"

import RedButton from "./RedButton";


function CompanyCardContent ({ designData = {}, icon }) {
    if (!designData.icon) {
        designData.icon = icon;
    }
    
    
    const cardsWrapper = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "24px",
        
      };
    
      const companyInfo = {
        width: "50%",
        textAlign: "left",

        fontFamily: 'inter',

      };
    
      const wrapper = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "110px",
        gap: "20px",
        marginTop: '40px',
      };

    const [submittedData, setSubmittedData] = useState({});

    useEffect(() => {
        // Retrieve formData from local storage
        const formData = localStorage.getItem('submittedFormData');
        if (formData) {
            setSubmittedData(JSON.parse(formData));
        }
      }, []);



    return (
        
        <section style={cardsWrapper}>
            <div style={wrapper}>
            <img src={designData.icon} />
              <div style={companyInfo}>
                <p style={{ margin: "6px" }}>{submittedData.company}</p>
                <p style={{ margin: "6px" }}>{submittedData.email}</p>
                <p style={{ margin: "6px" }}>{submittedData.phone}</p>
                <p style={{ width: "50px", margin: "6px" }}> </p>
                <a href={submittedData.linkedin}><RedButton 
                  text={"Ta reda på mer"}
                  style={{
                    width: "100%",
                    padding: "5px",
                    height: "auto",
                  }}
                /> </a>
              </div>
            </div>
      </section>
    )
}

export default CompanyCardContent;