import React from "react";
import styles from "./Detail.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import Presentations from "../Presentation/Presentetion";
import Activity from "../ActivityBar/ActivityBar";

export default function DetailName(props) {
  let countrie = useSelector((state) => state.myDetail[0]);
  let theme = useSelector((state) => state.theme);
  let favorites = useSelector((state) => state.myTop);
  let [top, setTop] = useState(false);
  let id = countrie?.id;
  let dispatch = useDispatch();
  let display = useSelector((state) => state.display);
  const [windowActivity, setWindowActivity] = useState(false);

  console.log(countrie);
  useEffect(() => {
    favorites.forEach((countrie) => {
      if (countrie.id === id) {
        setTop(true);
      }
    });
  }, [favorites, id]);

  const handleClick = () => {
    dispatch(actions.setDisplay(true));
  };

  const onChangeActivity = () => {
    if (windowActivity) {
      setWindowActivity(false);
    } else {
      setWindowActivity(true);
    }
  };

  return (
    <div>
      {countrie?.nombre ? (
        <div className={theme ? styles.themeDay : styles.themeNigth}>
          <Header continente={countrie?.continente} />

          {display ? <Presentations countrie={countrie?.nombre} /> : null}

          <div className={styles.tarjeta}>
            <div className={styles.bandera}>
              <img src={countrie?.bandera} alt={countrie?.nombre} />
            </div>
            {!top ? null : (
              <div>
                <div className={styles.planeOn}></div>
                <div className={styles.planeOff}></div>
                <div className={styles.topText}>
                  <h2>Is TOP</h2>
                  <button onClick={handleClick}>Travel5!</button>
                </div>
              </div>
            )}
            <div className={styles.titulo}>
              <h2>{`${countrie?.nombre} / ${countrie?.id}`}</h2>
            </div>
            <div className={styles.subTitulo}>
              <h2>
                CAPITAL:{" "}
                {countrie?.capital
                  .replace("{", "")
                  .replace('"', "")
                  .replace('"', "")
                  .replace("}", "")}
              </h2>
              <h2>CONTINENT: {countrie?.continente}</h2>
              <h2>SUBREGION: {countrie?.subregion}</h2>
              <h2>AREA: {`${countrie?.area} km2`}</h2>
              <h2>POPULATION: {`${countrie?.poblacion} habs.`}</h2>
            </div>
          </div>
          <Activity state={windowActivity} />
          <button
            className={windowActivity ? styles.activityOn : styles.activityOff}
            name="theme"
            onClick={() => onChangeActivity()}
          ></button>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
