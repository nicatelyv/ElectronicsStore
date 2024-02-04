import React from 'react'
import Navbar from '../layouts/navbar/Navbar'
import Footer from '../layouts/footer/Footer'
import TvAndAudio from '../components/shop/TvAndAudio'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'


function TvAndAudioo() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <TvAndAudio />
            <Footer />
        </>
    )
}

export default TvAndAudioo