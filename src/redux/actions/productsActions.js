import { GET_PRODUCTS } from "../types/index"
import { listProducts } from "../../services/ProductsService";

export function getProducts()  {
  return (dispatch) => {
    listProducts()
    .then(res => dispatch(downloadProducts(res)))
    .catch(err => {
        console.log(err)
    })
  }
}

const downloadProducts = products => ({type: GET_PRODUCTS, payload: products})