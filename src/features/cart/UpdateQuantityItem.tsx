import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

type UpdateQuantityItemProps = { id: number; quantity: number };

const UpdateQuantityItem = ({ id, quantity }: UpdateQuantityItemProps) => {
  const dispatch = useDispatch();

  const handleDecrementQuantity = () => {
    dispatch(decreaseItemQuantity(id));
  };

  const handleIncrementQuantity = () => {
    dispatch(increaseItemQuantity(id));
  };

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={handleDecrementQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button type="round" onClick={handleIncrementQuantity}>
        +
      </Button>
    </div>
  );
};

export default UpdateQuantityItem;
