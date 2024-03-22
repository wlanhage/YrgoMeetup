import RedButton from "./RedButton";
import '../App.css'

function CompanyRegForm() {

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
    const header= {
        fontSize: '36px',
        color: 'black', 
        fontFamily: 'inter',
        fontWeight: 400,
        marginBottom: '50px'
    }


    const label = {
        fontSize: '16px',
        color: 'black', 
        fontFamily: 'inter',
    }

    return (
        <>
        <h2 style={header}>Anmälningsformulär</h2>
        <form action="">
            <label htmlFor="" style={label} >Företagsnamn</label><br />
            <input type="text" style={input} placeholder="Namn..." /> <br /><br />

            <label htmlFor="" style={label}>Vilka är vi?</label><br />
            <input type="text" style={largeInput} placeholder="Text är..." /><br /><br />

            <label htmlFor="" style={label}>Kontaktperson</label><br />
            <input type="text" style={input} placeholder="Namn..." /><br /><br />

            <label htmlFor="" style={label}>Vad vi jobbar med</label><br />
            <input type="text" style={largeInput} placeholder="Utveckling inom backend/frontend..." /><br /><br />

            <label htmlFor="" style={label}>Webbplats</label><br />
            <input type="text" style={input} placeholder="www." /><br /><br />
            
            <RedButton text="Submit" />
        </form>
        </>
    )
}

export default CompanyRegForm;