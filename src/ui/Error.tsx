import { useRouteError } from "react-router-dom";
import { IError } from "../services/apiModel";
import LinkButton from "./LinkButton";

const Error = () => {
  const error = useRouteError() as IError;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data ?? error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
};

export default Error;
