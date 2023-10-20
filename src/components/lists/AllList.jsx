import { useState, useEffect } from "react";
import {
  getAllDocks,
  getAllHaulers,
  getAllShips,
} from "../../services/fetchService";

export const AllList = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getAllShips().then((shipsArray) => {
      setShips(shipsArray);
    });
  }, []);

  return (
    <div className="flex flex-col bg-gradient-to-r from-slate-700 to-slate-400 rounded-3xl">
      <div className="ships-container flex flex-col items-center justify-center h-2/6 my-4">
        <div className="title-header text-white text-3xl bg-cyan-900 py-4 px-8 rounded-t-2xl border-cyan-200 border-4">
          Shipping Ships
        </div>
        <div className="ships-list text-white columns-4 bg-cyan-500/70 border-cyan-200 border-4 p-5 rounded-3xl">
          {ships.map((ship) => {
            return (
              <div
                key={ship.id}
                className="list-item bg-cyan-800 rounded-xl py-2 px-4 m-2"
              >
                <span>{ship.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
