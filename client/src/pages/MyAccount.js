import React from 'react'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'
import Navbar from '../layouts/navbar/Navbar'
import AccountNavigation from "../components/AccountNavigation/AccountNavigation"
import { useTranslation } from 'react-i18next'

export const MyAccount = () => {
    const { t } = useTranslation()

    return (
        <>
            <Helmet>
                <title>{t('My Account')} - Electronics Store</title>
            </Helmet>
            <MobileNavbar />
            <Navbar />
            <div style={{ display: "flex", gap: "10px" }}>
                <AccountNavigation />
                <Outlet />
            </div>
        </>
    )
}
