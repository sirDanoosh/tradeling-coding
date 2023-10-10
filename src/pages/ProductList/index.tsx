import ProductList from "../../components/product_list";
import useProductPage from "./useProductPage";

function ProductListPage() {
  const { isLoading, products, searchHandler } = useProductPage();

  return isLoading ? (
    <div>is loading ...</div>
  ) : (
    <ProductList products={products} onSearch={searchHandler} />
  );
}

export default ProductListPage;
