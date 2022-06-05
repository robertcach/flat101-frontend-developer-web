import { useEffect} from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from '../../redux/actions/productsActions'
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      const products = () => dispatch(getProducts())
      products()
  }, [dispatch])

  const allProducts = useSelector(state => state.allProducts.products)

  return (
    <main>
      <section className="header wrapper">
        <div className="header__left">
          <h1 className="header__title">New trendy Fashion</h1>
          <a className="header__btn" href="#products">Go to shop</a>
        </div>

        <div className="header__center">
          <img src="https://picsum.photos/id/157/600/750" className="header__img" alt="header-image" />
        </div>

        <div className="header__right">
          <p className="header__subtitle">I must explains to you how all this idea of denouncing pleasure</p>
        </div>  
      </section>

      <section id="products" className="products wrapper">
        <h2 className="products__title">Products</h2>
        <div className="products__cards">
          {allProducts && allProducts.map(product => {
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