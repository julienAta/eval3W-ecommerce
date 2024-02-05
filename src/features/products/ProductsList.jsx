// src/features/products/ProductsList.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";
import ProductItem from "./ProductItem"; // We'll create this component next

export default function ProductsList() {
  const dispatch = useDispatch();
  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
