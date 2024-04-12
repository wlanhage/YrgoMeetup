import { onClick } from "react";
function RedButton({ text, style: additionalStyle, onClick }) {
  const style = {
    backgroundColor: "#F52A3B",
    color: "white",
    border: "none",
    borderRadius: "35px 35px 35px 35px",
    width: "100%",
    height: "56px",
    padding: "16px 24px",
    justifyContent: "space-between",
    fontFamily: "inter",
    ...additionalStyle,
  };

  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
}

export default RedButton;
