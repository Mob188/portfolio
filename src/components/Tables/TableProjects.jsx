import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ChangeTheme } from "../../context/Context";

export const TableProjects = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ChangeTheme);

  return (
    <table className="border-collapse border-2 mt-16 dark:border-white border-black">
      <thead>
        <tr>
          <th className="py-2 dark:bg-slate-800 bg-gray-300">
            {t("titleTable")}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <a href="/stockProject">
            <td className="p-3">
              <h1 className="text-xl ">{t("proyectTitle")}</h1>
              <h3 className="text-xs text-cyan-500">{t("proyectSub")}</h3>
              <p>{t("proyectDesc")}</p>
            </td>
          </a>
        </tr>
      </tbody>
    </table>
  );
};
