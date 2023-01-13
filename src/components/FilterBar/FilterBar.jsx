import React from "react";
import styles from "./FilterBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../../redux/actions/index";

export default function Filter(props) {
  let { state } = props;
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let activities = useSelector((state) => state.activity);

  const handleInputChange = (event) => {
    let nombre = event.target.name;
    let valor = event.target.value;

    switch (nombre) {
      case "continente":
        dispatch(actions.filterCont(valor));
        break;
      case "top":
        dispatch(actions.filterTop(valor));
        break;
      case "activity":
        dispatch(actions.filterAct(valor));

        break;
      case "ordenPobUp":
        dispatch(actions.orderPobMayor());
        navigate("/home");
        break;
      case "ordenPobDown":
        dispatch(actions.orderPobMenor());
        navigate("/home");
        break;
      case "ordenNameUp":
        dispatch(actions.orderNameMayor());
        navigate("/home");
        break;
      case "ordenNameDown":
        dispatch(actions.orderNameMenor());
        navigate("/home");
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.theme}>
      <div className={state ? styles.filtros : styles.filtrosOff}>
        <h3>FILTER TYPES</h3>
        <div className={styles.orden}>
          <label>Continent: </label>
          <select
            className={styles.barra}
            name="continente"
            onChange={handleInputChange}>
            <option>All</option>
            <option>Oceania</option>
            <option>Asia</option>
            <option>Americas</option>
            <option>Africa</option>
            <option>Europe</option>
            <option>Antarctic</option>
          </select>
        </div>
        <div className={styles.orden}>
          <label>Top: </label>
          <select
            className={styles.barra}
            name="top"
            onChange={handleInputChange}>
            <option>All</option>
            <option>Travel Top</option>
          </select>
        </div>
        <div className={styles.orden}>
          <label>Activity: </label>
          <select
            className={styles.barra}
            name="activity"
            onChange={handleInputChange}>
            {activities.map((act) => {
              return <option key={act.nombre}>{act.nombre}</option>;
            })}
          </select>
        </div>

        <h3>ORDER TYPES</h3>
        <div className={styles.orden}>
          <label>Alfabetic:</label>
          <div className={styles.botonera}>
            <button name="ordenNameUp" onClick={handleInputChange}>
              A-Z
            </button>
            <button name="ordenNameDown" onClick={handleInputChange}>
              Z-A
            </button>
          </div>
        </div>
        <div className={styles.orden}>
          <label>Population:</label>

          <div className={styles.botonera}>
            <button name="ordenPobUp" onClick={handleInputChange}>
              Higher
            </button>
            <button name="ordenPobDown" onClick={handleInputChange}>
              Less
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
