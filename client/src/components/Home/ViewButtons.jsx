import RedButton from "../RedButton"   // RedButton component
export default function ViewButtons() {
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
    return (
        <div style={box}>
        <p style={text} > Är du Företag?</p>
        <RedButton text="Gå till formuläret" />
        <p style={text} > Är du Student?</p>
        <RedButton text="Skapa inloggning" />
    </div>
    )
}