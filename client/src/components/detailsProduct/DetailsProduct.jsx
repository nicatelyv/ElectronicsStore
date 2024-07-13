import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addProduct } from '../../redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';
import Backdrop from '@mui/material/Backdrop';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss'
import { toggleProductInWishlist } from '../../redux/wishlistRedux';

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
            quantity < 2 && notify()
        } else {
            setQuantity(quantity + 1)
        }
    }
    const notify = () => toast.warning(t("Minimum 1 product"));

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, }))
    }

    const wishlist = useSelector(state => state.wishlist.products);
    const isProductInWishlist = wishlist.some(wishlistProduct => wishlistProduct._id === product._id);

    const handleToggleWishlist = () => {
        dispatch(toggleProductInWishlist(product));
    };


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
                            {product.img4 ? <i className="fa-solid fa-arrows-left-right"></i> : <></>}
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
                                    <img className='detailMainImgOpen' onClick={handleOpen} src={detailImg} alt='foto' />
                                </Backdrop>
                            </>
                            : <></>
                        }
                    </div>
                    : <img src='https://i.gifer.com/ZKZg.gif' alt='Loading' />
                }

                <div className='detailsItemTexts'>
                    {product.productname ? <h1 id='detailsH2'>{product.productname}</h1> : <h2>{t("Loading")} ...</h2>}
                    <div className='price'>
                        {product.salePrice ? <h5 id='salePrice'>{product.salePrice} AZN</h5> : <></>}
                        <h5 id='detailsH5'>{product.price} AZN</h5>
                    </div>
                    <p id='detailsP'>{product.desc}</p>
                    <div id='addbasketDiv' style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <i onClick={() => handleQuantity("dec")} class="fa-solid fa-circle-minus" style={{ color: '#74C0FC', fontSize: "30px", cursor: "pointer" }}></i>
                        <p style={{ margin: "0", fontSize: "18px" }}>{quantity}</p>
                        <i onClick={() => handleQuantity("inc")} class="fa-solid fa-circle-plus" style={{ color: '#74C0FC', fontSize: "30px", cursor: "pointer" }}></i>

                        {/* {localStorage.getItem('username') ? */}
                        <Button variant='success' style={{ cursor: "pointer", borderRadius: "10px" }} onClick={handleClick} >{t("Add to basket")}</Button>
                        {/* : <Link to={'/giris'}><button style={{ cursor: "pointer" }} id='addtobasket'>{t("Add to basket")}</button></Link>} */}
                    </div>


                    {/* {isProductInWishlist
                        ? <i onClick={handleToggleWishlist} id='addtowishlist' class="fa-solid fa-heart" style={{ color: "red" }}></i>
                        : <i onClick={handleToggleWishlist} id='addtowishlist' class="fa-regular fa-heart"></i>
                    } */}

                    {
                        localStorage.getItem("username") ? isProductInWishlist
                            ? <i onClick={handleToggleWishlist} id='addtowishlist' class="fa-solid fa-heart" style={{ color: "red" }}></i>
                            : <i onClick={handleToggleWishlist} id='addtowishlist' class="fa-regular fa-heart"></i>
                            : <Link to={'/giris'}><i id='addtowishlist' class="fa-regular fa-heart"></i></Link>
                    }

                    {product.brand ? <h4 id='detailsH4'>{t("Brand")}: {product.brand}</h4> : <></>}
                    {product.color ? <h3 id='detailsH3'>{t("Color")}: {t(product.color)}</h3> : <></>}


                    {/* Telephone */}
                    {product.storage ? <h4 id='detailsH4'>{t("Storage")}: {product.storage}</h4> : <></>}
                    {product.ram ? <h4 id='detailsH4'>{t("RAM")}: {product.ram}</h4> : <></>}


                    {/* Dishwashers */}
                    {product.waterConsumption ? <h4 id='detailsH4'>{t("Water consumption (lt)")}: {t(product.waterConsumption)}</h4> : <></>}
                    {product.dimensions ? <h4 id='detailsH4'>{t("Dimensions")}: {t(product.dimensions)}</h4> : <></>}
                    {product.soundLevel ? <h4 id='detailsH4'>{t("Sound level")}: {t(product.soundLevel)}</h4> : <></>}
                    {product.dishwasherCapacity ? <h4 id='detailsH4'>{t("Dishwasher capacity")}: {t(product.dishwasherCapacity)}</h4> : <></>}
                    {product.management ? <h4 id='detailsH4'>{t("Management")}: {t(product.management)}</h4> : <></>}


                    {/* Refrigator */}
                    {product.typeOfCooling ? <h4 id='detailsH4'>{t("Type of cooling")}: {product.typeOfCooling}</h4> : <></>}
                    {product.classOfEnergyConsumption ? <h4 id='detailsH4'>{t("Class of energy consumption")}: {product.classOfEnergyConsumption}</h4> : <></>}


                    {/* Washing machine */}
                    {product.washingMachineCapacity ? <h4 id='detailsH4'>{t("Washing machine capacity")}: {t(product.washingMachineCapacity)}</h4> : <></>}
                    {product.washingMachineSpinSpeed ? <h4 id='detailsH4'>{t("Washing machine spin speed")}: {t(product.washingMachineSpinSpeed)}</h4> : <></>}
                    {product.energyClassWashingMachine ? <h4 id='detailsH4'>{t("Energy class")}: {t(product.energyClassWashingMachine)}</h4> : <></>}
                    {product.weightWashingMachine ? <h4 id='detailsH4'>{t("Washing machine weight")}: {t(product.weightWashingMachine)}</h4> : <></>}
                    {product.programCountWashingMachine ? <h4 id='detailsH4'>{t("Program count")}: {t(product.programCountWashingMachine)}</h4> : <></>}
                    {product.displayWashingMachine ? <h4 id='detailsH4'>{t("Display")}: {t(product.displayWashingMachine)}</h4> : <></>}


                    {/* Air Conditioning */}
                    {product.recommendedRoomArea ? <h4 id='detailsH4'>{t("Recommended room area")}: {t(product.recommendedRoomArea)}</h4> : <></>}
                    {product.heatingPower ? <h4 id='detailsH4'>{t("Thermal power")}: {t(product.heatingPower)}</h4> : <></>}
                    {product.coolingPower ? <h4 id='detailsH4'>{t("Cooling power")}: {t(product.coolingPower)}</h4> : <></>}
                    {product.compressorType ? <h4 id='detailsH4'>{t("Compressor type")}: {t(product.compressorType)}</h4> : <></>}
                    {product.basicModes ? <h4 id='detailsH4'>{t("Basic modes")}: {t(product.basicModes)}</h4> : <></>}


                    {product.productWeight ? <h4 id='detailsH4'>{t("Weight")}: {t(product.productWeight)}</h4> : <></>}
                    {product.producingCountry ? <h4 id='detailsH4'>{t("Producing country")}: {t(product.producingCountry)}</h4> : <></>}
                    {product.warrantyPeriod ? <h4 id='detailsH4'>{t("Warranty period")}: {t(product.warrantyPeriod)}</h4> : <></>}
                    {product.category ? <h3 id='detailsH3'>{t("Category")}: <Link to={'/shop/category=' + product.categories[0]}>{t(product.categories[0])}</Link></h3> : <></>}
                    {/* {product.categories == 'large-appliances' ? <h3 id='detailsH3'>{t("Category")}: <Link to={'/shop/category=' + product.categories}>{t(product.categories)}, {product.category}</Link></h3> : <></>} */}
                </div>

            </div>
            <ToastContainer />
        </section >
    )
}

export default DetailsProduct