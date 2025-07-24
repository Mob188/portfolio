import { useEffect, useState } from "react";
import { Description } from "../../components/description/descrtiption";
import { AboutMe } from "../../components/aboutMe/aboutMe";
import { Technologies } from "../../components/technologies/technologies";
import { Skills } from "../../components/skills/skills";
import { ProjectsComponent } from "../../components/projectsComponent/projectsComponent";
import { useTranslation } from "react-i18next";
import { Contact } from "../../components/contact/contact";
import { useFetcher, useLocation } from "react-router-dom";

export const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [divHeight, setDivHeight] = useState(660);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initDivs =
    screenWidth < 640
      ? [
          {
            id: 1,
            x: (screenWidth - 360) / 2,
            y: 20,
            width: 360,
            height: 420,
            content: <AboutMe />,
          },
          {
            id: 4,
            x: (screenWidth - 360) / 2,
            y: 460,
            width: 360,
            height: 100,
            content: <ProjectsComponent />,
          },
          {
            id: 2,
            x: (screenWidth - 360) / 2,
            y: 580,
            width: 360,
            height: 210,
            content: <Technologies />,
          },
          {
            id: 3,
            x: (screenWidth - 360) / 2,
            y: 810,
            width: 360,
            height: 350,
            content: <Skills />,
          },
        ]
      : [
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

  useEffect(() => {
    setDivs(initDivs);
  }, [screenWidth]); // actualiza divs si cambia tamaño pantalla

  useEffect(() => {
    setDivHeight(Math.max(...divs.map((div) => div.y + div.height)) + 20);
  }, [divs]);

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

    const updatedDivs = sortedDivs.map((div, index) => {
      let adjustedX = div.x;
      let adjustedY = div.y;

      for (let i = 0; i < index; i++) {
        const other = sortedDivs[i];
        if (other.x === div.x && other.y < div.y && other.id !== div.id) {
          adjustedY = other.y + other.height + spacing;
          break;
        }
      }
      setDivHeight(Math.max(adjustedY));
      return { ...div, x: adjustedX, y: adjustedY };
    });

    return updatedDivs;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleTouchStart = (e, id) => {
    const touch = e.touches[0];
    e.dataTransfer = { setData: () => {} }; // Evita errores con drag
    handleDragStart({ dataTransfer: { setData: () => {} } }, id);
    setCurrentDrag({ id, startX: touch.clientX, startY: touch.clientY });
  };

  const handleTouchMove = (e) => {
    if (!currentDrag) return;
    const touch = e.touches[0];
    const dx = touch.clientX - currentDrag.startX;
    const dy = touch.clientY - currentDrag.startY;

    setDivs((prev) =>
      prev.map((div) =>
        div.id === currentDrag.id
          ? { ...div, x: div.x + dx, y: div.y + dy }
          : div
      )
    );
    setCurrentDrag((prev) => ({
      ...prev,
      startX: touch.clientX,
      startY: touch.clientY,
    }));
  };

  const handleTouchEnd = () => {
    setCurrentDrag(null);
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-replace"
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
        className="relative left-1/2 -translate-x-1/2 max-w-full"
        style={{
          width: screenWidth < 640 ? "100%" : "880px",
          paddingBottom: `${divHeight}px`,
          paddingBottom: `${divHeight}px`,
        }}
        onMouseMove={handleDragOver}
      >
        {divs.map((div) => (
          <div
            key={div.id}
            className="border border-white/20 rounded-xl backdrop-blur-md shadow-lg p-5 flex flex-col items-center bg-gray-300 w-96 dark:bg-[#131e2c] outline-black dark:outline-white absolute z-10 cursor-pointer transition-transform"
            style={{
              transform: `translate(${div.x}px, ${div.y}px)`,
              width: `${div.width}px`,
              height: `${div.height}px`,
            }}
            draggable
            onDragStart={(e) => handleDragStart(e, div.id)}
            onDrop={(e) => handleDrop(e, div.id)}
            onDragOver={handleDragOver}
            onTouchStart={(e) => handleTouchStart(e, div.id)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {div.content}
          </div>
        ))}
      </div>

      <Contact />
    </>
  );
};
