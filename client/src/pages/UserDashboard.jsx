import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RedButton from "../components/RedButton";
import Menu from "../components/Menu";
import ReturnButton from "../components/ReturnButton";
import location from "../assets/smallicons/location.svg";
import yrgologo from "../assets/icon4.svg";
import "../App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HeaderCompanys from "../components/HeaderCompanys";
import SmallRedButton from "../components/SmallRedButton";

function UserDashboard() {
  const cardsWrapper = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "24px",
  };

  const companyCardContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",

    fontSize: "14px",
    color: "black",
    fontFamily: "inter",
  };

  //if user is authorized, display user dashboard, else redirect to login page
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  let [userId, setUserId] = useState("");

  //verify the user
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log("token is:", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      try {
        const res = await axios({
          url: "https://yrgomeetup.onrender.com/verifyUser",
          method: "GET",
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "/json",
            Authorization: "Bearer " + token,
          },
        });

        if (res.data.status === "success") {
          setAuthorized(true);
          userId = res.data.id;
          setUserId(userId);

          const userRes = await axios({
            url: "https://yrgomeetup.onrender.com/getUserInformation",
            method: "POST",
            data: { user: userId },
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
          setUser(userRes.data);
        } else {
          navigate("/Login");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/Login");
      }
    };

    fetchUser();
  }, []);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredCompanys, setFilteredCompanys] = useState([]);
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: "https://yrgomeetup.onrender.com/companys",
          method: "GET",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        setCompanyData(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
  //logout the user
  const handleLogout = async (e) => {
    console.log("logging out");
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://yrgomeetup.onrender.com/logout",
        { withCredentials: true }
      );

      localStorage.removeItem("token");
      if (response.data.message === "success") {
        location.reload("true");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {authorized ? (
        <div>
          <div>
            <section style={cardsWrapper}>
              <HeaderCompanys
                setSelectedCategory={setSelectedCategory}
                setFilteredStudents={setFilteredCompanys}
                students={companyData}
              />
              {companyData.map((company, index) => (
                <div
                  key={index}
                  css={css`
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    width: 308px;
                    height: 200px;
                    border-radius: 8.04px;
                    border: 1px solid #000;
                    background: #e4e9eb;
                    gap: 16px;
                    font-family: inter;

                    ${mq[2]} {
                      width: 427px;
                      height: 278px;
                      font-size: 14px;
                    }
                  `}
                >
                  <div
                    css={css`
                      display: flex;
                      justify-content: left;
                      align-items: center;
                      width: 70%;
                      height: 110px;
                      gap: 20px;
                      padding: 0;

                      ${mq[2]} {
                        padding: 20px;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                      }
                    `}
                  >
                    <img
                      src={yrgologo}
                      css={css`
                        display: none;

                        ${mq[2]} {
                          display: block;
                        }
                      `}
                    ></img>

                    <div
                      css={css`
                        width: 100%;
                        text-align: left;

                        ${mq[2]} {
                          width: 50%;
                        }
                      `}
                    >
                      <h2
                        css={css`
                          font-size: 26px;
                          margin: 6px 0;
                          ${mq[2]} {
                            /* font-size: 30px; */
                          }
                        `}
                      >
                        {company.companyname}
                      </h2>
                      <p style={{ marginTop: "6px", marginBottom: "6px" }}>
                        {company.email}
                      </p>

                      <p style={{ marginTop: "6px", marginBottom: "6px" }}>
                        <a href={company.linkedin}>Linkedin</a>{" "}
                      </p>
                      <SmallRedButton text={"Ta reda på mer"}></SmallRedButton>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            <RedButton text="Logga ut" onClick={handleLogout} />
          </div>
        </div>
      ) : (
        <div>{/* <Login/> */}</div>
      )}
    </div>
  );
}
export default UserDashboard;
