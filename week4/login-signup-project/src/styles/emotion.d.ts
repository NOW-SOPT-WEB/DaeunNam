import type { SerializedStyles } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      purple: string;
      lightPurple: string;
      gray: string;
      black: string;
      background: string;
      white: string;
    };
    fonts: {
      Title: SerializedStyles;
      Body: SerializedStyles;
    };
  }
}
