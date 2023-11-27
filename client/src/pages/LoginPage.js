import React from 'react'
import Login from "../components/login/Login"
import Navbar from '../layouts/navbar/Navbar'
import MobileNavbar from '../layouts/mobileNavbar/MobileNavbar'

export default function LoginPage() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <Login />
        </>
    )
}
