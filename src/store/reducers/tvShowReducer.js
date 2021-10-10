import {type} from '../actions';

const initialState = {
  data: [],
};

const tvShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.setTV:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default tvShowReducer;
