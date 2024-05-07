import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import "./styleMobile.scss"
import { useDispatch, useSelector } from 'react-redux'
import { clearBasket } from '../../redux/cartRedux'
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import sound from "../../assets/sounds/success-1-6297.mp3"

export default function TemporaryDrawer() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
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

    const [playSound] = useSound(sound);
    function handleClick() {
        playSound()
        dispatch(clearBasket())
    }

    const [state, setState] = React.useState({
        top: false,
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
            className={'cartMenuMobile'}
        >
            <div className='cartItemsMobile'>
                <i onClick={toggleDrawer(anchor, false)} style={{ cursor: "pointer", fontSize: "25px", alignSelf: "flex-end", position: "absolute" }} className="fa-solid fa-xmark"></i>
                {cart.products.map((product, index) => (
                    <div className="cartItemMobile" key={index}>
                        <div className='cartLeftMobile'>
                            <img src={product.img1} alt='foto' />
                            <div className='cartItemTextsMobile'>
                                <Link to={'/shop/' + product._id + "/details"} onClick={toggleDrawer(anchor, false)}><h5 id='cartItemH5Mobile'>{product.productname}</h5></Link>
                                {/* <p id='cartItemPMobile'>AZN {product.price}</p> */}
                                {product.color ? <p id='cartItemPMobile'>{t("Color")}: {product.color}</p> : <></>}
                                {product.storage ? <p id='cartItemPMobile'>{t("Storage")}: {product.storage}</p> : <></>}
                                {product.typeOfCooling ? <p id='cartItemP'>{t("Type of cooling")}: {product.typeOfCooling}</p> : <></>}
                                {product.classOfEnergyConsumption ? <p id='cartItemP'>{t("Class of energy consumption")}: {product.classOfEnergyConsumption}</p> : <></>}
                                {product.washingMachineCapacity ? <p id='cartItemP'>{t("Washing machine capacity")}: {t(product.washingMachineCapacity)}</p> : <></>}
                                {product.energyClassWashingMachine ? <p id='cartItemP'>{t("Energy class")}: {product.energyClassWashingMachine}</p> : <></>}
                                {product.recommendedRoomArea ? <p id='cartItemP'>{t("Recommended room area")}: {product.recommendedRoomArea}</p> : <></>}
                                {product.compressorType ? <p id='cartItemP'>{t("Compressor type")}: {product.compressorType}</p> : <></>}
                            </div>
                        </div>
                        <div id='cartItemCountMobile'>
                            <h4 id='cartItemH4Mobile'>{product.quantity}x</h4>
                            <h3 id='cartItemH3Mobile'>{(product.price * product.quantity).toFixed(2)} AZN</h3>
                        </div>
                    </div>
                ))}
                {cart.total === 0 &&
                    <>
                        <h5>{t("Səbətinizdə məhsul yoxdur")}</h5>
                        <Button onClick={handleNavigate} className='cartBtnMobile'>{t("Alış-verişə davam edin")}</Button>
                    </>
                }
                {cart.total !== 0 &&
                    <>
                        <h2 id='cartTotalPriceMobile'>{t('Total price:')} {(cart.total).toFixed(2)} AZN</h2>
                        <Button onClick={handleClick} className='cartBtnMobile'>{t("Confirm")}</Button>
                    </>
                }
            </div>
        </Box>
    );

    return (
        <div>
            {['top'].map((anchor) => (
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