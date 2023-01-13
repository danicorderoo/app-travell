import React from "react";
import styles from "./Table.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";

export default function Table(props) {
  let theme = useSelector((state) => state.theme);
  let selectCountrie = useSelector((state) => state.countriesActivity);
  let list = props.list;
  let dispatch = useDispatch();

  const handleClick = (event) => {
    let nombre = event.target.name;

    if (selectCountrie?.includes(nombre)) {
      return dispatch(actions.deleteSelectCountrie(nombre));
    }

    if (selectCountrie?.length >= 3) {
      return window.alert(
        "I already exceeded the number of countries you can select"
      );
    }

    if (nombre) {
      return dispatch(actions.selectCountrie(nombre));
    }
  };

  return (
    <div className={theme ? styles.themeDay : styles.themeNigth}>
      <div className={styles.paises}>
        <label>Search your desired countries...</label>
        <div className={styles.contenedor}>
          {list.map((countrie) => {
            return (
              <div className={styles.subContenedor}>
                <button
                  key={countrie.id}
                  className={styles.button}
                  name={countrie.id}
                  onClick={handleClick}>
                  <label
                    key={countrie.id}
                    name={countrie.id}
                    className={styles.toolTip}>
                    {countrie.nombre}
                  </label>
                  <img
                    key={countrie.id}
                    name={countrie.id}
                    src={countrie.bandera}
                    alt={countrie.nombre}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
