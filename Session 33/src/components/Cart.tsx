import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import { List, Button } from "antd";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    dispatch({ type: "SHOW_NOTIFICATION", payload: "Đã xóa khỏi giỏ hàng" });
    setTimeout(() => dispatch({ type: "HIDE_NOTIFICATION" }), 2000);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-2">🛒 Giỏ hàng</h2>
      <List
        dataSource={cart}
        renderItem={(item: any) => (
          <List.Item
            actions={[
              <Button danger onClick={() => handleRemove(item.id)}>Xóa</Button>,
            ]}
          >
            {item.name} x {item.quantity} = ${item.price * item.quantity}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Cart;
