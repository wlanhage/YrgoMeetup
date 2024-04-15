export default function UserLinkedAccounts({text, link}) {
    const box = {
        display: "flex",
        alignItems: "flex-start",
        alignSelf:"stretch",
        borderRadius: 'var(--Spacing-Space-5, 100px)',
        background: "url(https://www.figma.com/file/M6o7Xdsi8hBZEJtu3CJgtv/Branschevent_DD_WU?type=design&node-id=466-9744&mode=dev) lightgray 50%",
        marginBottom: '1rem',
        width: '100%',
       }

    const paragraph = {
/* Yrgo/Subtitle/Med 14px */
        fontFamily: "Inter",
        fontSize: "14px",
        fontWeight: 400,
        letterSpacing: "0.1px",
        marginTop: '8', 
        marginBottom: '8', 
        paddingLeft: '1rem',
        paddingRight: '1rem', 
            }

    return (
        <div style={box}>
            <div>
            <p style={paragraph} >{link}</p>
            </div>        
        </div>
    )
}