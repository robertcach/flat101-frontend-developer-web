import { GET_PRODUCTS, NEW_PRODUCT } from "../types/index";


const initialState = {
  products: [],
  error: null
}

export function productsReducer(state = initialState, action) {
  
  switch(action.type) {
    case GET_PRODUCTS:
        return ({
            ...state,
            products: action.payload
        })
    case NEW_PRODUCT:
      return ({
          ...state,
          products: [...state.products, action.payload]
      })
    default:
        return state;
  }
}