import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NavBar from "./components/navBar/navBar";
import "./index.css";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/Context.jsx";
import { Footer } from "./components/footer/footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <BrowserRouter>
          <main className="flex-grow">
            <App />
          </main>
        </BrowserRouter>
        <Footer />
      </div>
    </ThemeProvider>
  </StrictMode>
);
