import { NavLink, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <p className="error-message">Something went wrong.</p>
      {error && <p className="error-detail">{error.statusText || error.message}</p>}
      
      <NavLink to="/">
        <button className="error-button">Go Back Home</button>
      </NavLink>
    </div>
  );
};
