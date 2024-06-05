import React from 'react'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar';
import Navbar from '../layouts/navbar/Navbar';
import Footer from '../layouts/footer/Footer';
import ConfirmOrder from "../components/Confirm Order/ConfirmOrder"

function ConfirmPage() {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t("Confirm")} - Electronics Store</title>
            </Helmet>
            <MobileNavbar />
            <Navbar />
            <ConfirmOrder />
            <Footer />
        </>
    )
}

export default ConfirmPage