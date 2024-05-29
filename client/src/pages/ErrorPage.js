import { useRouteError } from "react-router-dom";
import errorImg from "../images/road_closed.webp";
import "../css/Error.css";

export const ErrorPage = () => {
  const error = useRouteError();

  if(error) {
    return (
        <div className="error">
          <img src={errorImg} className="error-img" />
          <h1>{error.message}</h1>
          <h2>{error.status} - Error</h2>
          <p>{error.statusText}</p>
          <button>Back to Home</button>
        </div>
      );
  }
  else return <h1>Some error occured</h1>;
};
