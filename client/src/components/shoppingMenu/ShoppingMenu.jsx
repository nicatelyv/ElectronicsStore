import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import "./style.scss"
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity } from '../../redux/cartRedux';

export default function TemporaryDrawer() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const handleIncrease = (productId) => {
        dispatch(increaseQuantity({ _id: productId }));
    };

    const handleDecrease = (productId) => {
        dispatch(decreaseQuantity({ _id: productId }));
    };

    const { t } = useTranslation();

    const navigate = useNavigate()
    const handleNavigate = () => {
        if (window.location.pathname === '/shop') {
            window.location.reload();
        }
        else {
            navigate("/shop")
        }
    }

    function handleClick() {
        if (window.location.pathname === '/shop/checkout') {
            window.location.reload();
        }
        else {
            navigate('/shop/checkout')
        }
    }


    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className={'cartMenu'}
        >
            <div className='cartItems'>
                <i onClick={toggleDrawer(anchor, false)} style={{ cursor: "pointer", fontSize: "25px", alignSelf: "flex-end", position: "absolute" }} className="fa-solid fa-xmark"></i>
                {cart.products.map((product, index) => (
                    <div className="cartItem" key={index}>
                        <div className='cartLeft'>
                            <img src={product.img1} alt='foto' />
                            <div className='cartItemTexts'>
                                <Link to={'/shop/' + product._id + "/details"} onClick={toggleDrawer(anchor, false)}><h5 id='cartItemH5'>{product.productname}</h5></Link>
                                {/* <p id='cartItemP'>AZN {product.price}</p> */}
                                {product.color ? <p id='cartItemP'>{t("Color")}: {product.color}</p> : <></>}
                                {product.storage ? <p id='cartItemP'>{t("Storage")}: {product.storage}</p> : <></>}
                                {product.typeOfCooling ? <p id='cartItemP'>{t("Type of cooling")}: {product.typeOfCooling}</p> : <></>}
                                {product.classOfEnergyConsumption ? <p id='cartItemP'>{t("Class of energy consumption")}: {product.classOfEnergyConsumption}</p> : <></>}
                                {product.washingMachineCapacity ? <p id='cartItemP'>{t("Washing machine capacity")}: {t(product.washingMachineCapacity)}</p> : <></>}
                                {product.energyClassWashingMachine ? <p id='cartItemP'>{t("Energy class")}: {product.energyClassWashingMachine}</p> : <></>}
                                {product.recommendedRoomArea ? <p id='cartItemP'>{t("Recommended room area")}: {product.recommendedRoomArea}</p> : <></>}
                                {product.compressorType ? <p id='cartItemP'>{t("Compressor type")}: {product.compressorType}</p> : <></>}
                            </div>
                        </div>
                        <div id='cartItemCount'>
                            <h4 id='cartItemH4'>
                                <button onClick={() => handleDecrease(product._id)}>-</button>
                                {product.quantity}x
                                <button onClick={() => handleIncrease(product._id)}>+</button>
                            </h4>
                            {/* <h3 id='cartItemH3'>{(product.price * product.quantity).toFixed(2)} AZN</h3> */}
                            <h3 id='cartItemH3'>{(product.price).toFixed(2)} AZN</h3>
                        </div>
                    </div>
                ))}
                {cart.total === 0 &&
                    <>
                        <h4>{t("Səbətinizdə məhsul yoxdur")}</h4>
                        <Button onClick={handleNavigate} className='cartBtnMobile'>{t("Alış-verişə davam edin")}</Button>
                    </>
                }
                {cart.total !== 0 &&
                    <div className="total">
                        <h2 id='cartTotalPrice'>{t('Total price')}: {(cart.total).toFixed(2)} AZN</h2>
                        <Button onClick={handleClick} className='cartBtn'>{t("Confirm")}</Button>
                    </div>
                }
            </div>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <i onClick={toggleDrawer(anchor, true)} className="fa-solid fa-cart-shopping"></i>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}