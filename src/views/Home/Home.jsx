import { useEffect, useState } from "react";
import { listProducts } from "../../services/ProductsService";
import ProductCard from "../../components/ProductCard/ProductCard";
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
        <ProductCard
          title={product.title}
          description={product.description}
          image={product.image}  
        /> 
      )
    })}
    </>

  )
}

export default Home;