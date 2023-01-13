import React from "react";
import styles from "./LandingPage.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

export default function LandingPage(props) {
  let countries = useSelector((state) => state.myCountries);
  let flags = [];
  let max = [1, 2, 3, 4, 5, 6];
  let min = [1, 2, 3, 4];

  countries?.map((country) => {
    const { bandera } = country;
    return flags.push(bandera);
  });

  return (
    <div>
      {countries[0] ? (
        <div className={styles.body}>
          <div className={styles.plane}></div>
          <h1>Travel5!</h1>
          <NavLink to="/home" className={styles.link}>
            GO!
          </NavLink>

          <div className={styles.carrusel}>
            {max.map((id) => {
              return (
                <div className={styles.slider} key={id}>
                  <ul>
                    <li>
                      <img
                        src={flags[Math.floor(Math.random() * 249)]}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src={flags[Math.floor(Math.random() * 249)]}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src={flags[Math.floor(Math.random() * 249)]}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src={flags[Math.floor(Math.random() * 249)]}
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={styles.carrusel1}>
            {min.map((id) => {
              return (
                <div className={styles.slider} key={id}>
                  <ul>
                    <li>
                      <img
                        src={flags[Math.floor(Math.random() * 249)]}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src={flags[Math.floor(Math.random() * 249)]}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src={flags[Math.floor(Math.random() * 249)]}
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src={flags[Math.floor(Math.random() * 249)]}
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <h4>Daniel Cordero</h4>
          <h4>PI Countries - Soy Henry</h4>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
