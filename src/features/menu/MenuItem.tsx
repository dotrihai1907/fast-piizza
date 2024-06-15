import { useDispatch, useSelector } from "react-redux";
import { ICart, IMenu } from "../../services/apiModel";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateQuantityItem from "../cart/UpdateQuantityItem";

type PizzaProps = {
  pizza: IMenu;
};

const MenuItem = ({ pizza }: PizzaProps) => {
  const dispatch = useDispatch();

  const { name, unitPrice, ingredients, soldOut, imageUrl, id } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const handleAddToCart = () => {
    const newItem: ICart = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut &&
            (currentQuantity ? (
              <div className="flex items-center gap-3 sm:gap-8">
                <UpdateQuantityItem id={id} quantity={currentQuantity} />
                <DeleteItem id={id} />
              </div>
            ) : (
              <Button type="small" onClick={handleAddToCart}>
                Add to cart
              </Button>
            ))}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
