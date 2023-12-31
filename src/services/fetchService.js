export const getAllShips = () => {
  return fetch(`http://localhost:8000/ships?_expand=hauler`).then((res) =>
    res.json()
  );
};

export const getAllHaulers = () => {
  return fetch(`http://localhost:8000/haulers`).then((res) => res.json());
};

export const getAllDocks = () => {
  return fetch(`http://localhost:8000/docks?_embed=haulers`).then((res) =>
    res.json()
  );
};

export const getHaulerById = (id) => {
  return fetch(`http://localhost:8000/haulers/${id}`).then((res) => res.json());
};
