export const addCountrie = (countrieId) => {
  return async () => {
    try {
      const conuntrie = await axios.get(`/countries/${countrieId}`);
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
};
