import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/CourseDatails/CourseDetails";

import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Checkout from "../../Pages/Checkout/Checkout";
import Register from "../../Pages/Login/Register/Register";
import Login from "../../Pages/Login/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/home',
            element:<Home></Home>
          },
          {
            path:'/courses',
            element:<Courses></Courses>
          },
          {
            path:'/course-details/:id',
            loader: ({params}) => fetch(`https://assignment-10-learning-platform-server-side.vercel.app/course-details/${params.id}`),
            element:<CourseDetails></CourseDetails>
          },
          {
            path:"/premium-access/:id",
            loader: ({params}) => fetch(`https://assignment-10-learning-platform-server-side.vercel.app/course-details/${params.id}`),
            element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
          },
          {
            path:"/faq",
            element:<Faq></Faq>
          },
          
          {
            path:"/blog",
            element:<Blog></Blog>
          },
          {
            path:"/register",
            element:<Register></Register>
          },
         
          {
            path:"/login",
            element:<Login></Login>
          },
          
        
        ]
    }
])