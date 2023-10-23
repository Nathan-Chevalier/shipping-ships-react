import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHaulerById, getAllDocks } from "../../services/fetchService";
import { useNavigate } from "react-router-dom";

export const EditHauler = () => {
  const navigate = useNavigate();
  const { haulerId } = useParams();

  const [userValues, setUserValues] = useState({ id: 0, name: "", dock_id: 0 });
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getHaulerById(haulerId).then((haulerObj) => {
      setUserValues(haulerObj);
    });
    getAllDocks().then((docksArray) => {
      setDocks(docksArray);
    });
  }, [haulerId]);

  const handleEditHauler = (event) => {
    event.preventDefault();
    const finalValues = {
      id: userValues.id,
      name: userValues.name,
      dock_id: userValues.dock_id,
    };
    if (finalValues.id && finalValues.name && finalValues.dock_id) {
      fetch(`http://localhost:8000/haulers/${haulerId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalValues),
      }).then(() => {
        navigate(`/haulingships`);
      });
    } else {
      alert("Please finish filling out the form!");
    }
  };

  return (
    <div className="hauler-container">
      <form className="edit-hauler flex flex-col">
        <fieldset className="edit-name">
          <label className="text-lg">Hauler:</label>
          <input
            id="name"
            type="text"
            value={userValues.name}
            onChange={(event) => {
              const copy = { ...userValues };
              copy.name = event.target.value;
              setUserValues(copy);
            }}
          />
        </fieldset>
        <fieldset className="edit-dock">
          <label>Dock:</label>
          <select
            value={userValues.dock_id}
            onChange={(event) => {
              const copy = { ...userValues };
              copy.dock_id = event.target.value;
              setUserValues(copy);
            }}
          >
            <option value={0}>Select dock...</option>
            {docks.map((dockObj) => {
              return (
                <option
                  key={dockObj.id}
                  value={dockObj.id}
                  className="dock-select-option"
                >
                  {dockObj.location}
                </option>
              );
            })}
          </select>
        </fieldset>
        <button
          className="btn-edit"
          onClick={(event) => {
            handleEditHauler(event);
          }}
        >
          SAVE CHANGES
        </button>
      </form>
    </div>
  );
};
