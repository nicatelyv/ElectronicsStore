import React from 'react'
import style from "./style.module.scss"
import { IoCloseOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromWishlist } from '../../redux/wishlistRedux';
import { enhancedMoveProductToCart } from '../../redux/store';

function Wishlist() {
    const { t } = useTranslation()
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist);

    const handleAddToCart = (product) => {
        dispatch(enhancedMoveProductToCart(product));
    };

    const handleRemoveFromWishlist = (productId) => {
        dispatch(removeProductFromWishlist({ _id: productId }));
    };

    const navigate = useNavigate()
    return (
        <div className={style.wishlist}>
            {wishlist.products.length !== 0 ? <h2>{t("Wishlist")}</h2> : <></>}
            {wishlist.products.length !== 0 ?
                <div className={style.wisContainer}>
                    {wishlist.products.map((product, i) => (
                        <div className={style.product} key={i}>
                            <div className={style.left}>
                                <IoCloseOutline onClick={() => handleRemoveFromWishlist(product._id)} />
                                <img style={{ cursor: "pointer" }} onClick={() => navigate('/shop/' + product._id + "/details")} src={product.img1} alt="" />
                                <div className={style.text}>
                                    <h3 style={{ cursor: "pointer" }} onClick={() => navigate('/shop/' + product._id + "/details")}>{product.productname}</h3>
                                    <h3>{t("Color :")} <p>{product.color}</p></h3>
                                    <h3>{t("Quantity :")} <p>{product.quantity}</p></h3>
                                    <h3>${product.price}</h3>
                                </div>
                            </div>
                            <div className={style.right}>
                                <h3>${product.price}</h3>
                                <button onClick={() => handleAddToCart(product)}>{t("Add to cart")}</button>
                            </div>
                        </div>
                    ))}
                </div> :
                <div className={style.emptyWishlist}>
                    <div className={style.emptyImg}><img src="/img/Wishlist/emptyWishlist.png" alt="" /></div>
                    <h2>{t("Your wishlist is empty.")}</h2>
                    <p>{t("You don’t have any products in the wishlist yet. You will find a lot of interesting products on our Shop page.")}</p>
                    <Link to={"/shop"}>{t("Continue Shopping")}</Link>
                </div>}
        </div>
    )
}

export default Wishlist