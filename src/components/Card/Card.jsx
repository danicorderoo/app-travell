import React from "react";
import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
import { useState, useEffect } from "react";
import { getContinent } from "../../utils/getContinent";

export default function Card(props) {
  let dispatch = useDispatch();
  let theme = useSelector((state) => state.theme);
  let favorites = useSelector((state) => state.myTop);
  let imagen = getContinent(props.continente);
  let [top, setTop] = useState(false);

  useEffect(() => {
    favorites.forEach((countrie) => {
      if (countrie.id === props.id) {
        setTop(true);
      }
    });
  }, [favorites, props.id]);

  const hamdleTop = () => {
    if (top === true) {
      setTop(false);
      if (props.id) dispatch(actions.deleteTop(props.id));
    }
    if (top === false) {
      setTop(true);
      dispatch(actions.addTop(props));
    }
  };

  return (
    <div className={theme ? styles.themeDay : styles.themeNigth}>
      <div className={styles.flag}>
        <img src={props.bandera} alt="img" />
      </div>
      <div className={styles.continente}>
        <NavLink to={`/countrie/${props.id}`} className={styles.link}>
          <img src={imagen} alt={props.continente} />
          <span>Visit me!</span>
        </NavLink>
      </div>
      <div>
        <h2>{props.nombre} </h2>
        <h2>{props.id}</h2>
        <h2>{props.continente}</h2>

        {top ? (
          <button className={styles.planeOn} onClick={hamdleTop}></button>
        ) : (
          <button className={styles.planeOff} onClick={hamdleTop}></button>
        )}
      </div>
    </div>
  );
}
