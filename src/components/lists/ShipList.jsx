import { useState, useEffect } from "react";
import { getAllShips } from "../../services/fetchService";

export const ShipList = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getAllShips().then((shipsArray) => {
      setShips(shipsArray);
    });
  }, []);

  const handleDeleteShip = async (ship) => {
    try {
      await fetch(`http://localhost:8000/ships/${ship}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      const updatedShips = await getAllShips();
      setShips(updatedShips);
    } catch (error) {
      console.error("Error deleting ship:", error);
    }
  };

  return (
    <div className="flex flex-col self-center bg-gradient-to-r from-slate-700/30 to-slate-400/30 rounded-3xl scale-auto w-max justify-center items-center mt-12">
      <div className="ship-view-container flex flex-col items-center justify-center h-2/6 my-4">
        <div className="ship-view-header"></div>
        <div className="ship-view-list">
          {ships.map((ship) => {
            const shipID = ship.id;
            return (
              <div key={shipID}>
                <span className="ship-name">{ship.name}</span>
                <span className="hauler-name">{ship.hauler.name}</span>
                <button
                  className="btn-delete"
                  onClick={() => {
                    handleDeleteShip(shipID);
                  }}
                >
                  DELETE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
