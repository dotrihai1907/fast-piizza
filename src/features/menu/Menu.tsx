/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { IMenu } from "../../services/apiModel";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";

export const menuLoader = async () => {
  const menu = await getMenu();
  return menu;
};

const Menu = () => {
  const menu = useLoaderData() as IMenu[];

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default Menu;
