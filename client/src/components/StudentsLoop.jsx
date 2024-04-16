import "../App.css";
import axios from 'axios';
import { useState, useEffect } from "react";
import LinkArrow from "../assets/linkArrow.svg";
import { Link } from "react-router-dom";

function StudentsLoop ({ selectedCategory, filteredStudents }) {
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://yrgomeetup.onrender.com/students");
                console.log(response.data);
                
        
                // Loop through each student to fetch their languages
                const studentsWithLanguages = await Promise.all(
                    response.data[0].map(async (student) => {
                        const languagesResponse = await axios.get(`https://yrgomeetup.onrender.com/getStudentLanguagesFromId/${student.id}`);
                        const languages = languagesResponse.data;
                        return { ...student, languages };
                    })
                );
                setStudentData(studentsWithLanguages);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    

    const wrapper = {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1300px',
        margin: 'auto',
        marginTop: '20px',
    };

    const container = {
        width: '360px',
        height: '230px',
        paddingTop: '28px',
        paddingBottom: '28px',
        paddingLeft: '24px',
        paddingRight: '24px',

        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '17px',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        backgroundColor: '#E4E9EB',
        border: '1px solid black',
        borderRadius: '10px',
    };

    const containerUpper = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    };

    const containerUpperLeft = {
        display: 'flex',
        flexDirection: 'column'
    };

    const containerUpperRight = {
        display: 'flex',
        flexDirection: 'column',
    };

    const containerLower = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    };

    const skillBoxes = {
        border: 'solid 2px',
        fontSize: '14px',
        fontFamily: 'inter',

        borderRadius: '20px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '8px',
        paddingBottom: '8px',
    };

    const nameText = {
        fontFamily: 'inter',
        fontWeight: '300',
        fontSize: '30px',
        textAlign: 'start',
        maxWidth: '250px',
        marginBottom: '0px',
    };

    const smallText = {
        fontFamily: 'inter',
        fontSize: '18',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
    };

    const flexRow = {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '15px',
        gap: '10px',
    };

    return (
        <div style={wrapper}>
            {studentData.length > 0 && studentData.map((student) => (
                <div key={student.id} style={container}>
                    <div style={containerUpper}>
                        <div style={containerUpperLeft}>
                            <div style={nameText}>{student.firstname} {student.lastname}</div>
                            <div style={{ ...smallText, textAlign: 'start' }}>
                                {student.developer === 1 && <p>Studerar Webbutvecklare</p>}
                                {student.designer === 1 && <p> Studerar Digital design</p>}
                            </div>
                        </div>
                        <div style={containerUpperRight}>
                            <div style={flexRow}>
                                <a href={student.linkedin} style={{ ...smallText, ...linkStyle }}>Linkedin</a>
                                <a href={student.linkedin}><img src={LinkArrow} alt="LinkArrow" /> </a>
                            </div>
                            <div style={flexRow}>
                                <a href="" style={{ ...smallText, ...linkStyle }}>Portfolio</a>
                                <a href={student.linkedin}><img src={LinkArrow} alt="LinkArrow" /> </a>
                            </div>
                        </div>
                    </div>
                    <div style={containerLower}>
                        {/* Display student's languages */}
                        <ul>
                            {student.languages.map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StudentsLoop;
