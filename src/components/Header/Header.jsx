import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { positionContinent } from "../../utils/getContinent";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";

export default function Header(props) {
  const navigate = useNavigate();
  let theme = useSelector((state) => state.theme);
  const continente = props.continente;
  const dispatch = useDispatch();

  const handleClickTravel = () => {
    dispatch(actions.DeleteCountrieName());
    navigate(`/home`);
  };

  return (
    <div className={theme ? styles.themeDay : styles.themeNigth}>
      <div className={styles.input}>
        <div className={styles.header}>
          <div className={theme ? styles.sloganDay : styles.sloganNigth}>
            <h1>Travel5!</h1>
          </div>
        </div>
        <div>
          <button onClick={handleClickTravel} className={styles.go}>
            Home
          </button>
        </div>
        <div className={positionContinent(continente)}></div>
      </div>
    </div>
  );
}
