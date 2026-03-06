import { createHashRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { MoviesDetails } from "./views/movieDetails/MoviesDetails";
import { Movies } from "./views/movies/Movies";
import { RootLayout } from "./views/RootLayout";

export const routes = createHashRouter([
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


