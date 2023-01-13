import React from "react";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import Paginado from "../Paginado/Paginado";
import Filter from "../FilterBar/FilterBar";
import Loading from "../Loading/Loading";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
import { useState } from "react";
// import { useEffect } from "react";

export default function Home(props) {
  let countries = useSelector((state) => state.myCountries);
  let Page = useSelector((state) => state?.currentPage);
  let theme = useSelector((state) => state.theme);
  let dispatch = useDispatch();
  const data = countries;
  const dataLimit = 10;
  const pages = Math.round(data?.length / dataLimit);
  const [filter, setFilter] = useState(false);

  // useEffect(() => {
  //   dispatch(actions.getActivity());
  // }, [dispatch]);

  const goToNextPage = () => {
    if (Page < pages) dispatch(actions?.currentPage(Page + 1));
  };
  const goToPreviousPage = () => {
    if (Page > 1) dispatch(actions?.currentPage(Page - 1));
  };
  const goToFirstPage = () => {
    dispatch(actions.currentPage(1));
  };
  const goToLastPage = () => {
    pages > 0 && dispatch(actions.currentPage(pages));
  };
  const getPaginatedData = () => {
    if (Page === 1) {
      return data?.slice(0, 9);
    }
    const startIndex = Page * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data?.slice(startIndex, endIndex);
  };
  const onChangeFilter = () => {
    if (filter) {
      setFilter(false);
      dispatch(actions.DeleteAct());
    } else {
      setFilter(true);
      dispatch(actions.getActivity());
    }
  };

  return (
    <div>
      {countries[0] ? (
        <div className={theme ? styles.themeDay : styles.themeNigth}>
          <SearchBar />
          <Filter state={filter} />
          <button
            className={filter ? styles.filterOn : styles.filterOff}
            name="theme"
            onClick={() => onChangeFilter()}
          ></button>

          <Paginado
            currentPage={Page}
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
            goToFirstPage={goToFirstPage}
            goToLastPage={goToLastPage}
          ></Paginado>
          <div className={styles.cards}>
            {getPaginatedData().length > 0 ? (
              !getPaginatedData()[0].hasOwnProperty("notFound") ? (
                getPaginatedData().map((country) => {
                  const { id, nombre, bandera, continente } = country;
                  return (
                    <Card
                      key={id}
                      id={id}
                      nombre={nombre}
                      bandera={bandera}
                      continente={continente}
                    />
                  );
                })
              ) : (
                <h2>No countries found...</h2>
              )
            ) : null}
          </div>
          <Paginado
            currentPage={Page}
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
            goToFirstPage={goToFirstPage}
            goToLastPage={goToLastPage}
          ></Paginado>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
