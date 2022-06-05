import { useEffect, useState } from "react";
import { listProducts } from "../../services/ProductsService"
import "./Home.scss";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    listProducts()
      .then(allProducts => setProducts(allProducts))
  },[])


  return (
  <>
    <h1>All products</h1>
    {products && products.map(product => {
      return (
        <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
        </>
      )
    })}
    </>

  )
}

export default Home;