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
      blue: string;
      red: string;
    };
    fonts: {
      title: SerializedStyles;
      body: SerializedStyles;
      inputTitle: SerializedStyles;
      discription: SerializedStyles;
    };
  }
}
