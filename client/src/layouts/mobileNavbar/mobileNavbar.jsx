import React from 'react'
import "./mobileNavbar.scss"
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import ShoppingMenuMobile from "../../components/shoppingMenu/ShoppingMenuMobile"
import ProfileButton from "../../components/profileButton/ProfileButton"
import { useSelector } from 'react-redux'
import Badge from '@mui/material/Badge';


export default function MobileNavbar() {
    const { t } = useTranslation()
    const quantity = useSelector(state => state.cart.quantity)

    return (
        <div className='mobileNavbar'>
            <div className="mobilNavContainer">
                <div className="mobileNavRight">
                    <div id='topnavCart'>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingMenuMobile />
                        </Badge>
                    </div>
                    <Link to={'/wishlist'}><i className="fa-solid fa-heart"></i></Link>

                    {/* {localStorage.getItem("username") ? <NavLink to={"/logout"}><h4>{t("Çıxış")}</h4></NavLink> : <></>} */}

                    <input type="text" placeholder={t("Axtarış")} />
                    {localStorage.getItem("username") ?
                        <ProfileButton />
                        : <NavLink to={"/giris"}><i className="fa-solid fa-user fa-fade"></i></NavLink>
                    }
                </div>
            </div>
        </div>
    )
}
