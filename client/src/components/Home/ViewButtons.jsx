import RedButton from "../RedButton"   // RedButton component
import {useNavigate} from "react-router-dom"; // useNavigate 
export default function ViewButtons() {
    const navigate = useNavigate();
    const box = {
        color: 'black',
        border: 'none',
        width: '100%-4rem',
        height: 'auto',
        marginLeft: '2rem',
        marginRight: '2rem',
        justifyContent: 'left',
        fontFamily: 'inter',
        fontSize: 16,
    }
    const text = {
        marginLeft: '2rem',
        marginRight: '2rem',
        textAlign: 'left',         
    }
    const NavigateToUserDashboard = (e) => {
        try {
           
        e.preventDefault();
        navigate("/UserDashboard");
    } catch (error) {   
        console.error('Error:', error);
    }
    }
    return (
        <div style={box}>
        <p style={text} > Är du Företag?</p>
        <RedButton text="Gå till formuläret" />
        <p style={text} > Är du Student?</p>
        <RedButton text="Skapa inloggning" onClick={NavigateToUserDashboard}/>
    </div>
    )
}