import { Route, Routes, Outlet } from "react-router-dom";
import { Navbar } from "../components/nav/Navbar";
import { HaulerList } from "../components/lists/HaulerList";
import { ShipList } from "../components/lists/ShipList";
import { DockList } from "../components/lists/DockList";
import { AllList } from "../components/lists/AllList";
import { EditHauler } from "../components/forms/EditHauler";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route index element={<AllList />} />
        <Route path="shippingships" element={<ShipList />} />
        <Route path="haulingships" element={<HaulerList />} />

        <Route path="haulingships/:haulerId" element={<EditHauler />} />
        <Route path="docks" element={<DockList />} />
      </Route>
    </Routes>
  );
};
