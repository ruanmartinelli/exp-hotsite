import { FETCH_KIT_GENDERS } from '../actions/actionTypes';

const initialState = {};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_KIT_GENDERS:
      return {
        ...state,
        genders: action.payload.genders
      };
    default:
      return state;
  }
}
