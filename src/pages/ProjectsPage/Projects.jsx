import { useState } from "react";
import { TableProjects } from "../../components/Tables/TableProjects";
import Project1 from "../../assets/images/a99254ae-404c-4bb6-a54c-2f68d88172b4.jpg";
import { useTranslation } from "react-i18next";
import { ModalRedirect } from "../../components/modals/modalRedirect";

export const Projects = () => {
  const { t } = useTranslation();
  const [showRepos, setShowRepos] = useState(false);

  const handleShowRepos = (e) => {
    e.preventDefault();
    setShowRepos((prev) => !prev);
  };

  const closeModal = () => {
    setShowRepos(false);
  };

  return (
    <div className="flex mt-20 justify-center mx-20">
      <div className="  dark:bg-[#131e2c] flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 border border-white/20 rounded-xl backdrop-blur-md shadow-lg">
        <div className="h-full p-3 flex flex-col items-center justify-around w-1/2">
          <h1 className="text-xl font-bold">{t("projectTitle")}</h1>
          <p>{t("projectDesc")}</p>
          <p className="text-sm font-bold text-blue-700 mt-5">
            {t("projectSub")}
          </p>
          <div className="flex w-full justify-around mt-5">
            <div title="Repository" onClick={handleShowRepos} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-presentation"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 4l18 0" />
                <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
                <path d="M12 16l0 4" />
                <path d="M9 20l6 0" />
                <path d="M8 12l3 -3l2 2l3 -3" />
              </svg>
            </div>
            <a href="/stockProject" title="Showcase">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-file-orientation"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2" />
                <path d="M13 20h5a2 2 0 0 0 2 -2v-5" />
                <path d="M15 22l-2 -2l2 -2" />
                <path d="M18 15l2 -2l2 2" />
              </svg>
            </a>
          </div>
        </div>

        <div className=" h-full w-1/2">
          <img
            src={Project1}
            alt="Stock project"
            className="rounded-r-2xl h-full"
          />
        </div>
      </div>
      {showRepos && <ModalRedirect closeModal={closeModal} />}
    </div>
  );
};
