import "../App.css";
import axios from 'axios';
import { useState, useEffect } from "react";
import LinkArrow from "../assets/linkArrow.svg";
import { Link } from "react-router-dom";

function StudentsLoop({ selectedCategory, filteredStudents }) {
    const [studentData, setStudentData] = useState([]);
    const [softwares, setSoftwares] = useState([]);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://yrgomeetup.onrender.com/students");
                const studentsWithLanguages = response.data[0];
        
                const skillsPromises = studentsWithLanguages.map(async student => {
                    const skillsResponse = await axios.post(
                        'https://yrgomeetup.onrender.com/getStudentSkills',
                        { user: student.id },
                        { withCredentials: true, 
                            headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            },
                        }
                    );
        
                    const languages = skillsResponse.data.languages.map(language => language.name).join(' ');
                    console.log(`Languages for student with id ${student.id}: ${languages}`);
                });
        
                await Promise.all(skillsPromises);
        
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
            {studentData.map((student) => (
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
                        <div style={skillBoxes}>{student.languagesString}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StudentsLoop;
