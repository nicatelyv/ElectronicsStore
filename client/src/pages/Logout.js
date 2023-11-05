import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Index() {

    let navigate = useNavigate()

    function logout() {
        localStorage.clear()
        navigate("/")
    }
    useEffect(() => {
        logout()
    })

    return (
        <div></div>
    )
}