import React from 'react'
import Navbar from "../layouts/navbar/Navbar"
import Footer from "../layouts/footer/Footer"
import SlideShow from '../components/slide/Slide'
import Reklam from '../components/reklam/Reklam'
import MobileNavbar from '../layouts/mobileNavbar/MobileNavbar'

function Home() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <SlideShow />
            <SlideShow />
            <SlideShow />
            <SlideShow />
            <Reklam />
            <Footer />
        </>
    )
}

export default Home