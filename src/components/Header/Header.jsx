import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export function Header() {
  return (
    <header className={css.container}>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? css.active : css.inactive
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive ? css.active : css.inactive
              }
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? css.active : css.inactive
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
