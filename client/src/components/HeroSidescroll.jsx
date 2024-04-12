import { onClick, useEffect, useState } from "react";
import axios from "axios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function HeroSidescroll() {
  const [companyData, setCompanyData] = useState([]);
  const breakpoints = [576, 768, 900, 1200];
  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

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

  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          /* background-color: #8c5b5f; */
        `}
      >
        <h2
          css={css`
            font-family: "Inter";
            font-size: 24px;
            font-weight: 300;

            ${mq[1]} {
              font-size: 48px;
            }
          `}
        >
          Företag som anmält sig
        </h2>
        <div
          css={css`
            display: flex;

            flex-wrap: nowrap;
            overflow-x: auto;
          `}
        >
          {companyData.map((company, index) => (
            <div
              key={index}
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                font-family: "Inter";
                font-weight: 300;
                flex-shrink: 0;
                width: 155px;
                height: 100px;
                margin-right: 0.5rem;
                margin-left: 0.5rem;
                background-color: rgba(228, 233, 235, 1);
                border: 1px solid black;
                border-radius: 4px;
                padding: 1rem;

                ${mq[1]} {
                  width: 308px;
                  height: 200px;
                }
              `}
            >
              <h2
                css={css`
                  font-size: 20px;
                  font-weight: 300;
                  margin: 0 0 0.5rem 0;

                  ${mq[1]} {
                    font-size: 42px;
                    font-weight: 200;
                    margin: 0 0 1rem 0;
                  }
                `}
              >
                {company.companyname}
              </h2>
              {/* <p>{company.email}</p>
              <p>{company.phone}</p> */}
              <a href={company.linkedin}>Linkedin</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSidescroll;
