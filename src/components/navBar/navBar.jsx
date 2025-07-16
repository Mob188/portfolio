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
      {/* Contenedor principal sin scroll horizontal */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-300 dark:bg-slate-800 border-b border-gray-400 dark:border-slate-700 overflow-hidden">
        <div className="max-w-screen-xl mx-auto h-10 px-4 flex items-center justify-between">
          {/* Izquierda - Perfil */}
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

          {/* Centro - Menú de navegación (solo en pantallas sm+) */}
          <nav className="hidden sm:flex space-x-6">
            <Link to="/" onClick={handleHome}>{t("navHome")}</Link>
            <Link to="/projects">{t("navProject")}</Link>
            <Link to="/#contact">{t("contact")}</Link>
          </nav>

          {/* Derecha - Temas, idiomas y hamburguesa */}
          <div className="flex items-center space-x-2">
            <svg
              onClick={toggleTheme}
              className="h-5 w-5 cursor-pointer dark:fill-white"
              viewBox="0 0 26 26"
            >
              <path d="M 12.90625 -0.03125 ... Z" />
            </svg>

            <img onClick={() => changeLanguage("es")} className="h-4 w-5 cursor-pointer" src="https://img.freepik.com/vector-gratis/ilustracion-bandera-espana_53876-18168.jpg" alt="es" />
            <img onClick={() => changeLanguage("en")} className="h-4 w-5 cursor-pointer" src="https://img.freepik.com/vector-gratis/ilustracion-bandera-reino-unido_53876-18166.jpg" alt="en" />
            <img onClick={() => changeLanguage("pt")} className="h-4 w-5 cursor-pointer" src="https://img.freepik.com/vector-gratis/ilustracion-bandera-brasil_53876-27017.jpg" alt="pt" />

            {/* Botón hamburguesa en móvil */}
            <button
              className="sm:hidden"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMobileMenuOpen && (
          <div className="sm:hidden w-full flex flex-col items-center bg-gray-300 dark:bg-slate-800 border-t border-gray-400 dark:border-slate-700">
            <Link className="py-2 w-full text-center" to="/" onClick={() => { handleHome(); setMobileMenuOpen(false); }}>{t("navHome")}</Link>
            <Link className="py-2 w-full text-center" to="/projects" onClick={() => setMobileMenuOpen(false)}>{t("navProject")}</Link>
            <Link className="py-2 w-full text-center" to="/#contact" onClick={() => setMobileMenuOpen(false)}>{t("contact")}</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;

