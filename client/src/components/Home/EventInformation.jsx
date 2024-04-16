/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ViewButtons from "./ViewButtons";
import { useNavigate } from "react-router-dom";

export default function EventInformation() {
  const spec = {
    marginLeft: "1rem",
    marginRight: "1rem",
    fontFamily: "inter",
    fontSize: "16px",
    fontWeight: "400",
  };

  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  return (
    <div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          /* background-color: #475634; */
          padding: 2rem;

          ${mq[1]} {
            padding: 4rem 8rem;
          }
        `}
      >
        <div
          css={css`
            text-align: left;
            padding: 32px 32px 0 0;
          `}
        >
          <h1
            css={css`
              font-family: "Inter";
              font-size: 34px;
              margin: 0;
              font-weight: 400;
              line-height: 40px;

              ${mq[1]} {
                font-size: 60px;
                font-weight: 300;
                line-height: 72px;
                letter-spacing: -0.5px;
              }
            `}
          >
            Branchevent 2024
          </h1>
        </div>

        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin: 1rem 0;
            /* margin: 2rem 2rem 2rem 0; */
            /* background-color: #9af52a; */
          `}
        >
          <div
            css={css`
              display: flex;
            `}
          >
            <span
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <mask
                  id="mask0_64_683"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="25"
                  height="24"
                >
                  <rect x="0.601562" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask={`url(#mask0_64_683)`}>
                  <path
                    d="M12.6016 12C13.1516 12 13.6224 11.8042 14.0141 11.4125C14.4057 11.0208 14.6016 10.55 14.6016 10C14.6016 9.45 14.4057 8.97917 14.0141 8.5875C13.6224 8.19583 13.1516 8 12.6016 8C12.0516 8 11.5807 8.19583 11.1891 8.5875C10.7974 8.97917 10.6016 9.45 10.6016 10C10.6016 10.55 10.7974 11.0208 11.1891 11.4125C11.5807 11.8042 12.0516 12 12.6016 12ZM12.6016 19.35C14.6349 17.4833 16.1432 15.7875 17.1266 14.2625C18.1099 12.7375 18.6016 11.3833 18.6016 10.2C18.6016 8.38333 18.0224 6.89583 16.8641 5.7375C15.7057 4.57917 14.2849 4 12.6016 4C10.9182 4 9.4974 4.57917 8.33906 5.7375C7.18073 6.89583 6.60156 8.38333 6.60156 10.2C6.60156 11.3833 7.09323 12.7375 8.07656 14.2625C9.0599 15.7875 10.5682 17.4833 12.6016 19.35ZM12.6016 22C9.91823 19.7167 7.91406 17.5958 6.58906 15.6375C5.26406 13.6792 4.60156 11.8667 4.60156 10.2C4.60156 7.7 5.40573 5.70833 7.01406 4.225C8.6224 2.74167 10.4849 2 12.6016 2C14.7182 2 16.5807 2.74167 18.1891 4.225C19.7974 5.70833 20.6016 7.7 20.6016 10.2C20.6016 11.8667 19.9391 13.6792 18.6141 15.6375C17.2891 17.5958 15.2849 19.7167 12.6016 22Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              <p style={spec}>Visual Arena Lindholmen</p>
            </span>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: row;
            `}
          >
            <span
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <mask
                  id="mask0_64_589"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="25"
                  height="24"
                >
                  <rect x="0.601562" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask={`url(#mask0_64_589)`}>
                  <path
                    d="M5.60156 22C5.05156 22 4.58073 21.8042 4.18906 21.4125C3.7974 21.0208 3.60156 20.55 3.60156 20V6C3.60156 5.45 3.7974 4.97917 4.18906 4.5875C4.58073 4.19583 5.05156 4 5.60156 4H6.60156V2H8.60156V4H16.6016V2H18.6016V4H19.6016C20.1516 4 20.6224 4.19583 21.0141 4.5875C21.4057 4.97917 21.6016 5.45 21.6016 6V20C21.6016 20.55 21.4057 21.0208 21.0141 21.4125C20.6224 21.8042 20.1516 22 19.6016 22H5.60156ZM5.60156 20H19.6016V10H5.60156V20ZM5.60156 8H19.6016V6H5.60156V8ZM12.6016 14C12.3182 14 12.0807 13.9042 11.8891 13.7125C11.6974 13.5208 11.6016 13.2833 11.6016 13C11.6016 12.7167 11.6974 12.4792 11.8891 12.2875C12.0807 12.0958 12.3182 12 12.6016 12C12.8849 12 13.1224 12.0958 13.3141 12.2875C13.5057 12.4792 13.6016 12.7167 13.6016 13C13.6016 13.2833 13.5057 13.5208 13.3141 13.7125C13.1224 13.9042 12.8849 14 12.6016 14ZM8.60156 14C8.31823 14 8.08073 13.9042 7.88906 13.7125C7.6974 13.5208 7.60156 13.2833 7.60156 13C7.60156 12.7167 7.6974 12.4792 7.88906 12.2875C8.08073 12.0958 8.31823 12 8.60156 12C8.8849 12 9.1224 12.0958 9.31406 12.2875C9.50573 12.4792 9.60156 12.7167 9.60156 13C9.60156 13.2833 9.50573 13.5208 9.31406 13.7125C9.1224 13.9042 8.8849 14 8.60156 14ZM16.6016 14C16.3182 14 16.0807 13.9042 15.8891 13.7125C15.6974 13.5208 15.6016 13.2833 15.6016 13C15.6016 12.7167 15.6974 12.4792 15.8891 12.2875C16.0807 12.0958 16.3182 12 16.6016 12C16.8849 12 17.1224 12.0958 17.3141 12.2875C17.5057 12.4792 17.6016 12.7167 17.6016 13C17.6016 13.2833 17.5057 13.5208 17.3141 13.7125C17.1224 13.9042 16.8849 14 16.6016 14ZM12.6016 18C12.3182 18 12.0807 17.9042 11.8891 17.7125C11.6974 17.5208 11.6016 17.2833 11.6016 17C11.6016 16.7167 11.6974 16.4792 11.8891 16.2875C12.0807 16.0958 12.3182 16 12.6016 16C12.8849 16 13.1224 16.0958 13.3141 16.2875C13.5057 16.4792 13.6016 16.7167 13.6016 17C13.6016 17.2833 13.5057 17.5208 13.3141 17.7125C13.1224 17.9042 12.8849 18 12.6016 18ZM8.60156 18C8.31823 18 8.08073 17.9042 7.88906 17.7125C7.6974 17.5208 7.60156 17.2833 7.60156 17C7.60156 16.7167 7.6974 16.4792 7.88906 16.2875C8.08073 16.0958 8.31823 16 8.60156 16C8.8849 16 9.1224 16.0958 9.31406 16.2875C9.50573 16.4792 9.60156 16.7167 9.60156 17C9.60156 17.2833 9.50573 17.5208 9.31406 17.7125C9.1224 17.9042 8.8849 18 8.60156 18ZM16.6016 18C16.3182 18 16.0807 17.9042 15.8891 17.7125C15.6974 17.5208 15.6016 17.2833 15.6016 17C15.6016 16.7167 15.6974 16.4792 15.8891 16.2875C16.0807 16.0958 16.3182 16 16.6016 16C16.8849 16 17.1224 16.0958 17.3141 16.2875C17.5057 16.4792 17.6016 16.7167 17.6016 17C17.6016 17.2833 17.5057 17.5208 17.3141 17.7125C17.1224 17.9042 16.8849 18 16.6016 18Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              <p style={spec}>Onsdag 24 April</p>
            </span>

            <span
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <mask
                  id="mask0_64_592"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="25"
                  height="24"
                >
                  <rect x="0.601562" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask={`url(#mask0_64_592)`}>
                  <path
                    d="M15.9016 16.7L17.3016 15.3L13.6016 11.6V7H11.6016V12.4L15.9016 16.7ZM12.6016 22C11.2182 22 9.91823 21.7375 8.70156 21.2125C7.4849 20.6875 6.42656 19.975 5.52656 19.075C4.62656 18.175 3.91406 17.1167 3.38906 15.9C2.86406 14.6833 2.60156 13.3833 2.60156 12C2.60156 10.6167 2.86406 9.31667 3.38906 8.1C3.91406 6.88333 4.62656 5.825 5.52656 4.925C6.42656 4.025 7.4849 3.3125 8.70156 2.7875C9.91823 2.2625 11.2182 2 12.6016 2C13.9849 2 15.2849 2.2625 16.5016 2.7875C17.7182 3.3125 18.7766 4.025 19.6766 4.925C20.5766 5.825 21.2891 6.88333 21.8141 8.1C22.3391 9.31667 22.6016 10.6167 22.6016 12C22.6016 13.3833 22.3391 14.6833 21.8141 15.9C21.2891 17.1167 20.5766 18.175 19.6766 19.075C18.7766 19.975 17.7182 20.6875 16.5016 21.2125C15.2849 21.7375 13.9849 22 12.6016 22ZM12.6016 20C14.8182 20 16.7057 19.2208 18.2641 17.6625C19.8224 16.1042 20.6016 14.2167 20.6016 12C20.6016 9.78333 19.8224 7.89583 18.2641 6.3375C16.7057 4.77917 14.8182 4 12.6016 4C10.3849 4 8.4974 4.77917 6.93906 6.3375C5.38073 7.89583 4.60156 9.78333 4.60156 12C4.60156 14.2167 5.38073 16.1042 6.93906 17.6625C8.4974 19.2208 10.3849 20 12.6016 20Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              <p style={spec}>Kl 15-17</p>
            </span>
          </div>
        </div>

        <section
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;

            ${mq[1]} {
              flex-direction: row;
              justify-content: flex-start;
              gap: 4rem;
            }
          `}
        >
          <div
            css={css`
              background-color: #001a52;
              color: white;
              border: none;
              height: auto;
              /* margin: 0 36px 36px 36px; */
              justify-content: space-between;
              font-family: inter;
              font-size: 16px;
              padding: 32px;

              ${mq[1]} {
                margin: 0;
                padding: 60px;
              }
            `}
          >
            <p
              css={css`
                font-weight: 300;
                max-width: 500px;
                font-family: inter;
                font-size: 16px;
                text-align: left;
                line-height: 1.32rem;

                ${mq[1]} {
                  font-size: 20px;
                  line-height: 24px; /* 120% */
                  letter-spacing: 0.15px;
                  max-width: 600px;
                }
              `}
            >
              Välkomna på mingelevent för att hitta framtida medarbetare i ert
              företag eller bara jobba tillsammans under LIA. Ni kommer att
              träffa Webbutvecklare och Digital Designers från Yrgo som vill
              visa vad de har jobbat med under året och vi hoppas att ni hittar
              en match.
            </p>
            <p
              css={css`
                font-weight: 300;
                max-width: 500px;
                font-family: inter;
                font-size: 16px;
                text-align: left;
                line-height: 1.32rem;

                ${mq[1]} {
                  font-size: 20px;
                  line-height: 24px; /* 120% */
                  letter-spacing: 0.15px;
                  max-width: 600px;
                }
              `}
            >
              Ni som företag kan med fördel ta med någon form av identifikation
              för synlighet. Vi kommer att ha stationer där företag och
              studerande kan träffas.
            </p>

            <p
              css={css`
                font-weight: 300;
                max-width: 500px;
                font-family: inter;
                font-size: 16px;
                text-align: left;
                line-height: 1.32rem;

                ${mq[1]} {
                  font-size: 20px;
                  line-height: 24px;
                  letter-spacing: 0.15px;
                  max-width: 600px;
                }
              `}
            >
              Varmt välkomna önskar Webbutvecklare och Digital Designer!
            </p>
          </div>
          <ViewButtons />
        </section>
      </div>
    </div>
  );
}
