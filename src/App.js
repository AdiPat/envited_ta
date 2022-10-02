import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.scss";
import { LandingPage, CreatePage, EventPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
  {
    path: "/event",
    element: <EventPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
