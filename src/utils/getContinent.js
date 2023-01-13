import styles from "../components/Header/Header.module.css";

export const getContinent = (continente) => {
  let continentes = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Oceania_on_the_globe_%28red%29_%28Polynesia_centered%29.svg/280px-Oceania_on_the_globe_%28red%29_%28Polynesia_centered%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Asia_on_the_globe_%28red%29.svg/280px-Asia_on_the_globe_%28red%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Americas_on_the_globe_%28red%29.svg/280px-Americas_on_the_globe_%28red%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Africa_on_the_globe_%28red%29.svg/280px-Africa_on_the_globe_%28red%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Europe_on_the_globe_%28red%29.svg/280px-Europe_on_the_globe_%28red%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Antarctica_on_the_globe_%28red%29.svg/280px-Antarctica_on_the_globe_%28red%29.svg.png",
  ];

  switch (continente) {
    case "Oceania":
      return continentes[0];

    case "Asia":
      return continentes[1];

    case "Americas":
      return continentes[2];

    case "Africa":
      return continentes[3];

    case "Europe":
      return continentes[4];

    case "Antarctic":
      return continentes[5];

    default:
      break;
  }
};

export const positionContinent = (continente) => {
  switch (continente) {
    case "Oceania":
      return styles.world_Oceania;

    case "Asia":
      return styles.world_Asia;

    case "Americas":
      return styles.world_Americas;

    case "Africa":
      return styles.world_Africa;

    case "Europe":
      return styles.world_Europe;

    case "Antarctic":
      return styles.world_Antarctic;

    default:
      return styles.world;
  }
};
