import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./style.scss"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const NewProducts = () => {
    const { t } = useTranslation();
    const [product, setProduct] = useState(false, [])

    const getData = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products");
        setProduct(response.data);
    };

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <div className='newProducts'>
                <h3 id='newH3'>{t("New products")}</h3>
                <Slide
                    autoplay={true}
                    onChange={function noRefCheck() { }}
                    onStartChange={function noRefCheck() { }}
                >
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 4).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 8, product.length - 4).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 12, product.length - 8).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                </Slide >
                <Link className='moreLink' to={'/shop'}><button className='moreBtn'>{t("See more")}</button></Link>
            </div >


            {/* Tablet */}
            <div className='newProductsTablet'>
                <h3 id='newH3'>{t("New products")}</h3>
                <Slide
                    autoplay={true}
                    onChange={function noRefCheck() { }}
                    onStartChange={function noRefCheck() { }}
                >
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 3).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 6, product.length - 3).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 9, product.length - 6).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                </Slide>
                <Link className='moreLink' to={'/shop'}><button className='moreBtn'>{t("See more")}</button></Link>
            </div>


            {/* Tablet2 */}
            <div className='newProductsTablet2'>
                <h3 id='newH3'>{t("New products")}</h3>
                <Slide
                    autoplay={true}
                    onChange={function noRefCheck() { }}
                    onStartChange={function noRefCheck() { }}
                >
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 2).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 4, product.length - 2).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 6, product.length - 4).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 8, product.length - 6).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 10, product.length - 8).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                </Slide>
                <Link className='moreLink' to={'/shop'}><button className='moreBtn'>{t("See more")}</button></Link>
            </div>


            {/* Mobile */}
            <div className='newProductsMobile'>
                <h3 id='newH3'>{t("New products")}</h3>
                <Slide
                    autoplay={true}
                    onChange={function noRefCheck() { }}
                    onStartChange={function noRefCheck() { }}
                >
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 1).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 2, product.length - 1).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 3, product.length - 2).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 4, product.length - 3).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 5, product.length - 4).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 6, product.length - 5).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 7, product.length - 6).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 8, product.length - 7).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 9, product.length - 8).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 10, product.length - 9).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                    <div className="slideProductDiv">
                        {product ?
                            product.slice(product.length - 11, product.length - 10).map((data, index) => {
                                return (
                                    <div key={index} className='homeProduct'>
                                        <img src={data.img1} alt="" />
                                        <h3 className='cardH3'>{data.productname}</h3>
                                        {data.salePrice ? <h4 className='salePrice'>{data.salePrice} AZN</h4> : <></>}
                                        <h4 className='cardH4'>{data.price} AZN</h4>
                                        <Link to={'/shop/' + data._id + "/details"}><button className='cardMoreBtn'>{t("More details")}</button></Link>
                                    </div>
                                )
                            })
                            : <h2 style={{ textAlign: "center" }}>{t("Loading")} ...</h2>
                        }
                    </div>
                </Slide>
                <Link className='moreLink' to={'/shop'}><button className='moreBtn'>{t("See more")}</button></Link>
            </div>
        </>
    );
};

export default NewProducts;