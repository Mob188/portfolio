import { useTranslation } from "react-i18next";
import inicioBlanco from "../../assets/images/d149fc30-dcff-46f8-b8f7-5dc84bf7d89b.jpg";
import inicioNegro from "../../assets/images/60f80134-9f0f-4351-8ba9-fdb74622d850.jpg";
import AddProducto from "../../assets/images/dfee1beb-899d-4ac4-ad2f-2cbb659e8723.jpg";
import TableProducto from "../../assets/images/a99254ae-404c-4bb6-a54c-2f68d88172b4.jpg";
import EditProduct from "../../assets/images/bf9c750c-fb12-4057-abc4-3247c3cd5621.jpg";
import DeleteProduct from "../../assets/images/e8076181-21c5-42ee-98ef-94d7a91f115c.jpg";
import SearchProducts from "../../assets/images/76a917f7-73d1-4f98-9f57-185cfa780123.jpg";
import NuevaVenta from "../../assets/images/9862a0ed-9972-4363-93fa-b7abca11d96c.jpg";
import NuevaVentaList from "../../assets/images/e6735741-4122-466a-b577-8037b8025fad.jpg";
import NuevaVentaProducts from "../../assets/images/cd17075a-3cd1-44fd-a18c-abf44ca70824.jpg";
import NuevaVentaSuccess from "../../assets/images/ca45a9b8-fac0-45fe-a994-e2c8817df17e.jpg";
import HistorialVentas from "../../assets/images/b18df852-2d55-40a6-bc7a-42967b7a61af.jpg";
import HistorialDetalles from "../../assets/images/d60019e4-2496-4d61-9c7c-36ce73218017.jpg";
import HistorialID from "../../assets/images/6290c75f-1c32-494c-a051-44f48a7e2138.jpg";
import HistorialFecha from "../../assets/images/45e67158-6023-4d95-b3a8-781bd72c84f6.jpg";
import { DivisorLine } from "../../components/divisorLine/divisorLine";
import { ProjectDescription } from "../../components/projectDescription/projectDescription";

export const StockProject = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col pt-10 pb-10 items-center gap-5">
      <div className=" w-4/6 px-5 gap-2">
        <div className="flex items-center px-5 gap-2">
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-target"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          </svg>
          <h1 className="text-xl">{t("stockProjTitle1")}</h1>
        </div>
        <div className="p-5">
          <p className="text-balance">{t("stockProjDesc1")}</p>
        </div>
      </div>

      <DivisorLine />

      <div className=" w-4/6  px-5 gap-2">
        <div className="flex items-center px-5 gap-2">
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-tool"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
          </svg>
          <h1 className="text-xl">{t("stockProjTitle2")}</h1>
        </div>
        <div className="p-5">
          <p className="text-balance">{t("stockProjDesc2")}</p>
        </div>
      </div>

      <DivisorLine />

      <div className=" w-4/6  p-5">
        <div className="flex items-center  px-5 gap-2">
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
            <path d="M12 12l0 .01" />
            <path d="M3 13a20 20 0 0 0 18 0" />
          </svg>
          <h1 className="text-xl">{t("stockProjTitle3")}</h1>
        </div>
        <div className="p-5">
          <p className="text-balance">{t("stockProjDesc3")}</p>
        </div>
      </div>

      <DivisorLine />

      <ProjectDescription title={t("stockProj1")} image={inicioBlanco} />

      <DivisorLine />

      <ProjectDescription title={t("stockProj2")} image={inicioNegro} />

      <DivisorLine />

      <ProjectDescription title={t("stockProj3")} image={AddProducto} />

      <DivisorLine />

      <ProjectDescription title={t("stockProj4")} image={TableProducto} />

      <DivisorLine />

      <ProjectDescription title={t("stockProj5")} image={EditProduct} />

      <DivisorLine />

      <ProjectDescription title={t("stockProj6")} image={DeleteProduct} />

      <DivisorLine />

      <ProjectDescription title={t("stockProj7")} image={SearchProducts} />

      <DivisorLine />

      <ProjectDescription title={t("stockProj8")} image={NuevaVenta} />

      <DivisorLine />

      <ProjectDescription title={t("stockProj9")} image={NuevaVentaList} />

      <DivisorLine />

      <ProjectDescription title={t("stockProj10")} image={NuevaVentaProducts} />

      <DivisorLine />

      <ProjectDescription title={t("stockProj11")} image={NuevaVentaSuccess} />

      <DivisorLine />

      <ProjectDescription title={t("stockProj12")} image={HistorialVentas} />

      <DivisorLine />
      
      <ProjectDescription title={t("stockProj13")} image={HistorialDetalles} />

      <DivisorLine />

      <ProjectDescription title={t("stockProj14")} image={HistorialID} />

      <DivisorLine />

      <ProjectDescription title={t("stockProj15")} image={HistorialFecha} />
    </div>
  );
};
