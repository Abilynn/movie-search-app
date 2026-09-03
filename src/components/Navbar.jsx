import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/movieSearchLogo2.png";

function NavBar() {
  return (
    <nav className="px-4 h-16 bg-navbar border-b border-border">
      <div className="flex items-center justify-between max-w-5xl mx-auto h-full px-4">
        <Link
          to="/"
          onClick={() => {
            sessionStorage.removeItem("movieSearch");
          }}
          className="flex items-center gap-1 focus-ring">
          <img
            src={logo}
            alt="movie search logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl">ovie Search</span>
        </Link>

        <ul className="flex gap-6 items-center text-lg">
          <li>
            <NavLink
              to="/"
              end
              onClick={() => {
                sessionStorage.removeItem("movieSearch");
              }}
              className={({ isActive }) =>
                `focus-ring ${isActive
                  ? "text-accent"
                  : "hover:text-accent-hover"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `focus-ring ${isActive
                  ? "text-accent"
                  : "hover:text-accent-hover"
                }`
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;