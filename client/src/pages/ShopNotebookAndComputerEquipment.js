import React from 'react'
import Navbar from '../layouts/navbar/Navbar'
import Footer from '../layouts/footer/Footer'
import NotebookAndComputerEquipment from '../components/shop/NotebookAndComputerEquipment'
import MobileNavbar from '../layouts/mobileNavbar/mobileNavbar'


function ShopNotebookAndComputerEquipment() {
    return (
        <>
            <MobileNavbar />
            <Navbar />
            <NotebookAndComputerEquipment />
            <Footer />
        </>
    )
}

export default ShopNotebookAndComputerEquipment