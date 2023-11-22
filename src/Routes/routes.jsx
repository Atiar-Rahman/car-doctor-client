import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import Checkout from "../Pages/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path: '/',
            element:<Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element:<Signup></Signup>
      },
      {
        path: 'checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      }
    ]
  },
]);


export default router;