import { useState, useEffect } from "react";
import { getAllDocks } from "../../services/fetchService";

export const DockList = () => {
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getAllDocks().then((docksArray) => {
      setDocks(docksArray);
    });
  }, []);

  return <div className="docks-container flex flex-col self-center items-center bg-slate-950 text-white">
    <div className="docks-header">DOCKING DOCKS</div>
    <ul className="first:bg-slate-400 bg-slate-600">
      {docks.map((dock)=> {
        return <div className="flex" key={dock.id}>{dock.location}</div>
      })}
    </ul>
  </div>;
};
