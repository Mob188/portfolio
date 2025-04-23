import { useTranslation } from "react-i18next";

export const ProjectsComponent = () => {
  const {t} = useTranslation();

  return (
    <div className="w-full h-full flex justify-around items-center" onClick={() => window.location.href = '/projects'}>
      <h1 className="text-xl font-bold">{t("navProject")}</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l14 0" />
        <path d="M13 18l6 -6" />
        <path d="M13 6l6 6" />
      </svg>
    </div>
  );
};
