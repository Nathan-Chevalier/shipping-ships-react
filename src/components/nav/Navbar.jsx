import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-center bg-slate-400 rounded">
      <ul className="flex justify-around items-center bg-slate-600 border-4 border-white rounded-3xl p-2 w-11/12">
        <li className="text-white">
          <Link to="/shippingships">Ships</Link>
        </li>
        <li className="text-white">
          <Link to="/haulingships">Haulers</Link>
        </li>
        <li className="text-white">
          <Link to="/docks">Docks</Link>
        </li>
      </ul>
    </div>
  );
};
