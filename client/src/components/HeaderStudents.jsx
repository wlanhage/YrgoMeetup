import { useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import leftArrow from '../assets/smallicons/leftarrow.svg';

function HeaderStudents ({setSelectedCategory, setFilteredStudents, students}) {



    const handleCategoryClick = (category) => {
        setSelectedCategory(category);

        const filtered = students.filter(student => {
            if (category === 'webbutvecklare') {
                return student.developer === 1;
            }
        })
        setFilteredStudents(filtered);
    };

    const header = {     
        display: "flex",  
        flexDirection: 'column',   
        alignItems: "center",
                 
        color: "white",      
        width: "100%",     
        height: "180px",     
        backgroundColor: "#F52A3B",   
    };    

    const headerUpper = {
        display: 'flex',
        flexDirection: 'row',
        width: '85%',
        marginTop: '60px',
        
    }

    const headerUpperText = {
        fontSize: '33px',
        fontFamily: 'inter'
    }

    const headerUpperIconContainer = {
        marginRight: '20px',
        marginTop: '8px'
    }

    const headerLower = {
        width: '85%',
        textAlign: 'start',
        fontFamily: 'inter',
        fontSize: '16px',
    }

    const programContainer = {
        width: '100%',
        height: '40px',
        backgroundColor: '#FFFFF',

        display: 'flex',
        flexDirection: 'row',
        

    }

    const programSquare = {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',

        fontFamily: 'inter',
        fontSize: '19px',
        
    }
    

    return (
        <>
            <div style={header}>
                <div style={headerUpper}>
                <Link to="/" >
                <div style={headerUpperIconContainer}>
                    <img src={leftArrow} alt="LeftArrow" />
                </div>
                </Link>
                    <div style={headerUpperText}>
                        Möt Studenterna
                    </div>
                </div>
                <div style={headerLower}>
                Se studenternas arbeten innan dess att eventet sker! 
                </div>
            </div>
            <div style={programContainer}>
                <div style={programSquare}>
                    Alla
                </div>
                <div style={programSquare}>
                    Digitala Designer
                </div>
                <div style={programSquare} onClick={() => handleCategoryClick('webbutvecklare')}>
                    Webbutvecklare
                </div>
            </div>
        
        </>

    )
}

export default HeaderStudents;