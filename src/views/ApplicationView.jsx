import { Route, Routes, Outlet } from "react-router-dom";
import { Navbar } from "../components/nav/Navbar";
import { HaulerList } from "../components/lists/HaulerList";
import { ShipList } from "../components/lists/ShipList";
import { DockList } from "../components/lists/DockList";
import { AllList } from "../components/lists/AllList";

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
        <Route path="haulingships" element={<HaulerList />}>
          <Route path="edit" />
        </Route>
        <Route path="docks" element={<DockList />} />
      </Route>
    </Routes>
  );
};
