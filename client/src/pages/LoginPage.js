import React from 'react'
import Login from "../components/login/Login"
import Navbar from '../layouts/navbar/Navbar'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

export default function LoginPage() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('Daxil ol')} - Electronics Store</title>
            </Helmet>
            <MobileNavbar />
            <Navbar />
            <Login />
        </>
    )
}
