import {
  ADD_ALL_COUNTRIES,
  ADD_COUNTRIE_NAME,
  CHANGE_PAGE,
  CHANGE_THEME,
  ADD_TOP,
  DELETE_TOP,
  FILTER_CONT,
  ORDER_POB_MAYOR,
  ORDER_POB_MENOR,
  ORDER_NAME_MAYOR,
  ORDER_NAME_MENOR,
  CHANGE_DISPLAY,
  FILTER_TOP,
  DELETE_COUNTRIE_NAME,
  SELECT_COUNTRIE,
  DELETE_SELECT_COUNTRIE,
  FILTER_ACT,
  GET_ACTIVITY,
  DELETE_ACT,
  CHANGE_IDIOM,
} from "../actions";
import { dbTop } from "../../utils/dbTop";

const initialState = {
  myCountries: [],
  allCountries: [],
  myDetail: [],
  myTop: dbTop,
  currentPage: 1,
  theme: false,
  display: false,
  idiom: "en",
  countriesActivity: [],
  activity: [{ nombre: "All" }],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_COUNTRIES:
      return {
        ...state,
        myCountries: [...state.myCountries, ...action.payload],
        allCountries: [...state.allCountries, ...action.payload],
      };

    case GET_ACTIVITY:
      return {
        ...state,
        activity: [{ nombre: "All" }, ...action.payload],
      };

    case ADD_TOP:
      return {
        ...state,
        myTop: [...state.myTop, action.payload],
      };

    case SELECT_COUNTRIE:
      return {
        ...state,
        countriesActivity: [...state.countriesActivity, action.payload],
      };

    case DELETE_ACT:
      return {
        ...state,
        activity: [{ nombre: "All" }],
      };

    case DELETE_SELECT_COUNTRIE:
      if (action.payload === "all")
        return {
          ...state,
          countriesActivity: [],
        };

      return {
        ...state,
        countriesActivity: state.countriesActivity.filter(
          (countrie) => countrie !== action.payload
        ),
      };

    case DELETE_TOP:
      return {
        ...state,
        myTop: state.myTop.filter((countrie) => countrie.id !== action.payload),
      };

    case FILTER_TOP: {
      switch (action.payload) {
        case "All":
          return {
            ...state,
            myCountries: state.allCountries,
            currentPage: 1,
          };

        case "Travel Top":
          return {
            ...state,
            myCountries: state.allCountries?.filter((countrie) => {
              return state.myTop.find(
                (item) => item.nombre === countrie.nombre
              );
            }),
            currentPage: 1,
          };

        default:
          break;
      }
      break;
    }

    case ADD_COUNTRIE_NAME:
      return {
        ...state,
        myDetail: [action.payload],
      };

    case DELETE_COUNTRIE_NAME:
      return {
        ...state,
        myDetail: [],
      };
    case CHANGE_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case CHANGE_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }

    case CHANGE_IDIOM: {
      return {
        ...state,
        idiom: action.payload,
      };
    }

    case CHANGE_DISPLAY: {
      return {
        ...state,
        display: action.payload,
      };
    }

    case FILTER_CONT: {
      if (action.payload === "All") {
        return {
          ...state,
          myCountries: state.allCountries,
          currentPage: 1,
        };
      } else {
        return {
          ...state,
          myCountries: state.allCountries?.filter(
            (countrie) => countrie.continente === action.payload
          ),
          currentPage: 1,
        };
      }
    }

    case FILTER_ACT: {
      if (action.payload === "All")
        return {
          ...state,
          myCountries: state.allCountries,
        };
      return {
        ...state,
        myCountries: state.allCountries?.filter(
          (countrie) =>
            countrie.Activities &&
            countrie.Activities.map((act) => act.nombre).includes(
              action.payload
            )
        ),
        currentPage: 1,
      };
    }

    case ORDER_POB_MAYOR:
      return {
        ...state,
        myCountries: state.myCountries.sort(
          (a, b) => b.poblacion - a.poblacion
        ),
      };
    case ORDER_POB_MENOR:
      return {
        ...state,
        myCountries: state.myCountries.sort(
          (a, b) => a.poblacion - b.poblacion
        ),
      };
    case ORDER_NAME_MAYOR:
      return {
        ...state,
        myCountries: state.myCountries.sort((a, b) => {
          if (a.nombre < b.nombre) {
            return -1;
          } else if (a.nombre > b.nombre) {
            return 1;
          } else {
            return 0;
          }
        }),
      };
    case ORDER_NAME_MENOR:
      return {
        ...state,
        myCountries: state.myCountries
          .sort((a, b) => {
            if (a.nombre < b.nombre) {
              return -1;
            } else if (a.nombre > b.nombre) {
              return 1;
            } else {
              return 0;
            }
          })
          .reverse(),
      };

    default:
      return state;
  }
};

export default rootReducer;
