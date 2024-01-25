import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';
import Backdrop from '@mui/material/Backdrop';
import './style.scss'

function DetailsProduct() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };


    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [detailImg, setDetailImg] = useState(product.img1)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handleQuantity = (type) => {
        if (type === 'dec') {
            quantity > 1 && setQuantity(quantity - 1)
            quantity < 2 && window.alert(t("Minimum 1 product"))
        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, }))
    }


    const getData = async () => {
        const response = await axios.get(`https://electronics-store-api.vercel.app/api/products/find/${id}`);
        setProduct(response.data);
        setDetailImg(response.data.img1)
    };
    useEffect(() => {
        getData();
    }, [id])

    return (
        <section className='detailPage'>
            <div className='detailpageMain'>

                {detailImg ?
                    <div className='detailImgs'>
                        <div id='imgmsItem'>
                            {product.img1 ? <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img1} alt='foto' /> : <></>}
                            {product.img2 ? <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img2} alt='foto' /> : <></>}
                            {product.img3 ? <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img3} alt='foto' /> : <></>}
                            {product.img4 ? <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img4} alt='foto' /> : <></>}
                            {product.img5 ? <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img5} alt='foto' /> : <></>}
                            {product.img6 ? <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img6} alt='foto' /> : <></>}
                            {product.img7 ? <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img7} alt='foto' /> : <></>}
                            {product.img8 ? <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img8} alt='foto' /> : <></>}
                            {product.img9 ? <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img9} alt='foto' /> : <></>}
                        </div>
                        {detailImg ?
                            <>
                                <img className='detailMainImg' onClick={handleOpen} src={detailImg} alt='foto' />
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open}
                                    onClick={handleClose}

                                >
                                    {/* <div className={Style.diplomaDivOpen} onClick={handleOpen}></div> */}
                                    <img className='detailMainImgOpen' onClick={handleOpen} src={detailImg} alt='foto' />
                                </Backdrop>
                            </>
                            : <></>
                        }
                    </div>
                    : <img src='https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=82a1493bb08m8f32c9282ywxu9mv1rh3ldfmt6psbs52uxtn&rid=200w.gif&ct=g' alt='Loading' />
                }

                <div className='detailsItemTexts'>
                    {product.productname ? <h1 id='detailsH2'>{product.productname}</h1> : <h2>{t("Loading")} ...</h2>}
                    <div className='price'>
                        {product.salePrice ? <h5 id='salePrice'>{product.salePrice} AZN</h5> : <></>}
                        <h5 id='detailsH5'>{product.price} AZN</h5>
                    </div>
                    <p id='detailsP'>{product.desc}</p>
                    <div id='addbasketDiv' style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <button onClick={() => handleQuantity("dec")} style={{ width: "30px", height: "30px", borderRadius: "100%", cursor: "pointer", background: "none", border: "1px solid gray" }}>-</button>
                        <p style={{ margin: "0", fontSize: "18px" }}>{quantity}</p>
                        <button onClick={() => handleQuantity("inc")} style={{ width: "30px", height: "30px", borderRadius: "100%", cursor: "pointer", background: "none", border: "1px solid gray" }}>+</button>

                        {/* {localStorage.getItem('username') ? */}
                        <button style={{ cursor: "pointer" }} onClick={handleClick} id='addtobasket'>{t("Add to basket")}</button>
                        {/* : <Link to={'/giris'}><button style={{ cursor: "pointer" }} id='addtobasket'>{t("Add to basket")}</button></Link>} */}
                    </div>
                    {/* {localStorage.getItem('username') ? */}
                    <i id='addtowishlist' className="fa-regular fa-heart"></i>
                    {/* : <Link to={'/giris'}><i id='addtowishlist' className="fa-regular fa-heart"></i></Link>} */}

                    {product.color ? <h3 id='detailsH3'>{t("Color")}: {product.color}</h3> : <></>}
                    {product.storage ? <h4 id='detailsH4'>{t("Storage")}: {product.storage}</h4> : <></>}
                    {product.ram ? <h4 id='detailsH4'>{t("RAM")}: {product.ram}</h4> : <></>}
                    {product.category ? <h3 id='detailsH3'>{t("Category")}: <Link to={'/shop/category=' + product.category}>{t(product.category)}</Link></h3> : <></>}
                </div>

            </div>
        </section >
    )
}

export default DetailsProduct