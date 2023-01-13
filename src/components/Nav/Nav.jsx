import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";

export default function Nav(props) {
  const [theme, setTheme] = useState(true);
  let dispatch = useDispatch();

  const onChangeTheme = () => {
    if (theme) setTheme(false);
    if (!theme) setTheme(true);
    dispatch(actions.setTheme(theme));
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.nav}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? styles.navActivety : styles.link
          }>
          HOME
        </NavLink>
        <NavLink
          to="/top"
          className={({ isActive }) =>
            isActive ? styles.navActivety : styles.link
          }>
          TOP
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.navActivety : styles.link
          }>
          ABOUT
        </NavLink>
        <NavLink
          to="/createActivity"
          className={({ isActive }) =>
            isActive ? styles.navActivety : styles.link
          }>
          CREATE
        </NavLink>
      </div>

      <button
        className={theme ? styles.themeBottonDay : styles.themeBottonNigth}
        name="theme"
        onClick={() => onChangeTheme()}></button>
    </div>
  );
}
