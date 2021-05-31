import { SET_FILTER } from "../actions/actionTypes";
import { FILTERS } from "../../utils/constants";

const initialState = FILTERS.ALL;

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default filter;
