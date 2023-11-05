import React from 'react'
import { Link } from "react-router-dom"
import "./reklam.scss"
export default function Reklam() {
    return (
        <div className='reklamDiv'>
            <Link target='/' to={"https://www.kapitalbank.az/"}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Kapital_Bank_logo.svg/2560px-Kapital_Bank_logo.svg.png" alt="" /></Link>
        </div>
    )
}
