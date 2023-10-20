import { useNavigate, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-center bg-slate-400 rounded">
      <ul className="navbar flex justify-between items-center bg-slate-600 border-4 border-white rounded-3xl p-2 w-11/12">
        <li className="text-white">
          <Link to="/ships">Ships</Link>
        </li>
        <li className="text-white">
          <Link to="/haulers">Haulers</Link>
        </li>
        <li className="text-white">
          <Link to="/docks">Docks</Link>
        </li>
      </ul>
    </div>
  );
};
