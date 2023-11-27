import React from 'react'
import Navbar from "../layouts/navbar/Navbar"
import Footer from "../layouts/footer/Footer"
import SlideShow from '../components/slide/Slide'
import Reklam from '../components/reklam/Reklam'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'

function Home() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <SlideShow />
            <Reklam />
            <Footer />
        </>
    )
}

export default Home