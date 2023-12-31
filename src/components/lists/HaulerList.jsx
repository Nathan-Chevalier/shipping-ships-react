import { useState, useEffect } from "react";
import { getAllHaulers } from "../../services/fetchService";
import { useNavigate } from "react-router-dom";

export const HaulerList = () => {
  const navigate = useNavigate();
  const [haulers, setHaulers] = useState([]);

  useEffect(() => {
    getAllHaulers().then((haulersArray) => {
      setHaulers(haulersArray);
    });
  }, []);

  return (
    <div className="flex flex-col self-center bg-gradient-to-r from-slate-700/30 to-slate-400/30 rounded-3xl scale-auto w-max justify-center items-center mt-12">
      <div className="haulers-view-container flex flex-col items-center justify-center h-2/6 my-4">
        <div className="haulers-view-header"></div>
        <div className="haulers-view-list flex flex-col gap-3">
          {haulers.map((hauler) => {
            return (
              <div key={hauler.id} className="hauler-row flex justify-between w-[500px] rounded-2xl bg-wave-a py-4 px-12">
                <span className="hauler-name bg-fade-b text-white">{hauler.name}</span>
                <button
                  className="btn-edit bg-fade-b"
                  onClick={() => {
                    navigate(`/haulingships/${hauler.id}`);
                  }}
                >
                  EDIT
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
