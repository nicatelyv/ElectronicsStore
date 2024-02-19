import React from 'react'
import Navbar from "../layouts/navbar/Navbar"
import Footer from "../layouts/footer/Footer"
import SlideShow from '../components/slide/Slide'
import Reklam from '../components/reklam/Reklam'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'
import SlideBrands from '../components/slideBrands/SlideBrands'
import NewProducts from '../components/newProducts/NewProducts'
import UpButton from '../components/upButton/UpButton'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';
import HomeVideo from '../components/homeVideo/homeVideo'

function Home() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("Ana səhifə")} - Electronics Store</title>
            </Helmet>
            <MobileNavbar />
            <Navbar />
            <SlideShow />
            <Reklam />
            <SlideBrands />
            <NewProducts />
            <HomeVideo />
            <Footer />
            <UpButton />
        </>
    )
}

export default Home