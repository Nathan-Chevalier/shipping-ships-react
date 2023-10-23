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
    <div className="flex flex-col self-center">
      <div className="dock-view-container">
        <div className="dock-view-header"></div>
        <div className="dock-view-list">
          {docks.map((dock) => {
            return (
              <div key={dock.id} className="dock-row flex-col">
                <div className="dock-info">
                  <span>{dock?.location}</span>
                  <span>{dock?.capacity}</span>
                </div>
                <div className="haulers-list">
                  {dock?.haulers.map((hauler) => {
                    return (
                      <div key={hauler.id} className="hauler-row flex">
                        <span className="list-item">{hauler.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
