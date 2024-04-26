import { css } from "@emotion/react";

const theme = {
  colors: {
    purple: "#6139D1",
    lightPurple: "#E9E3F8",
    gray: "#F5F5F7",
    black: "#010101",
    white: "#FFFFFF",
  },
  fonts: {
    title: css`
      font-weight: 700;
      font-size: 2.6rem;
      font-family: "Pretendard Variable", sans-serif;
      font-style: normal;
      line-height: 100%;
    `,
    subTitle: css`
      font-weight: 500;
      font-size: 1.6rem;
      font-family: "Pretendard Variable", sans-serif;
      font-style: normal;
      line-height: 100%;
    `,
  },
};

export default theme;
