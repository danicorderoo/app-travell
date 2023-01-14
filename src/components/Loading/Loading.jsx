import styles from "./Loading.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function SearchBar(props) {
  const location = useLocation();
  let theme = useSelector((state) => state.theme);

  return (
    <div className={theme ? styles.themeDay : styles.themeNigth}>
      <div>
        <h1>Travel5!</h1>
        <div className={styles.world}></div>
        <NavLink
          className={styles.back}
          to={location.pathname === "/home" ? "/" : "/home"}
        >
          back
        </NavLink>
      </div>
    </div>
  );
}
