import LogoLink from "../LogoLink";
import NavLinks from "../NavLinks";
import css from "./index.module.scss";

export default function NavbarBottom() {
  return (
    <nav>
      <LogoLink />
      <NavLinks />
    </nav>
  );
}
