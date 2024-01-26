import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import Logout from "../pages/Logout"
import ErrorPage from "../pages/ErrorPage";
import Shop from "../pages/Shop";
import Details from "../pages/Details";

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
        path: "/shop/:id/details",
        element: <Details />
    },
    localStorage.getItem("username") ? {
        path: "/giris",
        element: <Home />,
    } : {
        path: "/giris",
        element: <LoginPage />
    },
    localStorage.getItem("username") ? {
        path: "/qeydiyyat",
        element: <Home />
    } : {
        path: "/qeydiyyat",
        element: <RegisterPage />
    },
    {
        path: "/logout",
        element: <Logout />
    }
])