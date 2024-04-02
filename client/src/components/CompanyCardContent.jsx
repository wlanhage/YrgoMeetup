import React from 'react';
import CompanyCardDesign from "../pages/CompanyCardDesign";
import '../App.css';


function CompanyCardContent (props) {
    
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
        width: '100px',
        height: '100px',
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
        border: 'solid',
    }

    const text = {
        fontFamily: 'inter',

        border: '1px solid black',
        
        paddingLeft: '3px',

    }



    return (
        <div style={cardContainer}>
                <div style={cardContainerLeft}>
                    <div style={imageContainer}>

                    </div>
                    <div style={text}>Company name</div>
                    <div style={text}>Webpage.se</div>
                </div>
                <div style={cardContainerRight}>
                    <div style={text}>Kontaktperson</div>
                    <div style={text}>Mailadress@mail.se</div>
                    <div style={text}>Företaget gör ABC...</div>
                    <div style={text}>Något annat vi bör veta</div>
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