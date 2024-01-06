import React from 'react'
import Navbar from "../layouts/navbar/Navbar"
import Footer from "../layouts/footer/Footer"
import SlideShow from '../components/slide/Slide'
import Reklam from '../components/reklam/Reklam'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'
import SlideBrands from '../components/slideBrands/SlideBrands'
import UpButton from '../components/upButton/UpButton'

function Home() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <SlideShow />
            <Reklam />
            <SlideBrands />
            <Footer />
            <UpButton />
        </>
    )
}

export default Home