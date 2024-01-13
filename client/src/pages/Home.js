import React from 'react'
import Navbar from "../layouts/navbar/Navbar"
import Footer from "../layouts/footer/Footer"
import SlideShow from '../components/slide/Slide'
import Reklam from '../components/reklam/Reklam'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'
import SlideBrands from '../components/slideBrands/SlideBrands'
import UpButton from '../components/upButton/UpButton'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

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
            <div style={{ width: "100%", minHeight: "30vh", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/024/044/729/non_2x/opening-soon-coming-soon-template-coming-soon-logo-sign-coming-soon-banner-design-vector.jpg)', marginTop: "50px", marginBottom: "50px" }}></div>
            <Footer />
            <UpButton />
        </>
    )
}

export default Home