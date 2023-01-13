import React from "react";
import styles from "./Presentation.module.css";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import * as actions from "../../redux/actions/index";

import img_bra_intro from "../../assets/Photos/Brazil/brasil.jpg";
import img_bra_0 from "../../assets/Photos/Brazil/Brasilia.jpg";
import img_bra_1 from "../../assets/Photos/Brazil/Cataratas-de-Iguazu.jpg";
import img_bra_2 from "../../assets/Photos/Brazil/Cristo-Redentor.jpg";
import img_bra_3 from "../../assets/Photos/Brazil/Florianopolis.jpg";
import img_bra_4 from "../../assets/Photos/Brazil/Manaos.jpg";
import img_bra_5 from "../../assets/Photos/Brazil/Playas-de-Copacabana.jpg";
import img_bra_6 from "../../assets/Photos/Brazil/Porto-de-Galinhas.jpg";
import img_bra_7 from "../../assets/Photos/Brazil/Recife.jpg";
import img_bra_8 from "../../assets/Photos/Brazil/Rio-de-Janeiro.jpg";
import img_bra_9 from "../../assets/Photos/Brazil/Salvador-de-Bahia.jpg";

import img_ven_intro from "../../assets/Photos/Venezuela/venezuela.jpg";
import img_ven_0 from "../../assets/Photos/Venezuela/Archipielago-Los-Roques.jpg";
import img_ven_1 from "../../assets/Photos/Venezuela/Colonia-Tovar.jpg";
import img_ven_2 from "../../assets/Photos/Venezuela/El-Avila.jpg";
import img_ven_3 from "../../assets/Photos/Venezuela/Cuevas-del-guacharo.jpg";
import img_ven_4 from "../../assets/Photos/Venezuela/Isla-de-Margarita.jpg";
import img_ven_5 from "../../assets/Photos/Venezuela/La-Gran-Sabana.jpg";
import img_ven_6 from "../../assets/Photos/Venezuela/Merida.jpg";
import img_ven_7 from "../../assets/Photos/Venezuela/Parque-Nacional-Mochima.jpg";
import img_ven_8 from "../../assets/Photos/Venezuela/Parque-Nacional-Morrocoy.jpg";
import img_ven_9 from "../../assets/Photos/Venezuela/Salto-Angel.jpg";

import img_arg_intro from "../../assets/Photos/Argentina/argentina.jpg";
import img_arg_0 from "../../assets/Photos/Argentina/Bariloche.jpg";
import img_arg_1 from "../../assets/Photos/Argentina/Buenos-Aires.jpg";
import img_arg_2 from "../../assets/Photos/Argentina/Mar-del-Plata.jpg";
import img_arg_3 from "../../assets/Photos/Argentina/Mendoza.jpg";
import img_arg_4 from "../../assets/Photos/Argentina/Parque-Nacional-de-Iguazu.jpg";
import img_arg_5 from "../../assets/Photos/Argentina/Parque-Nacional-de-los-Glaciares.jpg";
import img_arg_6 from "../../assets/Photos/Argentina/Salta.jpg";
import img_arg_7 from "../../assets/Photos/Argentina/Tren-a-las-nubes.jpg";
import img_arg_8 from "../../assets/Photos/Argentina/Ushuaia.jpg";
import img_arg_9 from "../../assets/Photos/Argentina/Peninsula-Valdes.jpg";

import img_col_intro from "../../assets/Photos/Colombia/colombia.jpg";
import img_col_0 from "../../assets/Photos/Colombia/Bogota.jpg";
import img_col_1 from "../../assets/Photos/Colombia/Caño-Cristales.jpg";
import img_col_2 from "../../assets/Photos/Colombia/Cartagena-de-Indias.jpg";
import img_col_3 from "../../assets/Photos/Colombia/Desierto-de-Tatacoa.jpg";
import img_col_4 from "../../assets/Photos/Colombia/Eje-Cafetero.jpg";
import img_col_5 from "../../assets/Photos/Colombia/Isla-Gorgona.jpg";
import img_col_6 from "../../assets/Photos/Colombia/Leticia.jpg";
import img_col_7 from "../../assets/Photos/Colombia/Parque-Tayrona.jpg";
import img_col_8 from "../../assets/Photos/Colombia/Santa-Marta.jpg";
import img_col_9 from "../../assets/Photos/Colombia/Villa-de-Leyva.jpg";

import img_mex_intro from "../../assets/Photos/Mexico/mexico.jpg";
import img_mex_0 from "../../assets/Photos/Mexico/Acapulco.jpg";
import img_mex_1 from "../../assets/Photos/Mexico/Cancun.jpg";
import img_mex_2 from "../../assets/Photos/Mexico/Chichen-Itza.jpg";
import img_mex_3 from "../../assets/Photos/Mexico/Ciudad-de-Mexico.jpg";
import img_mex_4 from "../../assets/Photos/Mexico/Los-Cabos.jpg";
import img_mex_5 from "../../assets/Photos/Mexico/Mazatlan.jpg";
import img_mex_6 from "../../assets/Photos/Mexico/Merida-1.jpg";
import img_mex_7 from "../../assets/Photos/Mexico/Monterrey.jpg";
import img_mex_8 from "../../assets/Photos/Mexico/Museo-Frida-Kahlo.jpg";
import img_mex_9 from "../../assets/Photos/Mexico/Veracruz.jpg";

