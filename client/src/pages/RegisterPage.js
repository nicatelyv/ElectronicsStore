import React from 'react'
import Register from "../components/register/Register"
import Navbar from '../layouts/navbar/Navbar'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

export default function RegisterPage() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("Qeydiyyatdan keç")} - Electronics Store</title>
            </Helmet>
            <MobileNavbar />
            <Navbar />
            <Register />
        </>
    )
}
