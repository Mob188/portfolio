import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const [copiado, setCopiado] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("marcelopardo188@gmail.com");
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1500);
  };

  return (
    <div
      id="contact"
      className="scroll-mt-32 mt-10 flex justify-center pt-10 pb-16"
    >
      <div className="flex flex-col gap-4 text-left max-w-xl w-full">
        <h1 className="text-3xl font-bold">{t("contact")}</h1>
        <p className="text-2xl text-gray-700">{t("contactSub")}</p>
        <div className="flex items-center pt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icon-tabler-mail"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
            <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
          </svg>
          <p className="ml-5 text-lg text-blue-600">
            marcelopardo188@gmail.com
          </p>
          <span
            title="Copiar"
            className="cursor-pointer select-none"
            onClick={handleCopy}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-copy"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
              <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
            </svg>
          </span>
          {copiado && (
            <div className="bg-gray-800 text-white text-sm px-3 py-1 rounded shadow ml-1">
              ¡Copiado!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
