import { IMenu } from "../../services/apiModel";
import { formatCurrency } from "../../utils/helpers";

type PizzaProps = {
  pizza: IMenu;
};

const MenuItem = ({ pizza }: PizzaProps) => {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
