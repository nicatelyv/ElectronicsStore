import React from 'react'
import Navbar from "../layouts/navbar/Navbar"
import Footer from "../layouts/footer/Footer"
import SlideShow from '../components/slide/Slide'

function Home() {
    return (
        <>
            <Navbar />
            <SlideShow />
            <Footer />
        </>
    )
}

export default Home