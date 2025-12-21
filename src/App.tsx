import { NavLink, Outlet } from "react-router";

export default function App() {
  return (
    <div data-text-preset="body">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/locations">Locations</NavLink>
      </nav>

      <div data-text-preset="heading-1">
        <Outlet />
      </div>
    </div>
  );
}
