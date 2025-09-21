import { Card, Button } from "antd";
import { useDispatch } from "react-redux";

interface Props {
  product: {
    id: number;
    name: string;
    price: number;
    stock: number;
    img: string;
  };
}

const ProductItem = ({ product }: Props) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    dispatch({ type: "SHOW_NOTIFICATION", payload: `${product.name} đã thêm vào giỏ hàng` });
    setTimeout(() => dispatch({ type: "HIDE_NOTIFICATION" }), 2000);
  };

  return (
    <Card
      cover={<img alt={product.name} src={product.img} className="h-48 object-cover" />}
      className="shadow-md rounded-xl"
    >
      <h3 className="font-bold">{product.name}</h3>
      <p>Giá: ${product.price}</p>
      <p>Còn lại: {product.stock}</p>
      <Button type="primary" onClick={handleAdd} className="mt-2">
        Thêm giỏ hàng
      </Button>
    </Card>
  );
};

export default ProductItem;
