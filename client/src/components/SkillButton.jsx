export default function SkillButton ({text}){

    const style= {
    display: "flex",
    padding: "var(--Spacing-Space-1, 8px) var(--Spacing-Space-3, 16px)",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 400,
    borderRadius: "var(--Spacing-Space-7, 64px)",
    border: "2px solid var(--Yrgo-Blue100, #001A52)",
}
return (
    <div style={style}> 
        {text}
    </div>
)

} 
