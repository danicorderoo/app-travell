import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as actions from "../../redux/actions/index";

export default function SearchBar(props) {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let countries = useSelector((state) => state.allCountries);
  let theme = useSelector((state) => state.theme);

  const handleChange = (event) => {
    setName(event.target.value);

    const results = countries?.filter((countrie) => {
      if (event.target.value === "") return countries;
      return countrie.nombre
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setList(results);
  };

  const handleClickTravel = () => {
    dispatch(actions.addCountrieName(name));
    setName("");

    navigate(`/countrie`);
  };

  return (
    <div className={theme ? styles.themeDay : styles.themeNigth}>
      <div className={styles.input}>
        <div className={styles.header}>
          <div className={theme ? styles.sloganDay : styles.sloganNigth}>
            <h2>Your next </h2>
            <h1>Travel5!</h1>
            <h2>Destination</h2>
            <h2>is...</h2>
          </div>
        </div>
        <div>
          <input
            className={styles.buscador}
            type="search"
            value={name}
            onChange={handleChange}
          />

          <button onClick={handleClickTravel} className={styles.go}>
            Go!
          </button>
          {!list.length ? (
            <select>
              <option key="fount">Enter a valid country</option>
            </select>
          ) : (
            <select name="name" id="name" onChange={handleChange}>
              <option key="select"> Select your Countrie</option>
              {name === "" ? null : !list?.length ? (
                <option key="fount"> Countrie not Fount</option>
              ) : (
                list?.map((countrie) => {
                  return (
                    <option key={countrie.nombre}>{countrie.nombre}</option>
                  );
                })
              )}
            </select>
          )}
        </div>

        <div className={styles.world}></div>
      </div>
    </div>
  );
}
