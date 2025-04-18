import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NavBar from "./components/navBar/navBar";
import "./index.css";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <NavBar />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
