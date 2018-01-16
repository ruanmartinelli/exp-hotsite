import { FETCH_KIT_GENDERS, FETCH_KIT_SHOESIZES } from '../actions/actionTypes';

const initialState = {};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_KIT_GENDERS:
      return {
        ...state,
        genders: action.payload.genders
      };
    case FETCH_KIT_SHOESIZES:
      return {
        ...state,
        shoeSizes: action.payload.shoeSizes
      };
    default:
      return state;
  }
}
