/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import CardF from "../CardF/CardF";
import Header from "../Header/Header";
import styles from "./Top.module.css";
import { useSelector } from "react-redux";

export default function Top(props) {
  let countries = useSelector((state) => state.myTop);
  let theme = useSelector((state) => state.theme);

  return (
    <div className={theme ? styles.themeDayf : styles.themeNigthf}>
      <Header />

      <div className={styles.cardsf}>
        {countries?.map((country) => {
          const { id, nombre, bandera, continente } = country;
          return (
            <CardF
              key={id}
              id={id}
              nombre={nombre}
              bandera={bandera}
              continente={continente}
            />
          );
        })}
      </div>
    </div>
  );
}
