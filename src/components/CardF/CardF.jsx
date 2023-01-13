import React from "react";
import styles from "./CardF.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CardF(props) {
  let theme = useSelector((state) => state.theme);

  return (
    <NavLink to={`/countrie/${props.id}`} className={styles.link}>
      <div className={theme ? styles.themeDay : styles.themeNigth}>
        <div className={styles.flag}>
          <img src={props.bandera} alt="img" />
        </div>
        <div>
          <h2>{props.nombre} </h2>
          <h2>{props.id}</h2>
          <h2>{props.continente}</h2>
        </div>
      </div>
    </NavLink>
  );
}
