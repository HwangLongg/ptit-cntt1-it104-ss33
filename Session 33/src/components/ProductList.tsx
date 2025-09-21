import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
