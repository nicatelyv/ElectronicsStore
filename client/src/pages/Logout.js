import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useSound from 'use-sound';
import sound from "../assets/sounds/exit.mp3"

export default function Index() {
    const [playSound] = useSound(sound);
    let navigate = useNavigate()
    const keysToRemove = ['username', 'firstName', 'lastName', 'email', 'token', 'isAdmin']

    function logout() {
        playSound()
        keysToRemove.forEach(function (key) {
            localStorage.removeItem(key);
        });
        setTimeout(() => {
            window.location.reload();
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