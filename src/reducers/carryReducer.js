import { TYPES } from "../actions/carryAction";

export const shoppingInitalState = {
  products: [],
};

export function carryReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
    }

    case TYPES.REMOVE_ALL_FROM_CART: {
    }

    case TYPES.CLEAR_CART: {
    }
    default:
      return state;
  }
}
