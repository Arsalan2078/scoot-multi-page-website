import css from "./App.module.scss";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import NavbarTop from "./components/NavbarTop";

export default function App() {
  return (
    <div className={`${css.app}`} data-text-preset="body">
      <NavbarTop />
      <Outlet/>
      <Footer />
    </div>
  );
}
