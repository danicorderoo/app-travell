import React from "react";
import axios from "axios";
import styles from "./Activity.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Header from "../Header/Header";
import Table from "../TableCountrie/TableCountrie";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";

export default function Create(props) {
  const [activity, setActivity] = useState({
    nombre: "",
    dificultad: 0,
    duracion: "",
    temporada: "Spring",
    paises: [],
  });

  let [error, setError] = useState({});

  const [res, setRes] = useState({
    dificultad: 0,
    duracionEnd: "00:00",
    duracionStart: "00:00",
  });

  let theme = useSelector((state) => state.theme);
  let contries = useSelector((state) => state.allCountries);
  let selectCountrie = useSelector((state) => state.countriesActivity);
  const [list, setList] = useState([]);
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const validacion = (activity) => {
    let error = {};
    if (
      !activity.nombre ||
      activity.nombre.length > 20 ||
      !/^[a-z]+$/i.test(activity.nombre)
    ) {
      error.nombre =
        "You have to choose a name less than 20 characters and only letters";
    }

    if (!activity.dificultad) {
      error.dificultad = "Difficulty must be greater than 0";
    }

    if (activity.paises === []) {
      error.paises = "You have to assign at least one country to the activity";
    }

    return error;
  };

  const handleInputChange = (event) => {
    let nombre = event.target.name;
    let valor = event.target.value;
    let hora = 0;
    let min = 0;
    let [horaEnd, minutosEnd] = res.duracionEnd.split(":");
    let [horaStart, minutosStart] = res.duracionStart.split(":");

    setRes({ ...res, [nombre]: valor });

    if (nombre === "dificultad") {
      valor = 5 * valor;
      valor = Math.floor(valor / 100);
    }
    if (horaStart === horaEnd) {
      hora = 0;
      if (hora < 9) hora = "0" + hora;
    }
    if (horaStart < horaEnd) {
      hora = horaStart && horaEnd ? horaEnd - horaStart : null;
      if (hora < 9) hora = "0" + hora;
    }
    if (horaStart > horaEnd) {
      hora = horaStart && horaEnd ? 24 - horaStart : null;
      if (hora < 9) hora = "0" + hora;
    }
    if (minutosStart === minutosEnd) {
      min = 0;
      if (min < 9) min = "0" + min;
    }
    if (minutosStart < minutosEnd) {
      min = minutosStart && minutosEnd ? minutosEnd - minutosStart : null;
      if (min < 9) min = "0" + min;
    }
    if (minutosStart > minutosEnd) {
      min = minutosStart && minutosEnd ? 60 - minutosStart : null;
      if (min < 9) min = "0" + min;
    }
    if (nombre === "duracion") {
      return setActivity({ ...activity, [nombre]: `${hora}:${min}` });
    }
    if (nombre === "paises") {
      const results = contries?.filter((countrie) => {
        if (event.target.value === "") return contries;
        return countrie.nombre
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      setActivity({ ...activity, [nombre]: valor });
      return setList(results);
    }
    setActivity({ ...activity, [nombre]: valor });

    setError(validacion({ ...activity, [nombre]: valor }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const jsonData = {
      nombre: activity.nombre,
      dificultad: activity.dificultad,
      duracion: activity.duracion,
      temporada: activity.temporada,
      countries: selectCountrie,
    };

    await axios.post("http://localhost:3001/activities", jsonData);

    setActivity({
      nombre: "",
      dificultad: 0,
      duracion: "",
      temporada: "Spring",
      paises: [],
    });

    setRes({
      dificultad: 0,
      duracionEnd: "00:00",
      duracionStart: "00:00",
    });

    dispatch(actions.deleteSelectCountrie("all"));
    navigate("/createActivity");
    alert(`mensaje - Activity created`);
  };

  return (
    <div className={theme ? styles.themeDay : styles.themeNigth}>
      <Header />
      <div className={theme ? styles.titleDay : styles.titleNigt}>
        <h1>Create your new Activity!</h1>
      </div>
      <div className={styles.formulario}>
        <div>
          <form onSubmit={handleSubmit}>
            <div className={styles.Contenedor}>
              <label>Name: </label>
              <input
                name="nombre"
                type="text"
                placeholder="Name Activity"
                value={activity.nombre}
                onChange={handleInputChange}
              />
              <p className={styles.danger}>{error.nombre}</p>
              <label>Difficulty: </label>
              <div className={styles.barCon}>
                <input
                  className={styles.bar}
                  name="dificultad"
                  type="range"
                  value={res.dificultad}
                  onChange={handleInputChange}
                />

                <label>{Math.floor((res.dificultad * 5) / 100)}</label>
              </div>
              <p className={styles.danger}>{error.dificultad}</p>
              <label>Duration: </label>
              <div className={styles.timeCon}>
                <span>From</span>
                <input
                  name="duracionStart"
                  type="time"
                  id="duracion"
                  value={res.duracionStart}
                  onChange={handleInputChange}
                />
                <span>To</span>
                <input
                  name="duracionEnd"
                  type="time"
                  id="duracion"
                  value={res.duracionEnd}
                  onChange={handleInputChange}
                />
              </div>
              <span>Total Time: {activity.duracion} </span>
              <span>Set</span>
              <input
                type="checkbox"
                onChange={handleInputChange}
                name="duracion"
              />
              <label>Season: </label>
              <select
                name="temporada"
                id="temporada"
                onChange={handleInputChange}
              >
                <option>Spring</option>
                <option>Summer</option>
                <option>Fall</option>
                <option>Winter</option>
              </select>

              <label>Countries: </label>
              <div className={styles.paises}>
                <div className={styles.pais1}>
                  <img
                    src={
                      contries?.find(
                        (element) => element.id === selectCountrie[0]
                      )?.bandera
                    }
                    alt={selectCountrie[0]}
                  />
                </div>
                <div className={styles.pais2}>
                  <img
                    src={
                      contries?.find(
                        (element) => element.id === selectCountrie[1]
                      )?.bandera
                    }
                    alt={selectCountrie[1]}
                  />
                </div>
                <div className={styles.pais3}>
                  <img
                    src={
                      contries?.find(
                        (element) => element.id === selectCountrie[2]
                      )?.bandera
                    }
                    alt={selectCountrie[2]}
                  />
                </div>
              </div>
              <input
                name="paises"
                type="search"
                placeholder="Countries Name"
                value={activity.paises}
                onChange={handleInputChange}
              />
              {selectCountrie.length ? (
                <p className={styles.danger}>READY</p>
              ) : (
                <p className={styles.danger}>
                  You must select a country for the activity
                </p>
              )}

              {activity.nombre &&
              activity.dificultad &&
              activity.duracion &&
              activity.temporada &&
              selectCountrie.length ? (
                <button className={styles.Buttons} type="submit">
                  Create!
                </button>
              ) : (
                <button className={styles.ButtonsOff}>Create!</button>
              )}
            </div>
          </form>
        </div>

        <div className={styles.tabla}>
          <Table list={list} />
        </div>
      </div>
    </div>
  );
}
