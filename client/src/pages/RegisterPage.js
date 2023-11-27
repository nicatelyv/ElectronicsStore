import React from 'react'
import Register from "../components/register/Register"
import Navbar from '../layouts/navbar/Navbar'
import MobileNavbar from '../layouts/mobileNavbar/MobileNavbar'

export default function RegisterPage() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <Register />
        </>
    )
}
