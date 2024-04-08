export default function UserLinkedAccounts({text, link}) {
    const box = {
        display: "flex",
        padding: "var(--Spacing-Space-2, 12px)",
        alignItems: "flex-start",
        gap: "var(--Spacing-Space-2, 12px)",
        alignSelf:"stretch",
    }
    const image = {
        width: "var(--Spacing-Space-8, 96px)",
        height: "var(--Spacing-Space-6, 48px)",
        borderRadius: "var(--spacing-space-05, 4px)",
        border: "var(--Spacing-Space-0, 0.5px) solid var(--Now-In-Android-sys-light-surface, #FCFCFC)",
        background: "url(https://www.figma.com/file/M6o7Xdsi8hBZEJtu3CJgtv/Branschevent_DD_WU?type=design&node-id=466-9744&mode=dev) lightgray 50% / cover no-repeat",
    }
    const header = {
        color: "var(--Base-White, #FFF)",
        fontFamily: "Inter",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "21px", /* 131.25% */
    }
    const paragraph = {
        color: "var(--Base-White, #FFF)",
/* Yrgo/Subtitle/Med 14px */
        fontFamily: "Inter",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "24px", 
        letterSpacing: "0.1px",
            }

    return (
        <div style={box}>
            <div style={image}></div>
            <div>
            <h1 style={header} > {text}</h1>
            <p style={paragraph} >{link}</p>
            </div>        
        </div>
    )
}