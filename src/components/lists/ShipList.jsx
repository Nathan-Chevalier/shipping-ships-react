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

      const updatedShips = await getAllShips(); // ? useState page refresh after delete
      setShips(updatedShips);
    } catch (error) {
      console.error("Error deleting ship:", error);
    }
  };

  return (
    <div className="flex flex-col self-center bg-gradient-to-r from-slate-700/70 to-slate-700/60 rounded-3xl scale-auto w-max justify-center items-center mt-12">
      <div className="ship-view-container flex flex-col items-center justify-center my-4">
        <div className="ship-view-header"></div>
        <div className="ship-view-list flex flex-col gap-2">
          <div className="flex justify-apart items-center bg-cyan-700/90 bg-wave-a px-12 py-2 mx-12 rounded-lg">
            <span className="ship-name text-white font-bold text-xl  py-2 px-20">
              SHIP NAME
            </span>
            <span className="hauler-name text-white font-bold text-xl  py-2 px-20">
              HAULER NAME
            </span>
            <div className="header-empty text-white font-bold text-xl  py-2 px-20">
              {" "}
            </div>
          </div>
          {ships.map((ship) => {
            const shipID = ship.id;

            return (
              <div
                className="flex justify-between items-center bg-cyan-900/90 px-12 py-2 mx-12 rounded-lg"
                key={shipID}
              >
                <span className="ship-name text-white bg-fade-b w-[210px]">
                  {ship.name}
                </span>
                <span className="hauler-name text-white place-self-start bg-fade-b w-[300px]">
                  {ship.hauler.name}
                </span>
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
