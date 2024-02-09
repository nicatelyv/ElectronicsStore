import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import Logout from "../pages/Logout"
import ErrorPage from "../pages/ErrorPage";
import Shop from "../pages/Shop";
import ShopPhones from "../pages/ShopPhones";
import ShopLargeAppliances from "../pages/ShopLargeAppliances";
import ShopSmallAppliances from "../pages/ShopSmallAppliances";
import ShopTvAndAudio from "../pages/ShopTvAndAudio";
import ShopPhotoTechnique from "../pages/ShopPhotoTechnique";
import ShopNotebookAndComputerEquipment from "../pages/ShopNotebookAndComputerEquipment";
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


    // Shop
    {
        path: "/shop",
        element: <Shop />
    },
    {
        path: "/shop/category=phone",
        element: <ShopPhones />
    },
    {
        path: "/shop/category=large-appliances",
        element: <ShopLargeAppliances />
    },
    {
        path: "/shop/category=small-appliances",
        element: <ShopSmallAppliances />
    },
    {
        path: "/shop/category=tv-and-audio",
        element: <ShopTvAndAudio />
    },
    {
        path: "/shop/category=photo-technique",
        element: <ShopPhotoTechnique />
    },
    {
        path: "/shop/category=notebook-and-computer-equipment",
        element: <ShopNotebookAndComputerEquipment />
    },
    {
        path: "/shop/:id/details",
        element: <Details />
    },
    {
        path: "/shop/:categories/:id/details",
        element: <Details />
    },


    // User
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