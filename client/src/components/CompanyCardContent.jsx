import React, { useEffect, useState } from 'react';
import CompanyCardDesign from "../pages/CompanyCardDesign";
import '../App.css';


function CompanyCardContent () {
    
    const cardContainer = {
        display: 'flex',
        textAlign: 'start',
        
        flexDirection: 'row',

        padding: '12px',

        fontSize: '12px',
    }

    const cardContainerLeft = {
        display: 'flex',
        gap: '19px',
        flexDirection: 'column',

    }

    const cardContainerRight = {
        display: 'flex',
        flexDirection: 'column',
        width: '172px',
        marginLeft: '10px',
        gap: '21.5px',
        
    }

    const imageContainer = {
        width: '110px',
        height: '110px',
        backgroundColor: 'gray',

    }

    const tagsArea = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    }

    const tag = {
        padding: '3px',
        margin: '2px',
        border: '0.5px solid',
    }

    const text = {
        fontFamily: 'inter',

        border: '0.7px solid black',
        
        paddingLeft: '3px',

    }

    const [submittedData, setSubmittedData] = useState({});

    useEffect(() => {
        // Retrieve formData from local storage
        const formData = localStorage.getItem('submittedFormData');
        if (formData) {
            setSubmittedData(JSON.parse(formData));
        }
      }, []);



    return (
        <div style={cardContainer}>
                <div style={cardContainerLeft}>
                    <div style={imageContainer}>

                    </div>
                    <div style={text}>{submittedData.company}</div>
                    <div style={text}>{submittedData.linkedin}</div>
                </div>
                <div style={cardContainerRight}>
                    <div style={text}>{submittedData.phone}</div>
                    <div style={text}>{submittedData.email}</div>
                    <div style={text}>{submittedData.textfield}</div>
                    <div style={text}>{submittedData.linkedin}</div>
                    <div style={tagsArea}>
                        <div style={tag}>Ett</div>
                        <div style={tag}>Två</div>
                        <div style={tag}>Tre</div>
                        <div style={tag}>Fyra</div>
                    </div>

                </div>
        </div>
    )
}

export default CompanyCardContent;