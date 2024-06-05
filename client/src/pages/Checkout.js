import React from 'react'
import { Helmet } from 'react-helmet'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'
import Navbar from '../layouts/navbar/Navbar'
import Footer from '../layouts/footer/Footer'
import CheckoutComponent from '../components/Check out/CheckoutComponent'
import { useTranslation } from 'react-i18next'

function Checkout() {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t("Checkout")} - Electronics Store</title>
            </Helmet>
            <MobileNavbar />
            <Navbar />
            <CheckoutComponent />
            <Footer />
        </>
    )
}

export default Checkout