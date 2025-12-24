import LogoLink from "../LogoLink";
import NavLinks from "../NavLinks";
import SocMeds from "../SocMeds";
import css from "./index.module.scss";

export default function NavbarBottom() {
  return (
    <nav className={`${css.nav}`}>
      <div className={`${css.container} container`}>
        <LogoLink className={`${css.logo}`} />

        <div className={`${css.stack}`}>
          <NavLinks className={css.links} />
          <SocMeds />
        </div>
      </div>
    </nav>
  );
}
