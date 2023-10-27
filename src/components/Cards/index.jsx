import { Link } from "react-router-dom";
import DivH2 from "../DivH2";
import "./style.css";

const Cards = ({evento}) => {
  return (
    <>
    {
      evento ? 
      <div id="divContainer">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={evento.image ? evento.image : "No hay imagen disponible"}
          alt={evento.place}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{evento.name ? evento.name : "No hay nombre disponible"}</div>
          <p className="text-gray-700 text-base">
            {evento.description ? evento.description : "No hay descripción disponible"}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-center">
          <span
            id="span1"
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white"
          >
            <i
              className="fa-solid fa-clock fa-beat"
              style={{ color: "#ffffff" }}
            />{" "}
            {evento.date}
          </span>
          <span
            id="span2"
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white"
          >
            <i
              className="fa-solid fa-location-dot fa-beat"
              style={{ color: "#ffffff" }}
            />{" "}
            {evento.place}
          </span>
        </div>
        <div className="mb-12 pb-1 pt-1 text-center">
          <Link to={"/src/pages/Details/index.jsx"}>
          <button
            id="btn-seeMore"
            className="mb-3 inline-block rounded px-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Details
          </button>
          </Link>
        </div>
      </div>
    </div>
    :
    <>
    <div>
      <h2>Evento no disponible</h2>
    </div>
    </>
    }
    </>
  );
};

export default Cards;
