import React from "react";
import cookie from "../assets/cookie.svg";
import CompanysPage from "../components/CompanysPage.jsx";
import Navbar from "../components/Navbar.jsx";
import RedButton from "./RedButton.jsx";

const infoWrapper = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "60h",
  fontFamily: "inter",

  //   backgroundColor: "gray",
  borderTop: "1px solid black",
  padding: "32px",
};
const info = {
  marginBottom: "22px",
  textAlign: "left",
};

function CookiePopup() {
  return (
    <>
      <section style={infoWrapper}>
        <img src={cookie}></img>
        <div style={info}>
          <h1>Vi använder cookies</h1>
          <p>
            Vi använder cookies för att förbättra din upplevelse på vår
            webbplats. Genom att fortsätta använda vår webbplats samtycker du
            till vår användning av cookies. Om du vill kan du ändra dina
            cookieinställningar i din webbläsare.
          </p>
        </div>
        <div>
          <RedButton
            text={"Acceptera cookies"}
            style={{
              backgroundColor: "white",
              color: "black",
              border: "2px solid black",
              marginBottom: "15px",
            }}
          />
          <RedButton
            text={"Läs mer om vår Cookiepolicy"}
            style={{
              backgroundColor: "white",
              color: "black",
              border: "2px solid black",
              marginBottom: "15px",
            }}
          />
        </div>
      </section>
    </>
  );
}

export default CookiePopup;
