import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AboutUs from "./About";
import "./index.css";

const Applayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path : "/",
      element : <Applayout/>
    },
    {
      path : "/about",
      element : <AboutUs/>
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
