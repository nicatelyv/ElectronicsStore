import React from 'react'
import "./mobileNavbar.scss"
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export default function MobileNavbar() {
    const { t } = useTranslation()
    return (
        <div className='mobileNavbar'>
            <div className="mobilNavContainer">
                {localStorage.getItem("username") ?
                    <NavLink to={"/hesabim"}><h3>{localStorage.getItem("firstName")}</h3></NavLink>
                    : <NavLink to={"/giris"}><i className="fa-solid fa-user fa-fade"></i></NavLink>
                }

                <input type="text" placeholder={t("Axtarış")} />

                <div className="mobileNavRight">
                    <div id='topnavCart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p id='cartCount'>0</p>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                    {localStorage.getItem("username") ? <NavLink to={"/logout"}><h4>{t("Çıxış")}</h4></NavLink> : <></>}
                </div>
            </div>
        </div>
    )
}
