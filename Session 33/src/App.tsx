import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Notification from "./components/Notification";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center p-4">🍕 Quản lý sản phẩm</h1>
      <Notification />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        <div className="lg:col-span-2">
          <ProductList />
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
