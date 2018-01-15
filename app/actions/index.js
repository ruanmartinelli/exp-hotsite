import { INCREMENT, DECREMENT, FETCH_KIT_GENDERS } from './actionTypes';

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
        { name: 'Masculino' },
        { name: 'Feminino' },
        { name: 'Zoidberg' }
    ]
  }
});
