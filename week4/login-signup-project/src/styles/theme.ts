import { css } from "@emotion/react";

const colors = {
  purple: "#6139D1",
  lightPurple: "#E9E3F8",
  gray: "#F5F5F7",
  black: "#010101",
  background: "rgba(0, 0, 0, 0.5)",
  white: "#FFFFFF",
};

const fonts = {
  Title: css`
    font-weight: 600;
    font-size: 1.6rem;
    font-family: "Pretendard Variable", sans-serif;
    font-style: normal;
    line-height: 100%;
  `,
  Body: css`
    font-weight: 300;
    font-size: 1rem;
    font-family: "Pretendard Variable", sans-serif;
    font-style: normal;
    line-height: 100%;
  `,
};

export const theme = {
  colors,
  fonts,
};

export default theme;
