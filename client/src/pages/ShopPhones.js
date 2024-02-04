import React from 'react'
import Navbar from '../layouts/navbar/Navbar'
import Footer from '../layouts/footer/Footer'
import ShopPhoneComponents from '../components/shop/ShopPhoneComponents'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'


function ShopPhone() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <ShopPhoneComponents />
            <Footer />
        </>
    )
}

export default ShopPhone