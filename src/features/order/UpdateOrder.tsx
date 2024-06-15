/* eslint-disable react-refresh/only-export-components */
import { ActionFunctionArgs, useFetcher } from "react-router-dom";
import { IUpdateOrder } from "../../services/apiModel";
import { updateOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

export const updatePriorityAction = async ({ params }: ActionFunctionArgs) => {
  const data: IUpdateOrder = {
    priority: true,
  };
  await updateOrder(params.orderId ?? "", data);
  return null;
};

const UpdateOrder = () => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>;
    </fetcher.Form>
  );
};

export default UpdateOrder;
