import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center">
      <div className="container text-center py-4">
        <h1 className="text-2xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <em>{error.statusText || error.message}</em>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
