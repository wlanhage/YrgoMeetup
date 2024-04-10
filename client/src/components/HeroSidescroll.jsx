import { onClick } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
function HeroSidescroll() {
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h2
          css={css`
            font-family: "Inter";
            font-size: 24px;
            font-weight: 400;
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
              background-color: gray;
            `}
          ></div>
          <div
            css={css`
              flex-shrink: 0;
              width: 155px;
              height: 100px;
              margin-right: 0.5rem;
              margin-left: 0.5rem;
              background-color: gray;
            `}
          ></div>
          <div
            css={css`
              flex-shrink: 0;
              width: 155px;
              height: 100px;
              margin-right: 0.5rem;
              margin-left: 0.5rem;
              background-color: gray;
            `}
          ></div>
          <div
            css={css`
              flex-shrink: 0;
              width: 155px;
              height: 100px;
              margin-right: 0.5rem;
              margin-left: 0.5rem;
              background-color: gray;
            `}
          ></div>
          <div
            css={css`
              flex-shrink: 0;
              width: 155px;
              height: 100px;
              margin-right: 0.5rem;
              margin-left: 0.5rem;
              background-color: gray;
            `}
          ></div>
        </div>
      </div>
    </>
  );
}

export default HeroSidescroll;
