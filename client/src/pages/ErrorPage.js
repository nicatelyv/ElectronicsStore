import React from 'react'
import Navbar from '../layouts/navbar/Navbar'
import Footer from '../layouts/footer/Footer'
import Error404 from '../components/error404/Error404'
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next';
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'

function ErrorPage() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("Səhifə tapılmadı")} - Electronics Store</title>
            </Helmet>
            <MobileNavbar />
            <Navbar />
            <Error404 />
            <Footer />
        </>
    )
}

export default ErrorPage