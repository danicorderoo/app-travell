import axios from "axios";

export const ADD_ALL_COUNTRIES = "ADD_ALL_COUNTRIES";
export const ADD_COUNTRIE_NAME = "ADD_COUNTRIE_NAME";
export const DELETE_COUNTRIE_NAME = "DELETE_COUNTRIE_NAME";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_IDIOM = "CHANGE_IDIOM";
export const CHANGE_DISPLAY = "CHANGE_DISPLAY";
export const ADD_TOP = "ADD_TOP";
export const DELETE_TOP = "DELETE_TOP";
export const FILTER_TOP = "FILTER_TOP";
export const FILTER_CONT = "FILTER_CONT";
export const FILTER_ACT = "FILTER_ACT";
export const ORDER_POB_MAYOR = "ORDER_POB_MAYOR";
export const ORDER_POB_MENOR = "ORDER_POB_MENOR";
export const ORDER_NAME_MAYOR = "ORDER_NAME_MAYOR";
export const ORDER_NAME_MENOR = "ORDER_NAME_MENOR";
export const SELECT_COUNTRIE = "SELECT_COUNTRIE";
export const DELETE_SELECT_COUNTRIE = "DELETE_SELECT_COUNTRIE";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const DELETE_ACT = "DELETE_ACT";

export const addAllCountries = () => {
  return async (dispatch) => {
    try {
      const conuntries = await axios.get("/countries");
      console.log({ conuntries });

      dispatch({
        type: ADD_ALL_COUNTRIES,
        payload: conuntries.data,
      });
    } catch (error) {
      window.alert("Error in API");
      console.log(error);
    }
  };
};

export const addCountrieName = (name) => {
  return async (dispatch) => {
    try {
      const conuntrie = await axios.get(`/countries?name=${name}`);
      dispatch({
        type: ADD_COUNTRIE_NAME,
        payload: conuntrie.data,
      });
    } catch (error) {
      window.alert("Error in API");
      console.log(error);
    }
  };
};

export const getActivity = () => (dispatch) => {
  return async (dispatch) => {
    try {
      const conuntrie = await axios.get(`/activities`);
      dispatch({
        type: GET_ACTIVITY,
        payload: conuntrie.data,
      });
    } catch (error) {
      window.alert("Error in API");
      console.log(error);
    }
  };
};

export const DeleteAct = () => {
  return {
    type: DELETE_ACT,
  };
};

export const DeleteCountrieName = () => {
  return {
    type: DELETE_COUNTRIE_NAME,
  };
};

export const currentPage = (page) => {
  return {
    type: CHANGE_PAGE,
    payload: page,
  };
};

export const selectCountrie = (countrie) => {
  return {
    type: SELECT_COUNTRIE,
    payload: countrie,
  };
};

export const deleteSelectCountrie = (mode) => {
  return {
    type: DELETE_SELECT_COUNTRIE,
    payload: mode,
  };
};

export const addTop = (countrie) => {
  return {
    type: ADD_TOP,
    payload: countrie,
  };
};

export const deleteTop = (id) => {
  return {
    type: DELETE_TOP,
    payload: id,
  };
};

export const setTheme = (theme) => {
  return {
    type: CHANGE_THEME,
    payload: theme,
  };
};

export const setIdiom = (idiom) => {
  return {
    type: CHANGE_IDIOM,
    payload: idiom,
  };
};

export const setDisplay = (state) => {
  return {
    type: CHANGE_DISPLAY,
    payload: state,
  };
};

export const filterCont = (continent) => {
  return {
    type: FILTER_CONT,
    payload: continent,
  };
};

export const filterAct = (activity) => {
  return {
    type: FILTER_ACT,
    payload: activity,
  };
};

export const filterTop = (top) => {
  return {
    type: FILTER_TOP,
    payload: top,
  };
};

export const orderPobMayor = () => {
  return {
    type: ORDER_POB_MAYOR,
  };
};

export const orderPobMenor = () => {
  return {
    type: ORDER_POB_MENOR,
  };
};

export const orderNameMayor = () => {
  return {
    type: ORDER_NAME_MAYOR,
  };
};

export const orderNameMenor = () => {
  return {
    type: ORDER_NAME_MENOR,
  };
};
