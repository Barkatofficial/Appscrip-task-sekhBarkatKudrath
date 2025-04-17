
export default function ProductCard({ product }) {
    return (
      <article className="product-card">
        <img src={product.image} alt={product.alt} />
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
      </article>
    );
  }