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

export const StockProject = () => {
  const { t } = useTranslation();

  return (
    <div className="flex mt-5 flex-col items-center gap-24">
      <div className=" w-4/6  rounded-md">
        <div className=" bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <h1 className="text-xl">{t("stockProjTitle1")}</h1>
        </div>
        <div className="p-5 bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <p>{t("stockProjDesc1")}</p>
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className=" bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <h1 className="text-xl">{t("stockProjTitle2")}</h1>
        </div>
        <div className="p-5 bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <p>{t("stockProjDesc2")}</p>
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className=" bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <h1 className="text-xl">{t("stockProjTitle3")}</h1>
        </div>
        <div className="p-5 bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <p>{t("stockProjDesc3")}</p>
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj1")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={inicioBlanco}
            alt="Mi inicio"
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj2")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={inicioNegro}
            alt="Mi inicio oscuro"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj3")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={AddProducto}
            alt="Añadir producto"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj3")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={AddProducto}
            alt="Añadir producto"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj4")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={TableProducto}
            alt="Table"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj5")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={EditProduct}
            alt="Modal edit"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj6")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={DeleteProduct}
            alt="Modal delete"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj7")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={SearchProducts}
            alt="Search products"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj8")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={NuevaVenta}
            alt="Nueva venta"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj9")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={NuevaVentaList}
            alt="Lista nueva venta"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj10")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={NuevaVentaProducts}
            alt="Productos nueva venta"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj11")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={NuevaVentaSuccess}
            alt="Nueva venta exitosa"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj12")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={HistorialVentas}
            alt="Historial ventas"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj13")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={HistorialDetalles}
            alt="Detalles historial"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj14")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={HistorialID}
            alt="Busqueda venta id"
            width={1000}
          />
        </div>
      </div>

      <div className="border border-black w-4/6 dark:border-white rounded-md">
        <div className="bg-stone-400 dark:bg-slate-800 p-3 rounded-t-md">
          <p>{t("stockProj15")}</p>
        </div>
        <div className="bg-stone-300 dark:bg-slate-700 rounded-b-md">
          <img
            className="border border-black dark:border-white"
            src={HistorialFecha}
            alt="Busqueda venta fecha"
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};
