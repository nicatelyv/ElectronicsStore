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
    const quantityWishlist = useSelector(state => state.wishlist.products.length)
    
    return (
        <div className='mobileNavbar'>
            <div className="mobilNavContainer">
                <div className="mobileNavRight">
                    <div id='topnavCart'>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingMenuMobile />
                        </Badge>
                    </div>
                    <Link to={'/shop'}><i className="fa-solid fa-shop fa-beat"></i></Link>

                    {/* {localStorage.getItem("username") ? <NavLink to={"/logout"}><h4>{t("Çıxış")}</h4></NavLink> : <></>} */}

                    <input type="text" placeholder={t("Axtarış")} />
                    <Badge badgeContent={quantityWishlist} color="primary">
                        <Link to={'/my-account/wishlist'}><i className="fa-solid fa-heart"></i></Link>
                    </Badge>
                    {localStorage.getItem("username") ?
                        <ProfileButton />
                        : <NavLink to={"/giris"}><i className="fa-solid fa-user fa-fade" style={{ color: "#74C0FC" }}></i></NavLink>
                    }
                </div>
            </div>
        </div>
    )
}
