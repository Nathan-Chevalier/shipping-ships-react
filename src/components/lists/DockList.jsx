import { useState, useEffect } from "react";
import { getAllDocks } from "../../services/fetchService";

export const DockList = () => {
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getAllDocks().then((docksArray) => {
      setDocks(docksArray);
    });
  }, []);

  return (
    <div className="flex flex-col self-center bg-gradient-to-r from-slate-700/30 to-slate-400/30 rounded-3xl scale-auto w-max justify-center items-center mt-12">
      <div className="dock-view-container flex flex-col items-center justify-center my-4">
        <div className="dock-view-header"></div>
        <div className="dock-view-list flex flex-col gap-2">
          {docks.map((dock) => {
            return (
              <div key={dock.id} className="dock-row flex-col">
                <div className="dock-info flex justify-between items-center bg-cyan-900/90 px-12 py-2 mx-12 rounded-lg">
                  <span className="">{dock?.location}</span>
                  <span className="">{dock?.capacity}</span>
                </div>
                <ul className="haulers-list">
                  {dock?.haulers.map((hauler) => {
                    return (
                      <li key={hauler.id} className="hauler-row flex">
                        <span className="list-item">{hauler.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
