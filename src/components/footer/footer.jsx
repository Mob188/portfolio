import { useTranslation } from "react-i18next"

export const Footer = () =>{
    const {t} = useTranslation();

    const OpenRepo = () =>{
        window.open("https://github.com/Mob188/portfolio")
    }
    return(
        <div onClick={OpenRepo} className="cursor-pointer flex bg-gray-300 dark:bg-[#131e2c] py-2 items-center h-justify-center flex-col border-t-2  mt-auto dark:border-gray-600 border-black mb-0">
            <h1 className="text-xl">{t("footerTitle")}</h1>
            <p className="text-lg">{t("footerSub")}</p>
        </div>
    )
}