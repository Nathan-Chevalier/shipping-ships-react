import { useState, useEffect } from "react";
import {
  getAllDocks,
  getAllHaulers,
  getAllShips,
} from "../../services/fetchService";

export const AllList = () => {
  const [ships, setShips] = useState([]);
  const [haulers, setHaulers] = useState([]);
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getAllShips().then((shipsArray) => {
      setShips(shipsArray);
    });
    getAllHaulers().then((haulersArray) => {
      setHaulers(haulersArray);
    });
    getAllDocks().then((docksArray) => {
      setDocks(docksArray);
    });
  }, []);

  return (
    <div className="flex flex-col self-center bg-gradient-to-r from-slate-700/30 to-slate-400/30 rounded-3xl scale-auto w-max justify-center items-center mt-12">
      <div className="ships-container flex flex-col items-center justify-center h-2/6 my-4">
        <div className="title-header text-white text-3xl bg-cyan-900 py-4 px-8 rounded-t-2xl border-cyan-200 border-4">
          Shipping Ships
        </div>
        <div className="ships-list text-white columns-4 bg-cyan-500/70 border-cyan-200 border-4 p-5 rounded-3xl">
          {ships.map((ship) => {
            return (
              <div
                key={ship.id}
                className="bg-cyan-800 rounded-xl py-2 px-4 m-2"
              >
                <span>{ship.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="haulers-container flex flex-col items-center justify-center h-2/6 my-4">
        <div className="title-header text-white text-3xl bg-sky-900 py-4 px-8 rounded-t-2xl border-sky-200 border-4">
          Hauling Haulers
        </div>
        <div className="ships-list text-white columns-4 bg-sky-500/70 border-sky-200 border-4 p-5 rounded-3xl">
          {haulers.map((hauler) => {
            return (
              <div
                key={hauler.id}
                className=" bg-sky-800 rounded-xl py-2 px-4 m-2"
              >
                <span>{hauler.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="docks-container flex flex-col items-center justify-center h-2/6 my-4">
        <div className="title-header text-white text-3xl bg-blue-900 py-4 px-8 rounded-t-2xl border-blue-200 border-4">
          Docking Docks
        </div>
        <div className="ships-list text-white columns-4 bg-blue-500/70 border-blue-200 border-4 p-5 rounded-3xl">
          {docks.map((dock) => {
            return (
              <div
                key={dock.id}
                className="bg-blue-800 rounded-xl py-2 px-4 m-2"
              >
                <span>{dock.location}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
