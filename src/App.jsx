import { ado_rows, image } from "./index.js";
import "./App.css";
import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import Ado from "./pages/Ado.jsx";
import Album from "./pages/Album.jsx";
import RadWimps from "./pages/RadWimps.jsx";
import Aizen from "./pages/Aizen.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/ado-music",
      element: <Ado ado_rows={ado_rows} Link={Link} />,
    },
    {
      path: "/album",
      element: <Album Link={Link} />,
    },
    {
      path: "/radwimps",
      element: <RadWimps Link={Link} image={image} />,
    },
    {
      path: "/aizen",
      element: <Aizen Link={Link} image={image} />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
