export const type = {
  setMovies: 'setMovies',
};

export const setMovies = payload => {
  return {
    payload,
    type: type.setMovies,
  };
};
export const addMovies = (prevState, newItem) => {
  let payload = [...prevState, newItem];
  return {
    payload,
    type: type.setMovies,
  };
};
