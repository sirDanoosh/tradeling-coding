import { IProduct } from "../../../types";
import ProductCard from "../product_card";
import SearchBar from "../searchbar";
import "./product-list.scss";

interface IProductList {
  products: Array<IProduct>;
  onSearch: (key: string) => unknown;
}

function ProductList(props: IProductList) {
  const { products, onSearch } = props;

  return (
    <section className="product-list">
      <SearchBar onSearch={onSearch} />
      <div className="product-list__wrapper">
        {products!.map((prd) => (
          <ProductCard {...prd} key={prd.id} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
