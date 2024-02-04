import React from 'react'
import Navbar from '../layouts/navbar/Navbar'
import Footer from '../layouts/footer/Footer'
import LargeAppliances from '../components/shop/LargeAppliances'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'


function LargeAppliancess() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <LargeAppliances />
            <Footer />
        </>
    )
}

export default LargeAppliancess