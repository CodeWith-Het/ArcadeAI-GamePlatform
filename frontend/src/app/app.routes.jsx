import { createBrowserRouter } from "react-router-dom"
import Login from '../feature/auth/pages/Login';
import Register from "../feature/auth/pages/Register";
import Home from "../feature/pages/Home";

export const appRouter = createBrowserRouter([
    {
        path: "/login",
        element:<Login />
    },
    {
        path: "/register",
        element:<Register />
    },
    {
        path: "/",
        element:<Home />
    }
])