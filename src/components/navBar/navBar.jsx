import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { ChangeTheme } from "../../context/Context";
import { Link, useLocation } from "react-router-dom";
import imagenPerfil from "../../assets/images/perfil.png";

const NavBar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const { toggleTheme } = useContext(ChangeTheme);
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (idioma) => {
    i18n.changeLanguage(idioma);
    localStorage.setItem("language", idioma);
  };

  const handleHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-300 dark:bg-slate-800 border-b border-gray-400 dark:border-slate-700 overflow-hidden">
        <div className="max-w-screen-xl mx-auto h-10 px-4 flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
            <div className="flex items-center">
              <img
                className="w-7 h-7 rounded-full border-2 border-black dark:border-white"
                src={imagenPerfil}
                alt="perfil"
              />
              <p className="ml-2 hidden sm:inline">Marcelo Pardo</p>
            </div>
          </Link>

          <nav className="hidden sm:flex space-x-6">
            <Link to="/" onClick={handleHome}>
              {t("navHome")}
            </Link>
            <Link to="/projects">{t("navProject")}</Link>
            <Link to="/#contact">{t("contact")}</Link>
          </nav>

          <div className="flex items-center space-x-2">
            <svg
              onClick={() => toggleTheme()}
              className="h-5 w-5 cursor-pointer dark:fill-white select-none"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 26 26"
            >
              <path d="M 12.90625 -0.03125 C 12.863281 -0.0234375 12.820313 -0.0117188 12.78125 0 C 12.316406 0.105469 11.988281 0.523438 12 1 L 12 4 C 11.996094 4.359375 12.183594 4.695313 12.496094 4.878906 C 12.808594 5.058594 13.191406 5.058594 13.503906 4.878906 C 13.816406 4.695313 14.003906 4.359375 14 4 L 14 1 C 14.011719 0.710938 13.894531 0.433594 13.6875 0.238281 C 13.476563 0.0390625 13.191406 -0.0585938 12.90625 -0.03125 Z M 6.84375 1.59375 C 6.511719 1.640625 6.226563 1.851563 6.082031 2.152344 C 5.9375 2.453125 5.953125 2.804688 6.125 3.09375 L 7.625 5.71875 C 7.902344 6.203125 8.515625 6.371094 9 6.09375 C 9.484375 5.816406 9.652344 5.203125 9.375 4.71875 L 7.875 2.09375 C 7.671875 1.726563 7.257813 1.527344 6.84375 1.59375 Z M 18.8125 1.59375 C 18.519531 1.648438 18.269531 1.832031 18.125 2.09375 L 16.625 4.71875 C 16.347656 5.203125 16.515625 5.816406 17 6.09375 C 17.484375 6.371094 18.097656 6.203125 18.375 5.71875 L 19.875 3.09375 C 20.066406 2.769531 20.058594 2.363281 19.851563 2.046875 C 19.648438 1.730469 19.28125 1.554688 18.90625 1.59375 C 18.875 1.59375 18.84375 1.59375 18.8125 1.59375 Z M 23.34375 5.96875 C 23.3125 5.976563 23.28125 5.988281 23.25 6 C 23.128906 6.019531 23.011719 6.0625 22.90625 6.125 L 20.28125 7.625 C 19.796875 7.902344 19.628906 8.515625 19.90625 9 C 20.183594 9.484375 20.796875 9.652344 21.28125 9.375 L 23.90625 7.875 C 24.375 7.675781 24.621094 7.160156 24.476563 6.671875 C 24.332031 6.183594 23.84375 5.878906 23.34375 5.96875 Z M 2.4375 6 C 2.003906 6.054688 1.660156 6.382813 1.578125 6.8125 C 1.5 7.242188 1.710938 7.671875 2.09375 7.875 L 4.71875 9.375 C 5.203125 9.652344 5.816406 9.484375 6.09375 9 C 6.371094 8.515625 6.203125 7.902344 5.71875 7.625 L 3.09375 6.125 C 2.894531 6.007813 2.664063 5.964844 2.4375 6 Z M 13 6 C 9.132813 6 6 9.132813 6 13 C 6 16.867188 9.132813 20 13 20 C 16.867188 20 20 16.867188 20 13 C 20 9.132813 16.867188 6 13 6 Z M 13 8 C 15.757813 8 18 10.242188 18 13 C 18 15.757813 15.757813 18 13 18 C 10.242188 18 8 15.757813 8 13 C 8 10.242188 10.242188 8 13 8 Z M 0.71875 12 C 0.167969 12.078125 -0.21875 12.589844 -0.140625 13.140625 C -0.0625 13.691406 0.449219 14.078125 1 14 L 4 14 C 4.359375 14.003906 4.695313 13.816406 4.878906 13.503906 C 5.058594 13.191406 5.058594 12.808594 4.878906 12.496094 C 4.695313 12.183594 4.359375 11.996094 4 12 L 1 12 C 0.96875 12 0.9375 12 0.90625 12 C 0.875 12 0.84375 12 0.8125 12 C 0.78125 12 0.75 12 0.71875 12 Z M 21.71875 12 C 21.167969 12.078125 20.78125 12.589844 20.859375 13.140625 C 20.9375 13.691406 21.449219 14.078125 22 14 L 25 14 C 25.359375 14.003906 25.695313 13.816406 25.878906 13.503906 C 26.058594 13.191406 26.058594 12.808594 25.878906 12.496094 C 25.695313 12.183594 25.359375 11.996094 25 12 L 22 12 C 21.96875 12 21.9375 12 21.90625 12 C 21.875 12 21.84375 12 21.8125 12 C 21.78125 12 21.75 12 21.71875 12 Z M 5.15625 16.46875 C 5.125 16.476563 5.09375 16.488281 5.0625 16.5 C 4.941406 16.519531 4.824219 16.5625 4.71875 16.625 L 2.09375 18.125 C 1.609375 18.402344 1.441406 19.015625 1.71875 19.5 C 1.996094 19.984375 2.609375 20.152344 3.09375 19.875 L 5.71875 18.375 C 6.1875 18.175781 6.433594 17.660156 6.289063 17.171875 C 6.144531 16.683594 5.65625 16.378906 5.15625 16.46875 Z M 20.625 16.5 C 20.191406 16.554688 19.847656 16.882813 19.765625 17.3125 C 19.6875 17.742188 19.898438 18.171875 20.28125 18.375 L 22.90625 19.875 C 23.390625 20.152344 24.003906 19.984375 24.28125 19.5 C 24.558594 19.015625 24.390625 18.402344 23.90625 18.125 L 21.28125 16.625 C 21.082031 16.507813 20.851563 16.464844 20.625 16.5 Z M 8.3125 19.78125 C 8.019531 19.835938 7.769531 20.019531 7.625 20.28125 L 6.125 22.90625 C 5.847656 23.390625 6.015625 24.003906 6.5 24.28125 C 6.984375 24.558594 7.597656 24.390625 7.875 23.90625 L 9.375 21.28125 C 9.566406 20.957031 9.558594 20.550781 9.351563 20.234375 C 9.148438 19.917969 8.78125 19.742188 8.40625 19.78125 C 8.375 19.78125 8.34375 19.78125 8.3125 19.78125 Z M 17.34375 19.78125 C 17.011719 19.828125 16.726563 20.039063 16.582031 20.339844 C 16.4375 20.640625 16.453125 20.992188 16.625 21.28125 L 18.125 23.90625 C 18.402344 24.390625 19.015625 24.558594 19.5 24.28125 C 19.984375 24.003906 20.152344 23.390625 19.875 22.90625 L 18.375 20.28125 C 18.171875 19.914063 17.757813 19.714844 17.34375 19.78125 Z M 12.90625 20.96875 C 12.863281 20.976563 12.820313 20.988281 12.78125 21 C 12.316406 21.105469 11.988281 21.523438 12 22 L 12 25 C 11.996094 25.359375 12.183594 25.695313 12.496094 25.878906 C 12.808594 26.058594 13.191406 26.058594 13.503906 25.878906 C 13.816406 25.695313 14.003906 25.359375 14 25 L 14 22 C 14.011719 21.710938 13.894531 21.433594 13.6875 21.238281 C 13.476563 21.039063 13.191406 20.941406 12.90625 20.96875 Z"></path>
            </svg>
            <img
              onClick={() => changeLanguage("es")}
              className="h-4 w-5 cursor-pointer"
              src="https://img.freepik.com/vector-gratis/ilustracion-bandera-espana_53876-18168.jpg"
              alt="es"
            />
            <img
              onClick={() => changeLanguage("en")}
              className="h-4 w-5 cursor-pointer"
              src="https://img.freepik.com/vector-gratis/ilustracion-bandera-reino-unido_53876-18166.jpg"
              alt="en"
            />
            <img
              onClick={() => changeLanguage("pt")}
              className="h-4 w-5 cursor-pointer"
              src="https://img.freepik.com/vector-gratis/ilustracion-bandera-brasil_53876-27017.jpg"
              alt="pt"
            />

            <button
              className="sm:hidden"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden w-full flex flex-col items-center bg-gray-300 dark:bg-slate-800 border-t border-gray-400 dark:border-slate-700">
            <Link
              className="py-2 w-full text-center"
              to="/"
              onClick={() => {
                handleHome();
                setMobileMenuOpen(false);
              }}
            >
              {t("navHome")}
            </Link>
            <Link
              className="py-2 w-full text-center"
              to="/projects"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("navProject")}
            </Link>
            <Link
              className="py-2 w-full text-center"
              to="/#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("contact")}
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
