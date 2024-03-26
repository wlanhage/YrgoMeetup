export default function Hero () {

    const heroContainer = {
        display: "flex",
        width: "auto",
        height: "857px",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: "250px",
        alignItems: "center",
        padding: "var(--Spacing-Space-0, 0px) var(--Spacing-Space-5, 32px) 59px var(--Spacing-Space-5, 32px)",
        flexShrink: "0",
        background: "linear-gradient(180deg, #F52A3B 34.13%, #F7A8AF 100%)",
    }
    const heroHeader = {
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        fontFamily: 'inter',
        textAlign:"left",
        }

    const heroH2 = {
        fontSize: "40px",
        marign: "4px",
        
    }
    const heroH1 = {
        fontSize:"80px",
        margin:"0px",
    }
    const heroParagraph = {
        color: "var(--Base-White, #FFF)",
        fonfFeatureSettings: "'clig' off, 'liga' off",
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "0.15px",
        fontFamily: 'inter',
        textAlign: "left",
    }
    return (
    <div style={heroContainer}>
        <div style={heroHeader}>
            <p>Välkommen till</p>
            <h1 style={heroH1} >YRGO</h1>
            <p style={heroH2}>BRANCHEVENT 2024</p>
        </div>
        <div style={heroParagraph}>
            <p>
                Mingel mellan bransch och studerande Webbutvecklare och Digital Designers på Yrgo
            </p>
        </div>
    </div>
    )
}