import img_ale_intro from "../../assets/Photos/Germany/alemania.jpg";
import img_ale_0 from "../../assets/Photos/Germany/Castillo-de-Heidelberg.jpg";
import img_ale_1 from "../../assets/Photos/Germany/Catedral-de-Ulm.jpg";
import img_ale_2 from "../../assets/Photos/Germany/Dresde-iglesia-barroca-Frauenkirche.jpg";
import img_ale_3 from "../../assets/Photos/Germany/Europa-Park.jpg";
import img_ale_4 from "../../assets/Photos/Germany/Lago-de-Constanza.jpg";
import img_ale_5 from "../../assets/Photos/Germany/Miniatur-Wunderland-Hamburgo.jpg";
import img_ale_6 from "../../assets/Photos/Germany/Neuschwanstein.jpg";
import img_ale_7 from "../../assets/Photos/Germany/Palacio-de-Mannheim.jpg";
import img_ale_8 from "../../assets/Photos/Germany/Puerta-de-Brandeburgo.jpg";
import img_ale_9 from "../../assets/Photos/Germany/Rothenburg-ob-der-Tauber.jpg";

import img_jap_intro from "../../assets/Photos/Japan/japon.jpg";
import img_jap_0 from "../../assets/Photos/Japan/Aichi.jpg";
import img_jap_1 from "../../assets/Photos/Japan/Chiba.jpg";
import img_jap_2 from "../../assets/Photos/Japan/Hiroshima.jpg";
import img_jap_3 from "../../assets/Photos/Japan/Hyogo.jpg";
import img_jap_4 from "../../assets/Photos/Japan/Kanagawa.jpg";
import img_jap_5 from "../../assets/Photos/Japan/Kioto.jpg";
import img_jap_6 from "../../assets/Photos/Japan/Nara.jpg";
import img_jap_7 from "../../assets/Photos/Japan/Okinawa.jpg";
import img_jap_8 from "../../assets/Photos/Japan/Osaka.jpg";
import img_jap_9 from "../../assets/Photos/Japan/Tokio.jpg";

const photos = {
  Brazil: [
    img_bra_intro,
    img_bra_0,
    img_bra_1,
    img_bra_2,
    img_bra_3,
    img_bra_4,
    img_bra_5,
    img_bra_6,
    img_bra_7,
    img_bra_8,
    img_bra_9,
  ],
  Venezuela: [
    img_ven_intro,
    img_ven_0,
    img_ven_1,
    img_ven_2,
    img_ven_3,
    img_ven_4,
    img_ven_5,
    img_ven_6,
    img_ven_7,
    img_ven_8,
    img_ven_9,
  ],
  Argentina: [
    img_arg_intro,
    img_arg_0,
    img_arg_1,
    img_arg_2,
    img_arg_3,
    img_arg_4,
    img_arg_5,
    img_arg_6,
    img_arg_7,
    img_arg_8,
    img_arg_9,
  ],
  Colombia: [
    img_col_intro,
    img_col_0,
    img_col_1,
    img_col_2,
    img_col_3,
    img_col_4,
    img_col_5,
    img_col_6,
    img_col_7,
    img_col_8,
    img_col_9,
  ],
  Mexico: [
    img_mex_intro,
    img_mex_0,
    img_mex_1,
    img_mex_2,
    img_mex_3,
    img_mex_4,
    img_mex_5,
    img_mex_6,
    img_mex_7,
    img_mex_8,
    img_mex_9,
  ],
  Germany: [
    img_ale_intro,
    img_ale_0,
    img_ale_1,
    img_ale_2,
    img_ale_3,
    img_ale_4,
    img_ale_5,
    img_ale_6,
    img_ale_7,
    img_ale_8,
    img_ale_9,
  ],
  Japan: [
    img_jap_intro,
    img_jap_0,
    img_jap_1,
    img_jap_2,
    img_jap_3,
    img_jap_4,
    img_jap_5,
    img_jap_6,
    img_jap_7,
    img_jap_8,
    img_jap_9,
  ],
};

const paisesTop = [
  "Brazil",
  "Venezuela",
  "Argentina",
  "Colombia",
  "Mexico",
  "Germany",
  "Japan",
];

export default function Presentations(props) {
  let dispatch = useDispatch();
  let countrie = props.countrie;

  const hamdleClick = () => {
    dispatch(actions.setDisplay(false));
  };

  if (paisesTop.includes(countrie)) {
    console.log("yes");
  } else {
    console.log("no");
  }

  return (
    <div className={styles.theme}>
      <div className={styles.displayOn}>
        {paisesTop.includes(countrie) ? (
          photos[countrie].map((photo, index) => {
            switch (index) {
              case 0:
                index = `${styles.photo0}`;
                break;
              case 1:
                index = `${styles.photo1}`;
                break;
              case 2:
                index = `${styles.photo2}`;
                break;
              case 3:
                index = `${styles.photo3}`;
                break;
              case 4:
                index = `${styles.photo4}`;
                break;
              case 5:
                index = `${styles.photo5}`;
                break;
              case 6:
                index = `${styles.photo6}`;
                break;
              case 7:
                index = `${styles.photo7}`;
                break;
              case 8:
                index = `${styles.photo8}`;
                break;
              case 9:
                index = `${styles.photo9}`;
                break;
              case 10:
                index = `${styles.photo10}`;
                break;
              default:
                break;
            }
            return (
              <img src={photo} key={index} className={index} alt={index} />
            );
          })
        ) : (
          <div>
            <h1>No information about this Country</h1>
          </div>
        )}

        <button className={styles.boton} onClick={hamdleClick}>
          BACK
        </button>
      </div>
    </div>
  );
}
