import RedButton from "./RedButton";
import '../App.css'

function LoginForm() {
    const input = {
        backgroundColor: '#828282',
        width: '310px',
        height: '36px',
        padding: '8px',

        fontSize: '16px',
        color: 'white',
        fontFamily: 'inter',

        border: 'none',
        borderRadius: '4px, 4px, 4px, 4px'
        
    }

    const header= {
        fontSize: '36px',
        color: 'black', 
        fontFamily: 'inter',
        fontWeight: 400,
    }

    const label = {
        fontSize: '16px',
        color: 'black', 
        fontFamily: 'inter',
    }
return (
    <>
    <h2 style={header}>Logga In</h2>
    <form action="">
            <label htmlFor="" style={label} >e-mail</label><br />
            <input type="text" style={input} placeholder="Förnamn" /> <br /><br />

            <label htmlFor="" style={label}>Lösenord</label><br />
            <input type="text" style={input} placeholder="*****" /><br /><br />

    <RedButton text="Logga In" />
    </form>
    </>
)
}
export default LoginForm;