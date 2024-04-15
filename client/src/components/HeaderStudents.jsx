import { useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import leftArrow from '../assets/smallicons/leftarrow.svg';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

function HeaderStudents ({setSelectedCategory, setFilteredStudents, students}) {

    const [selectedTitle, setSelectedTitle] = useState('alla');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedTitle(category);
        console.log(students);
    
        let filtered = [];
        if (students.length > 0 && Array.isArray(students[0])) {
            let studentList = students[0]; 
    
            if (category === 'developer') {
                filtered = studentList.filter(student => student.developer === 1);
            } else if (category === 'designer') {
                filtered = studentList.filter(student => student.designer === 1);
            } else if (category === 'alla') {
                filtered = studentList;
            }
    
            console.log(`Filtered students for category ${category}:`, filtered);
        } else {
            console.log(`Students data is not as expected:`, students);
        }
    
        setFilteredStudents(filtered);
    };

    const header = {     
        display: "flex",  
        flexDirection: 'column',   
        alignItems: "start",
        margin: 'auto',
                 
        color: "black",      
        width: "80%",     
        height: "150px",     
        backgroundColor: "#FFFFF",
        borderBottom: '2px solid #F52A3B',  
    };    

    const headerUpper = {
        display: 'flex',
        flexDirection: 'row',
        width: '85%',
        marginTop: '60px',
        
    }

    const headerUpperText = {
        fontSize: '28px',
        fontFamily: 'inter',
        fontWeight: '200'
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
        fontWeight: '300',
        marginTop: '5px',
        
    }

    const programContainer = {
        width: '100%',
        height: '40px',
        backgroundColor: '#FFFFF',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

        marginTop: '10px',
        gap: '20px',
    }

    const ProgramSquare = styled.div`
        marginLeft: 'auto',
        marginRight: 'auto',
        margin-top: auto;
        margin-bottom: auto;
        font-family: 'Inter';
        font-size: 19px;
        border-bottom: ${({ isSelected }) => isSelected ? '2px solid red' : 'none'};
        :hover {
            transform: scale(1.02);
            transition: 0.1s;
            border-bottom: 2px solid #ECECEC;
            cursor: pointer;
  }
`;
    

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
            <ProgramSquare 
            isSelected={selectedTitle === 'alla'}
            onClick={() => handleCategoryClick('alla')}
            >
            Alla
            </ProgramSquare>
            <ProgramSquare 
            isSelected={selectedTitle === 'designer'}
            onClick={() => handleCategoryClick('designer')}
            >
            Digital designer
            </ProgramSquare>
            <ProgramSquare 
            isSelected={selectedTitle === 'developer'}
            onClick={() => handleCategoryClick('developer')}
            >
            Webbutvecklare
            </ProgramSquare>
            </div>
        
        </>

    )
}

export default HeaderStudents;