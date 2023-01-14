import React from "react";
import axios from "axios";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
import Presentations from "../Presentation/Presentetion";
import Activity from "../ActivityBar/ActivityBar";

export default function DetailID(props) {
  const { countrieId } = useParams();
  const [countrie, setCountrie] = useState({});
  let favorites = useSelector((state) => state.myTop);
  let theme = useSelector((state) => state.theme);
  let [top, setTop] = useState(false);
  let dispatch = useDispatch();
  let display = useSelector((state) => state.display);
  const [windowActivity, setWindowActivity] = useState(false);

  const addCountrie = async () => {
    try {
      const countrie = await axios.get(`/countries/${countrieId}`);
      if (countrie?.nombre) {
        setCountrie(countrie);
        dispatch(actions.addCountrieName(countrie.nombre));
      } else {
        window.alert("There is no country with that ID");
      }
    } catch (error) {
      console.log(error);
      window.alert("There is no country with that ID");
    }
  };

  useEffect(() => {
    favorites.forEach((countrie) => {
      if (countrie.id === countrieId) {
        setTop(true);
      }
    });

    if (countrieId) {
      addCountrie();
    }
  }, [countrieId, dispatch, favorites, props.id]);

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
      {countrie.nombre ? (
        <div className={theme ? styles.themeDay : styles.themeNigth}>
          <Header continente={countrie.continente} />

          {display ? <Presentations countrie={countrie.nombre} /> : null}

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
                  ?.replace("{", "")
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
