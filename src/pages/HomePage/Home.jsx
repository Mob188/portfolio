import { useEffect, useState } from "react";
import { Description } from "../../components/description/descrtiption";
import { AboutMe } from "../../components/aboutMe/aboutMe";
import { Technologies } from "../../components/technologies/technologies";
import { Skills } from "../../components/skills/skills";
import { ProjectsComponent } from "../../components/projectsComponent/projectsComponent";
import { useTranslation } from "react-i18next";
import { ModalRedirect } from "../../components/modals/modalRedirect";

export const Home = () => {
  const { t } = useTranslation();
  const [showRepos, setShowRepos] = useState(false);

  const initDivs = [
    {
      id: 1,
      x: 20,
      y: 20,
      width: 400,
      height: 400,
      content: <AboutMe />,
    },
    {
      id: 4,
      x: 430,
      y: 20,
      width: 400,
      height: 100,
      content: <ProjectsComponent />,
    },
    {
      id: 2,
      x: 20,
      y: 430,
      width: 400,
      height: 210,
      content: <Technologies />,
    },
    {
      id: 3,
      x: 430,
      y: 130,
      width: 400,
      height: 350,
      content: <Skills />,
    },
  ];
  const [divs, setDivs] = useState(initDivs);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("divId", id);
  };

  const handleDrop = (e, targetId) => {
    const draggedId = e.dataTransfer.getData("divId");

    if (draggedId == targetId) return;

    setDivs((prev) => {
      const draggedDiv = prev.find((div) => div.id === parseInt(draggedId));
      const targetDiv = prev.find((div) => div.id === targetId);
      let newPosDrag;
      let newPosTarg;

      const newPosDivs = prev.map((div) => {
        if (div.id === parseInt(draggedId)) {
          newPosDrag = { ...div, x: targetDiv.x, y: targetDiv.y };
          return newPosDrag;
        }
        if (div.id === targetId) {
          newPosTarg = { ...div, x: draggedDiv.x, y: draggedDiv.y };
          return newPosTarg;
        }
        return div;
      });
      return adjustPosition(newPosDivs);
    });
  };

  const adjustPosition = (divs) => {
    const spacing = 10;
    const sortedDivs = [...divs].sort((a, b) => a.x - b.x || a.y - b.y);
    const containerWidth = 880;
    console.log(divs);
    const updatedDivs = sortedDivs.map((div, index) => {
      let adjustedX = div.x;
      let adjustedY = div.y;
      console.log(sortedDivs);

      for (let i = 0; i < index; i++) {
        const other = sortedDivs[i];
        if (other.x === div.x && other.y < div.y && other.id !== div.id) {
          adjustedY = other.y + other.height + spacing;
          break;
        }
      }

      return { ...div, x: adjustedX, y: adjustedY };
    });
    return updatedDivs;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const toggleRepos = (e) => {
    e.preventDefault();
    setShowRepos(!showRepos);
  };

  return (
    <>
      <Description />
      <div className="flex justify-center mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-replace"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 3m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
          <path d="M15 15m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
          <path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
          <path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
        </svg>
        <p>{t("DescMove")}</p>
      </div>

      <div
        className="relative left-1/2 -translate-x-1/2"
        style={{ width: "880px" }}
        onMouseMove={handleDragOver}
      >
        {divs.map((div) => (
          <div
            key={div.id}
            className="border border-white/20 rounded-xl backdrop-blur-md shadow-lg p-5 flex flex-col items-center bg-gray-300 w-96 dark:bg-[#131e2c] outline-black dark:outline-white absolute cursor-pointer transition-transform"
            style={{
              transform: `translate(${div.x}px, ${div.y}px)`,
              width: `${div.width}px`,
              height: `${div.height}px`,
            }}
            draggable
            onDragStart={(e) => handleDragStart(e, div.id)}
            onDrop={(e) => handleDrop(e, div.id)}
            onDragOver={handleDragOver}
          >
            {div.content}
          </div>
        ))}
      </div>
    </>
  );
};
