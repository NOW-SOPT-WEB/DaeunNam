import React from "react";
import ReactDOM from "react-dom/client";

import { Global, ThemeProvider } from "@emotion/react";
import App from "./App.tsx";
import "./index.css";
import globalStyle from "./styles/GlobalStyle.tsx";
import { theme } from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Global styles={globalStyle} />
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </>
);
