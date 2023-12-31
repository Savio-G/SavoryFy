import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import About from "../Components/About";
import Blog from "../Components/Blog";
import ChefDetail from "../Components/Chefs/ChefDetail";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "../Components/PrivateRoute";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><ChefDetail></ChefDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
      },
      {
        path: "/Login",
        element: <Login></Login>
      },
      {
        path: "/Register",
        element: <Register></Register>
      }
    ]
  },
]);

export default router