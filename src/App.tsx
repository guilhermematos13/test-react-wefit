import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@styles/themes/default";
import { GlobalStyle } from "@styles/global";
import { CheckoutContextProvider } from "./context/CheckoutContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CheckoutContextProvider>
          <Router />
          <GlobalStyle />
        </CheckoutContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
