import React from 'react'
import Navbar from '../layouts/navbar/Navbar'
import Footer from '../layouts/footer/Footer'
import PhotoTechniqueComponents from '../components/shop/PhotoTechniqueComponents'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'


function PhotoTechnique() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <PhotoTechniqueComponents />
            <Footer />
        </>
    )
}

export default PhotoTechnique