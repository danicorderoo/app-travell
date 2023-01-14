import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as actions from "../redux/actions";

export const addCountrie = (countrieId) => {
  let dispatch = useDispatch();
  const [countrie, setCountrie] = useState({});

  async () => {
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

  return countrie;
};
