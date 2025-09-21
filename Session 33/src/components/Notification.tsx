import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import { Alert } from "antd";

const Notification = () => {
  const message = useSelector((state: RootState) => state.notification);

  if (!message) return null;

  return (
    <div className="fixed top-4 right-4 w-64">
      <Alert message={message} type="success" showIcon />
    </div>
  );
};

export default Notification;
