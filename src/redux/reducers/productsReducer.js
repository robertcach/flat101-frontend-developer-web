import { GET_PRODUCTS } from "../types/index";

const initialState = {
  products: [],
  error: null,
  oneProduct: null
}

export function productsReducer(state = initialState, action) {
  switch(action.type) {
    case GET_PRODUCTS:
        return ({
            ...state,
            oneProduct: null,
            products: action.payload
        })
    default:
        return state;
  }
}