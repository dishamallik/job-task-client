import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Us from "../Pages/Us";
import Error from "../Pages/Error";
import Private from "../Pages/Private";

  

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,

        },
        {
            path: "/log",
            element: <Login></Login>,
        },
        {
            path: "/reg",
            element: <Register></Register>
        },
        {
            path: "/us",
            element: <Private><Us></Us></Private>
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
     }
  ]);