import { IProduct } from "../../../types";
import "./product-card.scss";

function ProductCard(props: IProduct) {
  const { thumbnail, title, category, price, id } = props;

  return (
    <a className="product-card" href={`/product-page/${id}`}>
      {/* image carousel */}
      {/* title */}
      {/* price on right */}
      {/* category on left */}

      <img src={thumbnail} alt={title} className="product-card__img" />

      <h3 className="product-card__title">{title}</h3>

      <section className="product-card__detail">
        <h5 className="product-card__detail__cat">{category}</h5>
        <span className="product-card__detail__price">${price}</span>
      </section>
    </a>
  );
}

export default ProductCard;
