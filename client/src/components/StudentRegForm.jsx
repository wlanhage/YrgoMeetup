import RedButton from "./RedButton";
import '../App.css'

function StudentRegForm() {
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

    const largeInput = {
        ...input,
        paddingBottom: '80px'
    }

    const label = {
        fontSize: '16px',
        color: 'black', 
        fontFamily: 'inter',
    }
return (
    <>
    <h2>Skapa Konto</h2>
    <form action="">
            <label htmlFor="" style={label} >Förnamn</label><br />
            <input type="text" style={input} placeholder="Förnamn" /> <br /><br />

            <label htmlFor="" style={label}>Efternamn</label><br />
            <input type="text" style={input} placeholder="Efternamn" /><br /><br />

            <label htmlFor="" style={label}>E-mail</label><br />
            <input type="text" style={input} placeholder="namn@gmail.com" /><br /><br />

            <label htmlFor="" style={label}>Lösenord</label><br />
            <input type="text" style={input} placeholder="*****" /><br /><br />

            <label htmlFor="" style={label}>Bekräfta Lösenord</label><br />
            <input type="text" style={input} placeholder="*****" /><br /><br />
    <RedButton text="Nästa" />
    </form>
    </>
)
}
export default StudentRegForm;