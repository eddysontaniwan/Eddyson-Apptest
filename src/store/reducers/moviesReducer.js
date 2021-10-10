import {type} from '../actions';

const initialState = {
  data: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.setMovies:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default movieReducer;
