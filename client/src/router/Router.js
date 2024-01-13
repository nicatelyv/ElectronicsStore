import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import Logout from "../pages/Logout"
import ErrorPage from "../pages/ErrorPage";
import Shop from "../pages/Shop";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <ErrorPage />
    },
    {
        path: "/shop",
        element: <Shop />
    },
    {
        path: "/giris",
        element: <LoginPage />
    },
    {
        path: "/qeydiyyat",
        element: <RegisterPage />
    },
    {
        path: "/logout",
        element: <Logout />
    }
])