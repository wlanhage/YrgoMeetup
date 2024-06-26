/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Redbutton from "../RedButton";
import Herobutton from "../HeroButton";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const heroHeader = {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    fontFamily: "inter",
    textAlign: "left",
  };

  const svgStyle = {
    width: "calc(100vw - 4rem)",
    height: "auto",
    maxWidth: "500px",
    marginBottom: "4rem",
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Company");
  };

  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  return (
    <div
      css={css`
        display: flex;
        width: auto;
        height: 100vh;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 128px 32px 48px 32px;
        letter-spacing: 0.15px;
        flex-shrink: 0;
        background: linear-gradient(180deg, #f52a3b 34.13%, #f7a8af 100%);

        ${mq[1]} {
          padding: 6rem;
          height: auto;
        }
      `}
    >
      <div style={heroHeader}>
        <p>Välkommen till</p>
        <svg
          style={svgStyle}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 110"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M339.544 54.5409C339.544 84.4248 363.733 108.732 393.458 108.732C423.195 108.732 447.387 84.4344 447.387 54.5409C447.387 24.6474 423.195 0.334351 393.453 0.334351C384.869 0.340108 376.321 2.4218 368.749 6.34977C365.577 8.00092 364.346 11.895 366.007 15.0489C367.66 18.2015 371.573 19.4374 374.754 17.7818C380.567 14.7603 386.859 13.2301 393.458 13.2243C416.039 13.2243 434.419 31.7709 434.419 54.5409C434.419 77.311 416.04 95.8421 393.458 95.8421C370.876 95.8421 352.514 77.311 352.514 54.5409C352.514 46.8532 354.614 39.3645 358.593 32.868C360.455 29.8286 359.478 25.8629 356.426 24.0103C353.356 22.1621 349.371 23.1249 347.51 26.17C342.297 34.6823 339.544 44.4926 339.544 54.5409ZM198.428 103.891C199.693 105.151 201.353 105.779 203.013 105.779C204.672 105.779 206.329 105.151 207.596 103.891C210.129 101.382 210.129 97.2957 207.604 94.7771L188.067 75.3484C185.535 72.8291 181.432 72.8291 178.9 75.3484C176.365 77.8567 176.365 81.9434 178.891 84.4594L198.428 103.891ZM176.721 3.45448H130.52C127.826 3.45448 125.521 5.08069 124.54 7.39972C124.188 8.19683 123.985 9.07199 123.985 9.99512V99.151C123.985 102.714 126.884 105.598 130.469 105.598C134.054 105.598 136.953 102.714 136.953 99.151V16.3477H176.721C187.592 16.3477 196.441 25.1376 196.441 35.9517C196.441 46.7657 187.592 55.5582 176.721 55.5582H154.013C150.428 55.5582 147.528 58.4415 147.528 62.0042C147.528 65.5669 150.428 68.4502 154.013 68.4502H176.721C194.742 68.4502 209.41 53.87 209.41 35.9517C209.41 18.0334 194.742 3.45448 176.721 3.45448ZM286.831 53.9666H313.098C316.675 53.9666 319.582 56.8492 319.582 60.4132V99.4242C319.582 102.985 316.683 105.871 313.097 105.871C309.511 105.871 306.611 102.985 306.611 99.4242V66.8572H286.831C283.252 66.8572 280.345 63.9771 280.345 60.4132C280.345 56.8492 283.252 53.9666 286.831 53.9666ZM281.019 109.029C251.28 109.029 227.092 84.7148 227.092 54.8207C227.092 24.9266 251.28 0.62821 281.019 0.62821C292.727 0.62821 303.868 4.34123 313.239 11.3719C316.094 13.5144 316.657 17.5607 314.508 20.3985C312.352 23.2383 308.287 23.809 305.423 21.6595C298.32 16.335 289.884 13.5188 281.02 13.5188C258.437 13.5188 240.059 32.0487 240.059 54.8207C240.059 77.5927 258.437 96.1392 281.02 96.1392C283.875 96.1392 286.757 95.836 289.568 95.2378C293.09 94.4625 296.521 96.7086 297.269 100.192C298.016 103.673 295.788 107.095 292.278 107.841C288.581 108.631 284.787 109.029 281.02 109.029H281.019ZM46.7475 99.1454C46.7475 102.707 49.6502 105.591 53.2313 105.591C56.8131 105.591 59.7178 102.707 59.7178 99.1454V60.6487C59.7178 57.0899 56.8125 54.206 53.2313 54.206C49.6502 54.206 46.7475 57.0899 46.7475 60.6487V99.1454ZM66.7784 43.9335C64.9202 43.9335 63.075 43.1409 61.7942 41.6139C59.4996 38.8726 59.8781 34.8141 62.6289 32.5348L95.8676 5.04348C98.6179 2.76475 102.704 3.13324 104.996 5.87577C107.289 8.61128 106.914 12.671 104.161 14.9466L70.9246 42.4442C69.712 43.4435 68.2426 43.9335 66.7784 43.9335ZM36.2107 42.4431C37.4227 43.4423 38.8908 43.9324 40.3544 43.9324C42.2132 43.9324 44.061 43.1398 45.3444 41.6127C47.6338 38.8714 47.2553 34.8066 44.5051 32.5336L11.2458 5.04233C8.49301 2.76359 4.40085 3.13912 2.11212 5.87462C-0.177255 8.60948 0.199265 12.6763 2.9514 14.9454L36.2107 42.4431Z"
            fill="white"
          />
        </svg>

        <p
          css={css`
            font-size: 40px;
            font-family: "Inter";
            font-weight: 200;

            ${mq[1]} {
              font-size: 70px;
              font-weight: 500;
              line-height: 86px;
              letter-spacing: -1.5px;
              margin: 0 0 1rem 0;
            }
          `}
        >
          Branschevent 2024
        </p>
        <p
          css={css`
            color: white;
            font-feature-settings: "clig" off, "liga" off;
            font-size: 20px;
            margin: 0;
            font-weight: 300;
            line-height: 1.6rem;
            letter-spacing: 0.25px;

            font-family: "Inter";
            text-align: left;

            ${mq[1]} {
              font-family: Inter;
              font-size: 70px;
              font-style: normal;
              font-weight: 300;
              line-height: 86px; /* 122.857% */
              letter-spacing: -1.5px;
              margin: 0 0 48px 0;
            }
          `}
        >
          Mingel mellan bransch och studerande Webbutvecklare och Digital
          Designers på Yrgo
        </p>
      </div>
      <div>
        <div
          css={css`
            width: 320px;
          `}
        >
          <Herobutton text="Anmäl ditt företag" onClick={handleClick} />
          <p
            css={css`
              color: white;
              font-feature-settings: "clig" off, "liga" off;
              font-size: 16px;
              margin: 0;
              font-weight: 300;
              line-height: 1.6rem;
              letter-spacing: 0.25px;
              margin-top: 20px;
              margin-bottom: 10px;

              font-family: "Inter";
              text-align: center;
            `}
          >
            Scrolla för mer information
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
          >
            <mask
              id="mask0_64_595"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="44"
              height="44"
            >
              <rect width="44" height="44" fill="#D9D9D9" />
            </mask>
            <g mask={`url(#mask0_64_595`}>
              <path
                d="M22 34.8335L11 23.8335L13.5667 21.2668L22 29.6543L30.4333 21.2668L33 23.8335L22 34.8335ZM22 23.8335L11 12.8335L13.5667 10.2668L22 18.6543L30.4333 10.2668L33 12.8335L22 23.8335Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
