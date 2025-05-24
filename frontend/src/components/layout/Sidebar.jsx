import { Link, useLocation } from "react-router-dom";
import {
  XMarkIcon,
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import shipLogo from "../../assets/ship-logo.svg";
import { Ship } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Ships", href: "/ships", icon: Ship },
  { name: "Profile", href: "/profile", icon: UserIcon },
];

const Sidebar = ({ mobile = false, onClose }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <Link to="/dashboard" className="flex items-center">
          <img src={shipLogo} alt="Maritime Ops" className="h-8 w-auto" />
          <span className="ml-2 text-lg font-semibold text-primary-900">
            Maritime
          </span>
        </Link>
        {mobile && (
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            onClick={onClose}
          >
            <span className="sr-only">Close sidebar</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        )}
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-link ${active ? "active" : ""}`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 ${
                  active ? "text-primary-600" : "text-gray-500"
                }`}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Link to="/" className="nav-link">
          <Cog6ToothIcon className="mr-3 h-5 w-5 text-gray-500" />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
