import React, { useState } from 'react'
import "./upb.scss"


function UpButton() {
    const [upBtn, setUpBtn] = useState()
    const scrollBtn = () => {
        if (window.scrollY >= 500) {
            setUpBtn(true)
        } else {
            setUpBtn(false)
        }
    }
    window.addEventListener('scroll', scrollBtn)

    return (
        <button className={upBtn ? 'upBtn upBtnTrue' : 'upBtn'}><a href="/#slide-show"><i class="fa-regular fa-circle-up fa-bounce"></i></a></button>
    )
}

export default UpButton