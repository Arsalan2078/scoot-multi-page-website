import { Outlet } from "react-router";
import LogoLink from "./components/LogoLink";
import NavLinks from "./components/NavLinks";

export default function App() {
  return (
    <div data-text-preset="body">
      <nav>
        <LogoLink />
        <NavLinks />
      </nav>

      <Outlet />
    </div>
  );
}
