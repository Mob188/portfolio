import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-lg font-bold">{t("aboutTitle")}</h1>
      <p>{t("aboutText")}</p>
    </>
  );
};
