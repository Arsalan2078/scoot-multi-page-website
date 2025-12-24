import Icon from "../Icon";
import css from "./index.module.scss";

export default function SocMeds() {
  return (
    <ul className={`${css.links}`}>
      <li>
        <a href="#">
          <Icon icon="facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <Icon icon="twitter" />
        </a>
      </li>
      <li>
        <a href="#">
          <Icon icon="instagram" />
        </a>
      </li>
    </ul>
  );
}
