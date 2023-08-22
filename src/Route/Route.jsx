import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import About from "../Components/About";
import Blog from "../Components/Blog";
import ChefDetail from "../Components/Chefs/ChefDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/homePage')
      },
      {
        path: "/About",
        element: <About></About>
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      },
      {
        path: "/ChefDetail/:id",
        element: <ChefDetail></ChefDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
      }
    ]
  },
]);

export default router