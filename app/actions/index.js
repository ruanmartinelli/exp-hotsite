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
        { id: 1, available: true, name: 'Masculino' },
        { id: 2, available: true, name: 'Feminino' },
        { id: 3, available: false, name: 'Zoidberg' }
    ]
  }
});
