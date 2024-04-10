import { onClick } from "react";
function HeroButton({ text, style: additionalStyle, onClick }) {
  const style = {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
    borderRadius: "35px 35px 35px 35px",
    width: "100%",
    height: "56px",
    padding: "16px 24px",
    fontFamily: "inter",
    ...additionalStyle,
  };

  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
}

export default HeroButton;
