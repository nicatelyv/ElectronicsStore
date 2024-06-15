import React, { useState } from 'react'
import style from "./style.module.scss"
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { RxHamburgerMenu } from "react-icons/rx";

function AccountNavigation() {
    const { t } = useTranslation()
    const location = useLocation()
    const [menu, setMenu] = useState(false);

    return (
        <div className={style.accountNav}>
            <div className={style.url}>
                <Link to={"/"}>{t("Home")} <img src="/img/arrow.png" alt="" /></Link>
                <Link to={"/my-account"}>{t("My Account")} <img src="/img/arrow.png" alt="" /></Link>
                {location.pathname === "/my-account/my-orders" ? <p>{t("My Orders")}</p> : <></>}
                {location.pathname === "/my-account/wishlist" ? <p>{t("Wishlist")}</p> : <></>}
                {location.pathname === "/my-account/settings" ? <p>{t("Settings")}</p> : <></>}
                {location.pathname === "/my-account/sign-out" ? <p>{t("Logout")}</p> : <></>}
            </div>

            {/* Tablet */}
            <RxHamburgerMenu className={style.menuIcon} onClick={() => setMenu(!menu)} />
            <div
                className={`${style.menuInActive} ${menu ? style.menuActive : ""}`}
            >
                <RxHamburgerMenu className={style.menuIcon} onClick={() => setMenu(!menu)} />
                <div className={style.navContainer}>

                    <h2><div></div> {t("Hello")} {localStorage.getItem("firstName")}</h2>
                    <p>{t("Welcome to your Account")}</p>
                    <ul className={style.accountNavLinks}>
                        <NavLink
                            className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}
                            to={"/my-account/my-orders"} onClick={() => setMenu(!menu)}>
                            <img src="/img/AccountNav/orders.png" alt="" /> {t("My Orders")}</NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}
                            to={"/my-account/wishlist"} onClick={() => setMenu(!menu)}>
                            <img src="/img/AccountNav/heart.png" alt="" /> {t("Wishlist")}</NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}
                            to={"/my-account/settings"} onClick={() => setMenu(!menu)}>
                            <img src="/img/AccountNav/user.png" alt="" /> {t("My info")}</NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}
                            to={"/my-account/sign-out"} onClick={() => setMenu(!menu)}>
                            <img src="/img/AccountNav/logout.png" alt="" /> {t("Logout")}</NavLink>
                    </ul>
                </div>
            </div>

            {/* PC */}
            <div className={style.navContainer}>
                <h2><div></div> {t("Hello")} {localStorage.getItem("firstName")}</h2>
                <p>{t("Welcome to your Account")}</p>
                <ul className={style.accountNavLinks}>
                    <NavLink
                        className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}
                        to={"/my-account/my-orders"}>
                        <img src="/img/AccountNav/orders.png" alt="" /> {t("My Orders")}</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}
                        to={"/my-account/wishlist"}><img src="/img/AccountNav/heart.png" alt="" /> {t("Wishlist")}</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}
                        to={"/my-account/settings"}><img src="/img/AccountNav/user.png" alt="" /> {t("My info")}</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}
                        to={"/my-account/sign-out"}><img src="/img/AccountNav/logout.png" alt="" /> {t("Logout")}</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default AccountNavigation