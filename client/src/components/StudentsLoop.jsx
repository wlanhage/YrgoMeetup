import "../App.css";
import axios from 'axios';
import { useState, useEffect } from "react";


function StudentsLoop ({selectedCategory, filteredStudents}) {
    const [studentData, setStudentData] = useState([]);
    useEffect(() => { 
        const fetchData = async () => { 
            try { const response = await axios.get(
                "https://yrgomeetup.onrender.com/students" 
                ); 
                console.log(response.data[0]); 
                setStudentData(response.data[0]); 
            } catch (error) {  
                console.error(error); 
            }}; 
            fetchData(); 
        }, []);


        const container = {
            width: '320px',
            height: '140px',
            paddingTop: '24px',
            paddingBottom: '24px',
            paddingLeft: '20px',
            paddingRight: '20px',

            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '17px',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',

            backgroundColor: '#E4E9EB'
        }

        const containerUpper = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }

        const containerUpperLeft = {
            display: 'flex',
            flexDirection: 'column'
        }

        const containerUpperRight = {
            display: 'flex',
            flexDirection: 'column',
            
        }

        const containerLower = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            
        }

        const skillBoxes = {
            border: 'solid 2px',
            borderRadius: '20px',
            padding: '6px',
        }

        const nameText = {
            fontFamily: 'inter',
            fontSize: '30px',
            textAlign: 'start',
            maxWidth: '250px'
        }

        const smallText = {
            fontFamily: 'inter',
            fontSize: '18',
        }

        const linkStyle = {
            textDecoration: 'none',
            color: 'inherit',
        }

    return (
        <>{studentData.map((student, index) => (
        <div key={student.id} style={container}>
            <div style={containerUpper}>
                <div style={containerUpperLeft}>
                    <div key={index} style={nameText}>{student.firstname} {student.lastname}</div>
                    <div style={{...smallText, textAlign: 'start' }}>Program</div>
                </div>
                <div style={containerUpperRight}>
                        <a href={student.linkedin} style={{...smallText, ...linkStyle}}>Linkedin</a>
                        <a href="" style={{...smallText, ...linkStyle}}>Portfolio</a>
                </div>
            </div>
            <div style={containerLower}>
                <div style={skillBoxes}>HTML</div>
                <div style={skillBoxes}>CSS</div>
                <div style={skillBoxes}>HTML</div>
                <div style={skillBoxes}>CSS</div>
            </div>
        </div>
        ))}
        </>
    )
}

export default StudentsLoop;