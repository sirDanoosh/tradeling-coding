import { useEffect, useState } from "react";
import { IProduct, IProductListDTO } from "../../../types";

function useProductPage() {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchListHandler() {
    try {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res: IProductListDTO) => {
          setProducts(res.products);
        });
      setIsLoading(false);
    } catch (e) {
      console.log("Error on fetch", e);
      setIsLoading(false);
    }
  }

  async function searchHandler(key: string) {
    try {
      setIsLoading(true);
      await fetch(`https://dummyjson.com/products/search?q=${key}`)
        .then((res) => res.json())
        .then((res: IProductListDTO) => {
          setProducts(res.products);
        });
      setIsLoading(false);
    } catch (e) {
      console.log("Error on fetch", e);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchListHandler();
  }, []);

  return {
    products,
    isLoading,
    searchHandler,
  };
}

export default useProductPage;
