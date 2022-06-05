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
    <main>
      <section className="header wrapper">
        <div className="header__left">
          <h1 className="header__title">New trendy Fashion</h1>
          <a className="header__btn" href="#products">Go to shop</a>
        </div>

        <div className="header__center">
          <img src="https://picsum.photos/id/157/600/750" alt="imagen-superior-izquierda" />
        </div>

        <div className="header__right">
          <p className="header__subtitle">I must explains to you how all this idea of denouncing pleasure</p>
        </div>  
      </section>

    <section id="products" className="products wrapper">
      <h2 className="products__title">Products</h2>
      <div className="products__cards">
        {products && products.map(product => {
          return (
            <ProductCard
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            /> 
          )
        })}

      </div>

    </section>
  </main>

  )
}

export default Home;