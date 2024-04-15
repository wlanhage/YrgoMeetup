
import '../App.css'
import { Link } from 'react-router-dom';
import leftArrow from '../assets/smallicons/leftarrow.svg';
import Menu from './Menu';

function HeaderCompanys () {

        const header = {     
        display: "flex",  
        flexDirection: 'column',   
        alignItems: "start",
        margin: 'auto',
        marginBottom:'2rem',
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
                        TRÄFFA FÖRETAGEN
                    </div>
                    <Menu/>
                </div>
                <div style={headerLower}>
                Se alla företag som kommer på eventet och samla dina favoriter under dina gilla markeringar 
                </div>
            </div>
        
        </>

    )
};

export default HeaderCompanys;