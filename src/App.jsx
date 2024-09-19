import "./App.css";
import Home from "./Home";
import BuildSerachFilter from "./Tasks/BuildSerachFilter";
import CreateCounter from "./Tasks/CreateCounter";
import SmallProgramming from "./Tasks/SmallProgramming";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/task1",
      element: <SmallProgramming />,
    },
    {
      path: "/task2",
      element: <CreateCounter />,
    },
    {
      path: "/task3",
      element: <BuildSerachFilter />,
    },
  ]);

  return <RouterProvider router={browserRouter} />;
}

export default App;
