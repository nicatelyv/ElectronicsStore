import React from 'react'
import Navbar from '../layouts/navbar/Navbar'
import Footer from '../layouts/footer/Footer'
import ShopComponents from '../components/shop/ShopComponents'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'
function Shop() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <ShopComponents />
            <Footer />
        </>
    )
}

export default Shop