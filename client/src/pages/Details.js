import React from 'react'
import { Helmet } from 'react-helmet'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar';
import Navbar from '../layouts/navbar/Navbar';
import Footer from '../layouts/footer/Footer';
import { useTranslation } from 'react-i18next';
import DetailsProduct from '../components/detailsProduct/DetailsProduct';

function Details() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("Details")} - Electronics Store</title>
            </Helmet>
            <MobileNavbar />
            <Navbar />
            <DetailsProduct />
            <Footer />
        </>
    )
}

export default Details