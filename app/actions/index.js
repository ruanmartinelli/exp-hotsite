import {
  INCREMENT,
  DECREMENT,
  FETCH_KIT_GENDERS,
  FETCH_KIT_SHOESIZES
} from './actionTypes';

export const decrement = () => ({
  type: DECREMENT
});

export const increment = () => ({
  type: INCREMENT
});

export const fetchKitGenders = () => ({
  type: FETCH_KIT_GENDERS,
  payload: {
    genders: [
      { id: 1, available: true, name: 'Masculino' },
      { id: 2, available: true, name: 'Feminino' },
      { id: 3, available: false, name: 'Zoidberg' }
    ]
  }
});

export const fetchKitShoeSizes = () => ({
  type: FETCH_KIT_SHOESIZES,
  payload: {
    shoeSizes: [
      { id: 1, name: '34', available: true },
      { id: 2, name: '35', available: true },
      { id: 3, name: '36', available: true },
      { id: 4, name: '37', available: true },
      { id: 5, name: '38', available: true },
      { id: 6, name: '39', available: true },
      { id: 7, name: '40', available: true },
      { id: 8, name: '41', available: true },
      { id: 9, name: '42', available: true },
      { id: 10, name: '43', available: true },
      { id: 11, name: '44', available: true },
      { id: 12, name: '45', available: true },
      { id: 13, name: '46', available: true },
      { id: 14, name: '47', available: true },
    ]
  }
});
