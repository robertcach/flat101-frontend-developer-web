import { GET_PRODUCTS, NEW_PRODUCT } from "../types/index"
import { listProducts, createProduct } from "../../services/ProductsService";

export function getProducts()  {
  return (dispatch) => {
    listProducts()
    .then(res => dispatch(downloadProducts(res)))
    .catch(err => console.log(err))
  }
}

const downloadProducts = products => ({type: GET_PRODUCTS, payload: products})


export function addProduct(product) {
  return (dispatch) => {
    createProduct(product)
      .then(res => dispatch(addProductSuccess(res)))
      .catch(err => {
          console.log(err)
      })
  }
}


const addProductSuccess = product => ({
  type: NEW_PRODUCT,
  payload: product
})
