import { ado_rows } from "./index.js";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Ado from "./pages/Ado.jsx";
import Album from "./pages/Album.jsx";
import RadWimps from "./pages/RadWimps.jsx";
import Aizen from "./pages/Aizen.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/ado-music",
      element: <Ado ado_rows={ado_rows} />,
    },
    {
      path: "/album",
      element: <Album />,
    },
    {
      path: "/radwimps",
      element: <RadWimps />,
    },
    {
      path: "/aizen",
      element: <Aizen />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
