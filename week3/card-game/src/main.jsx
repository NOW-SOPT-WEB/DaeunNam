import { Global, ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom/client";
import CardGame from "./CardGame.jsx";
import globalStyle from "./styles/GlobalStyle.jsx";
import theme from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Global styles={globalStyle} />
    <ThemeProvider theme={theme}>
      <CardGame />
    </ThemeProvider>
  </>
);
