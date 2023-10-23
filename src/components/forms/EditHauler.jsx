import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHaulerById } from "../../services/fetchService";
import { useNavigate } from "react-router-dom";

export const EditHauler = () => {
  const navigate = useNavigate();
  const { haulerId } = useParams();

  const [userValues, setUserValues] = useState({});

  useEffect(() => {
    getHaulerById(haulerId).then((haulerObj) => {
      setUserValues(haulerObj);
    });
  }, [haulerId]);

  return (
    <div className="hauler-container">
      <form className="edit-hauler flex flex-col">
        <fieldset className="edit-name">{userValues.name}</fieldset>
        <fieldset className="edit-dock">{userValues.dock_id}</fieldset>
      </form>
    </div>
  );
};
