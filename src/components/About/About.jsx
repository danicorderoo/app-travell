/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../Header/Header";
import styles from "./About.module.css";
import { useSelector } from "react-redux";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.svg";
import javascriptImg from "../../assets/javascript.png";
import reactImg from "../../assets/react.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import redux from "../../assets/redux.png";
import postgresql from "../../assets/posgresql.png";
import sequelize from "../../assets/sequelize.png";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";

export default function Top(props) {
  let theme = useSelector((state) => state.theme);
  let lenguaje = useSelector((state) => state.idiom);
  let dispatch = useDispatch();

  const techSkills = [
    {
      tech: "HTML",
      image: htmlImg,
      link: "https://developer.mozilla.org/es/docs/Web/HTML",
    },
    {
      tech: "CSS",
      image: cssImg,
      link: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
    {
      tech: "JavaScript",
      image: javascriptImg,
      link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {
      tech: "React",
      image: reactImg,
      link: "https://es.reactjs.org/",
    },
    {
      tech: "Redux",
      image: redux,
      link: "https://es.redux.js.org/",
    },
    {
      tech: "PostgreSQL",
      image: postgresql,
      link: "https://www.postgresql.org/",
    },
    {
      tech: "Sequelize",
      image: sequelize,
      link: "https://sequelize.org/",
    },
  ];

  const handleChangeIdiom = (event) => {
    const idioma = event.target.name;

    dispatch(actions.setIdiom(idioma));
  };

  return (
    <div className={theme ? styles.themeDayf : styles.themeNigthf}>
      <Header />
      <div className={styles.contenedor}>
        <h1>PI Countrie</h1>
        {lenguaje === "en" ? (
          <h2>Developer: Daniel E.Cordero S.</h2>
        ) : (
          <h2>Desarrollador: Daniel E.Cordero S.</h2>
        )}

        <div className={styles.portal}></div>
        <div className={styles.textContenedor}>
          {lenguaje === "en" ? (
            <h2>
              This application was designed to be used by travelers who want
              know their next travel destinations and have information about
              their favorite countries. They can create activities, filter the
              countries of different ways, by continent, if it is Top Travel and
              by type of activity, we can also order the "HOME" countries by
              level by population or by alphabetical order, I hope you like it.
            </h2>
          ) : (
            <h2>
              Esta aplicación fue diseñada para ser usada por viajeros que
              desean conocer sus próximos destinos de viajes y tener información
              de sus países favoritos. Pueden crear actividades, filtrar los
              países de distintas maneras, por continentes, si es Top Travel y
              por tipo de actividad, también podemos ordenar los países del
              "HOME" por nivel de población o por orden alfabético, espero les
              guste.
            </h2>
          )}
          {lenguaje === "en" ? (
            <button
              className={styles.button}
              onClick={handleChangeIdiom}
              name="es">
              ES
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={handleChangeIdiom}
              name="en">
              EN
            </button>
          )}
        </div>

        <ul className={styles.unorderedList}>
          {techSkills.map((skill) => (
            <button
              className={`${styles.listItem} ${styles.listItem.img}`}
              key={skill}
              onclick="<a href=www.google.com></a>">
              <a href={skill.link} target="_blank" rel="noreferrer">
                <strong>{skill.tech}</strong>
              </a>

              <img src={skill.image} alt={skill.tech} />
            </button>
          ))}
        </ul>
        <br />
        {lenguaje === "en" ? (
          <p>For more information or to leave your feedback, contact me at</p>
        ) : (
          <p>Para más información o dejar su feedback, contáctame en</p>
        )}

        <div className={styles.botones}>
          <a
            href="https://www.linkedin.com/in/dcordero-ing/"
            target="_blank"
            rel="noreferrer">
            <img src={linkedin} alt="" srcset="" />
          </a>
          <a
            href="https://github.com/danicorderoo"
            target="_blank"
            rel="noreferrer">
            <img src={github} alt="" srcset="" />
          </a>
        </div>
      </div>
    </div>
  );
}
