import React from 'react'
import style from "./style.module.scss"
import { Link } from 'react-router-dom'


function ConfirmOrder() {
    return (
        <div className={style.confirmOrder}>
            <Link to={'/shop'}>
                <img src="/img/confirm-order.png" alt="" />
            </Link>
        </div>
    )
}

export default ConfirmOrder