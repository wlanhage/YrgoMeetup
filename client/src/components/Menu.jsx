import "../App.css";
import menu from "../assets/menu.svg";
import profilebig from "../assets/profilebig.svg";
import profilesmall from "../assets/profilesmall.svg";
import link from "../assets/link.svg";
import heart from "../assets/heart.svg";
import logout from "../assets/logout.svg";
import chevron from "../assets/chevron_right.svg";
import menublack from "../assets/menu_black.svg";
/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";

const header = {
  display: "flex",
  justifyContent: "space-between",
  height: "5%",
};
const student = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "16px",

  height: "25%",
  backgroundColor: "white",
};
const options = {
  display: "flex",
  flexDirection: "column",

  height: "70%",
  //   backgroundColor: "blue",
};

const option = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "10%",
  width: "100%",
  backgroundColor: "white",

  //   padding: "0 10px",
};

const h2 = {
  fontSize: "20px",
  marginBottom: "0px",
};

const breakpoints = [576, 768, 900, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

function Menu() {
  return (
    <>
      <div
        css={css`
          position: absolute;
          right: 0;
          height: 100vh;
          width: 55%;

          font-family: "inter";
          font-weight: 400;
          font-size: 16px;

          padding: 32px 32px;

          border: 1px solid #e5e5e5;

          ${mq[2]} {
            width: 35%;
          }
        `}
      >
        <section style={header}>
          <img src={menublack}></img>
        </section>
        <section style={student}>
          <img
            src={profilebig}
            style={{ maxWidth: "90px", maxHeight: "90px" }}
          ></img>
          <p style={h2}>Student namn</p>
          <p style={{ margin: "5px" }}>Studerar digital designer</p>
        </section>
        <section style={options}>
          <div style={option}>
            <div style={{ display: "flex", gap: "15px" }}>
              <img src={profilesmall}></img>
              <p>Din profil</p>
            </div>
            <div>
              <img src={chevron}></img>
            </div>
          </div>

          <div style={option}>
            <div style={{ display: "flex", gap: "15px" }}>
              <img src={heart}></img>

              <p>Dina likes</p>
            </div>
            <div>
              <img src={chevron}></img>
            </div>
          </div>

          <div style={option}>
            <div style={{ display: "flex", gap: "15px" }}>
              <img src={link}></img>
              <p>Länkade konton</p>
            </div>
            <div>
              <img src={chevron}></img>
            </div>
          </div>

          <div style={option}>
            <div style={{ display: "flex", gap: "15px" }}>
              <img src={logout}></img>
              <p>Logga ut</p>
            </div>
            <div>
              <img src={chevron}></img>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Menu;
