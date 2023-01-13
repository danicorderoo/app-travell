import React from "react";
import styles from "./CardActivity.module.css";
import { useSelector } from "react-redux";

export default function CardActivity(props) {
  let theme = useSelector((state) => state.theme);
  let [hora, min] = props.duracion?.split(":");

  return (
    <div className={theme ? styles.themeDay : styles.themeNigth}>
      <div>
        <h2>{props.nombre}</h2>
      </div>
      <div>
        <h2>Difficulty: {props.dificultad}</h2>
        <h2>
          Duration: {hora} H {min} m
        </h2>
        <h2>Season: {props.temporada}</h2>
      </div>
    </div>
  );
}
