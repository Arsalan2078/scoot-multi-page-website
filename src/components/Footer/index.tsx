import AppStoreLinks from "../AppStoreLinks";
import NavbarBottom from "../NavbarBottom";
import css from "./index.module.scss";

export default function Footer() {
  return (
    <footer className={`${css.footer}`}>
      <div className={`${css.content}`}>
        <div className={`${css.container} container`}>
          <h2 data-text-preset="heading-2">Sign up and<br className={`${css.br}`} /> Scoot off today</h2>
          <AppStoreLinks />
        </div>
      </div>

      <NavbarBottom />
    </footer>
  );
}
