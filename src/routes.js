import { createBrowserRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { Movies } from "./views/movies/Movies";
import { RootLayout } from "./views/RootLayout";
import { MoviesDetails } from "./views/movieDetails/MoviesDetails";
import { ErrorPage } from "./views/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>error page</div>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <MoviesDetails /> }
    ],
  },
]);


