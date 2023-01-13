import React from "react";
import styles from "./ActivityBar.module.css";
import { useSelector } from "react-redux";
import Card from "../CardActivity/CardActivity";

export default function ActivityBar(props) {
  let { state } = props;
  let activity = useSelector((state) => state.myDetail[0]?.Activities);

  return (
    <div className={styles.theme}>
      <div className={state ? styles.filtros : styles.filtrosOff}>
        <div className={styles.cartas}>
          {activity?.length ? (
            activity.map((act) => {
              const { id, nombre, dificultad, duracion, temporada } = act;
              return (
                <Card
                  key={id}
                  id={id}
                  nombre={nombre}
                  dificultad={dificultad}
                  duracion={duracion}
                  temporada={temporada}
                />
              );
            })
          ) : (
            <h1>NO ACTIVITIES</h1>
          )}
        </div>
      </div>
    </div>
  );
}
