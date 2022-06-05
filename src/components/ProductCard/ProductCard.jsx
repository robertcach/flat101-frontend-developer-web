const ProductCard = ({ title, description, image }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
    </>
  )
}

export default ProductCard