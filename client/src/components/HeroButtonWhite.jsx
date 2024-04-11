import { onClick } from "react";
function HeroButtonWhite({ text, style: additionalStyle, onClick }) {
  const style = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid white",
    borderRadius: "35px 35px 35px 35px",
    width: "100%",
    height: "56px",
    padding: "16px 24px",
    fontFamily: "inter",
    border: "1px solid black",
    ...additionalStyle,
  };

  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
}

export default HeroButtonWhite;
