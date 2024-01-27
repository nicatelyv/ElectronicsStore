import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useSound from 'use-sound';
import sound from "../assets/sounds/exit.mp3"

export default function Index() {
    const [playSound] = useSound(sound);
    let navigate = useNavigate()

    function logout() {
        playSound()
        localStorage.clear()
        setTimeout(() => {
            window.location.reload(false);
            navigate("/")
        }, 1000);
    }
    useEffect(() => {
        logout()
    })

    return (
        <div></div>
    )
}