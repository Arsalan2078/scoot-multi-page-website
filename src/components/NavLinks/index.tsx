import { NavLink } from "react-router";
import css from "./index.module.scss";

export default function NavLinks({
  className,
}: {
  className?: string | undefined;
}) {
  return (
    <ul className={`${css.links} ${className}`}>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/locations">Location</NavLink>
      </li>
      <li>
        <NavLink to="/careers">Careers</NavLink>
      </li>
    </ul>
  );
}
