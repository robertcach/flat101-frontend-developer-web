import "./ProductCard.scss";

const ProductCard = ({ title, description, image, price }) => {
  return (
    <article className="products-card">
      <img className="products-card__image" src={image} alt={title} />
      <h2 className="products-card__title">{title}</h2>
      <p className="products-card__description">{description}</p>
      <p>{price} €</p>
    </article>
  )
}

export default ProductCard