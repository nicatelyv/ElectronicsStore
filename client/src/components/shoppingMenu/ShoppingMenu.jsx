import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import "./style.scss"
import { useDispatch, useSelector } from 'react-redux'
import { clearBasket } from '../../redux/cartRedux'
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';

export default function TemporaryDrawer() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const { t } = useTranslation();

    function handleClick() {
        dispatch(clearBasket())
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
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className={'cartMenu'}
        >
            <div className='cartItems'>
                {cart.products.map((product, index) => (
                    <div className="cartItem" key={index}>
                        <div className='cartLeft'>
                            <img src={product.img1} alt='foto' />
                            <div className='cartItemTexts'>
                                <h5 id='cartItemH5'>{product.productname}</h5>
                                {/* <p id='cartItemP'>AZN {product.price}</p> */}
                                {product.color ? <p id='cartItemP'>{t("Color")}: {product.color}</p> : <></>}
                                {product.storage ? <p id='cartItemP'>{t("Storage")}: {product.storage}</p> : <></>}
                            </div>
                        </div>
                        <div id='cartItemCount'>
                            <h4 id='cartItemH4'>{product.quantity}x</h4>
                            <h3 id='cartItemH3'>{(product.price * product.quantity).toFixed(2)} AZN</h3>
                        </div>
                    </div>
                ))}
                <h2 id='cartTotalPrice'>{t('Total price:')} {(cart.total).toFixed(2)} AZN</h2>
                <Button onClick={handleClick} className='cartBtn'>{t("Confirm")}</Button>
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