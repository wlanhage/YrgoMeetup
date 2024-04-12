import { onClick } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
function HeroSidescroll() {
  const breakpoints = [576, 768, 900, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          background-color: #8c5b5f;
        `}
      >
        <h2
          css={css`
            font-family: "Inter";
            font-size: 24px;
            font-weight: 300;
            margin: 4rem 0 4rem 0;

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
            /* gap: 1rem; */
            flex-wrap: nowrap;
            overflow-x: auto;
          `}
        >
          <div
            css={css`
              flex-shrink: 0;
              width: 155px;
              height: 100px;
              margin-right: 0.5rem;
              margin-left: 0.5rem;
              background-color: rgba(228, 233, 235, 1);
              border: 1px solid black;
              border-radius: 4px;

              ${mq[1]} {
                width: 308px;
                height: 200px;
              }
            `}
          ></div>
          <div
            css={css`
              flex-shrink: 0;
              width: 155px;
              height: 100px;
              margin-right: 0.5rem;
              margin-left: 0.5rem;
              background-color: rgba(228, 233, 235, 1);
              border: 1px solid black;
              border-radius: 4px;

              ${mq[1]} {
                width: 308px;
                height: 200px;
              }
            `}
          ></div>
          <div
            css={css`
              flex-shrink: 0;
              width: 155px;
              height: 100px;
              margin-right: 0.5rem;
              margin-left: 0.5rem;
              background-color: rgba(228, 233, 235, 1);
              border: 1px solid black;
              border-radius: 4px;

              ${mq[1]} {
                width: 308px;
                height: 200px;
              }
            `}
          ></div>
          <div
            css={css`
              flex-shrink: 0;
              width: 155px;
              height: 100px;
              margin-right: 0.5rem;
              margin-left: 0.5rem;
              background-color: rgba(228, 233, 235, 1);
              border: 1px solid black;
              border-radius: 4px;

              ${mq[1]} {
                width: 308px;
                height: 200px;
              }
            `}
          ></div>
          <div
            css={css`
              flex-shrink: 0;
              width: 155px;
              height: 100px;
              margin-right: 0.5rem;
              margin-left: 0.5rem;
              background-color: rgba(228, 233, 235, 1);
              border: 1px solid black;
              border-radius: 4px;

              ${mq[1]} {
                width: 308px;
                height: 200px;
              }
            `}
          ></div>
        </div>
      </div>
    </>
  );
}

export default HeroSidescroll;
