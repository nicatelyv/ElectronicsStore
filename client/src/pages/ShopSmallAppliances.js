import React from 'react'
import Navbar from '../layouts/navbar/Navbar'
import Footer from '../layouts/footer/Footer'
import SmallAppliances from '../components/shop/SmallAppliances'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'


function SmallAppliancess() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <SmallAppliances />
            <Footer />
        </>
    )
}

export default SmallAppliancess