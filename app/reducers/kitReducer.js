import {
  FETCH_KIT_GENDERS,
  FETCH_KIT_SHOESIZES,
  FETCH_KIT_SHIRTSIZES,
  FETCH_KIT_TOPSIZES,
  FETCH_KIT_SHORTSIZES
} from '../actions/actionTypes';

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
    case FETCH_KIT_SHIRTSIZES:
      return {
        ...state,
        shirtSizes: action.payload.shirtSizes
      };
    case FETCH_KIT_TOPSIZES:
      return {
        ...state,
        topSizes: action.payload.topSizes
      };
    case FETCH_KIT_SHORTSIZES:
      return {
        ...state,
        shortSizes: action.payload.shortSizes
      };
    default:
      return state;
  }
}
