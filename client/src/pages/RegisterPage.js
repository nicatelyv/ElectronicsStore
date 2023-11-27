import React from 'react'
import Register from "../components/register/Register"
import Navbar from '../layouts/navbar/Navbar'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'

export default function RegisterPage() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <Register />
        </>
    )
}
