import http from "./BaseService"

export const listProducts = () => http.get("/");
export const createProduct = (data) => http.post("/new-product", data);