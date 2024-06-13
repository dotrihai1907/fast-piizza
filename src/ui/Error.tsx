import { useNavigate, useRouteError } from "react-router-dom";
import { IError } from "../services/apiModel";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError() as IError;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data ?? error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default Error;
