import styles from "./Paginado.module.css";
import { useSelector } from "react-redux";

const Pagination = (props) => {
  let theme = useSelector((state) => state.theme);
  const {
    currentPage,
    goToNextPage,
    goToPreviousPage,
    goToFirstPage,
    goToLastPage,
  } = props;

  return (
    <div className={styles.mainContainer}>
      <button onClick={goToFirstPage} className={styles.pagBtn}>
        First
      </button>
      <button onClick={() => goToPreviousPage()} className={styles.pagBtn}>
        Previous
      </button>

      <span className={theme ? styles.themeDay : styles.themeNigth}>
        {currentPage}
      </span>

      <button onClick={() => goToNextPage()} className={styles.pagBtn}>
        Next
      </button>
      <button onClick={goToLastPage} className={styles.pagBtn}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
