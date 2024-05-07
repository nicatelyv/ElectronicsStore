import "./style.scss"
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Link } from 'react-router-dom'

function ShopPhoneComponents() {
    const { t } = useTranslation();
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;


    const getData = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=phone");
        setProduct(response.data);
        setIsLoading(false)
    };



    // Filter Phone
    const ApplePhone = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=appleIphone");
        setProduct(response.data);
        setIsLoading(false)
    }
    const SamsungPhone = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=samsungPhone");
        setProduct(response.data);
        setIsLoading(false)
    }
    const XiaomiPhone = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=xiaomiPhone");
        setProduct(response.data);
        setIsLoading(false)
    }
    const HonorPhone = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=honorPhone");
        setProduct(response.data);
        setIsLoading(false)
    }
    const HuaweiPhone = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=huaweiPhone");
        setProduct(response.data);
        setIsLoading(false)
    }
    const OppoPhone = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=oppoPhone");
        setProduct(response.data);
        setIsLoading(false)
    }
    const RealmePhone = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=realmePhone");
        setProduct(response.data);
        setIsLoading(false)
    }
    const OnePlusPhone = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=oneplusPhone");
        setProduct(response.data);
        setIsLoading(false)
    }
    const BlackviewPhone = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=blackviewPhone");
        setProduct(response.data);
        setIsLoading(false)
    }




    useEffect(() => {
        getData();
    }, [])
    const reversedItems = [...product].reverse();

    const totalPages = Math.ceil(reversedItems.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = reversedItems.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className="shop" >
            <div className="shopLeftBar" >
                <Accordion className="filterPC" defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t('Kataloq')} <i class="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item><Link onClick={() => window.location.reload(false)} to={'/shop/category=phone'}>{t("Telefon və aksesuarlar")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=large-appliances'}>{t("Böyük məişət texnikası")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=small-appliances'}>{t("Kiçik məişət texnikası")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=tv-and-audio'}>{t("Tv və audio")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=photo-technique'}>{t("Foto texnika")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=notebook-and-computer-equipment'}>{t("Notbuk və kompüter texnikası")}</Link></ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Mobil telefonlar")} <i class="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item onClick={() => ApplePhone()}>Apple</ListGroup.Item>
                                <ListGroup.Item onClick={() => SamsungPhone()}>Samsung</ListGroup.Item>
                                <ListGroup.Item onClick={() => XiaomiPhone()}>Xiaomi</ListGroup.Item>
                                <ListGroup.Item onClick={() => HonorPhone()}>Honor</ListGroup.Item>
                                <ListGroup.Item onClick={() => HuaweiPhone()}>HUAWEI</ListGroup.Item>
                                <ListGroup.Item onClick={() => OppoPhone()}>OPPO</ListGroup.Item>
                                <ListGroup.Item onClick={() => RealmePhone()}>Realme</ListGroup.Item>
                                <ListGroup.Item onClick={() => OnePlusPhone()}>OnePlus</ListGroup.Item>
                                <ListGroup.Item onClick={() => BlackviewPhone()}>Blackview</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Telefon aksessuarları")} <i class="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item>{t("Qoruyucu şüşə")}</ListGroup.Item>
                                <ListGroup.Item>{t("Simsiz enerji toplama cihazı")}</ListGroup.Item>
                                <ListGroup.Item>{t("Qoruyucu örtük")}</ListGroup.Item>
                                <ListGroup.Item>{t("Enerji toplama üçün naqillər")}</ListGroup.Item>
                                <ListGroup.Item>Powerbank</ListGroup.Item>
                                <ListGroup.Item>{t("Telefon adapterləri")}</ListGroup.Item>
                                <ListGroup.Item>{t("MagSafe aksessuarları")}</ListGroup.Item>
                                <ListGroup.Item>{t("SD kartlar")}</ListGroup.Item>
                                <ListGroup.Item>{t("Micro kartlar")}</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Qulaqlıqlar")} <i class="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item>Apple</ListGroup.Item>
                                <ListGroup.Item>Samsung</ListGroup.Item>
                                <ListGroup.Item>Xiaomi</ListGroup.Item>
                                <ListGroup.Item>Honor</ListGroup.Item>
                                <ListGroup.Item>A4tech</ListGroup.Item>
                                <ListGroup.Item>Baseus</ListGroup.Item>
                                <ListGroup.Item>Borofone</ListGroup.Item>
                                <ListGroup.Item>Beats</ListGroup.Item>
                                <ListGroup.Item>JBL</ListGroup.Item>
                                <ListGroup.Item>QCY</ListGroup.Item>
                                <ListGroup.Item>Remax</ListGroup.Item>
                                <ListGroup.Item>TCL</ListGroup.Item>
                                <ListGroup.Item>Aiwa</ListGroup.Item>
                                <ListGroup.Item>Lenovo</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="filterMobile">
                    <Accordion defaultActiveKey={[]} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t('Kataloq')} <i class="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item><Link onClick={() => window.location.reload(false)} to={'/shop/category=phone'}>{t("Telefon və aksesuarlar")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=large-appliances'}>{t("Böyük məişət texnikası")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=small-appliances'}>{t("Kiçik məişət texnikası")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=tv-and-audio'}>{t("Tv və audio")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=photo-technique'}>{t("Foto texnika")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=notebook-and-computer-equipment'}>{t("Notbuk və kompüter texnikası")}</Link></ListGroup.Item>
                                </ListGroup>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Mobil telefonlar")} <i class="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item onClick={() => ApplePhone()}>Apple</ListGroup.Item>
                                            <ListGroup.Item onClick={() => SamsungPhone()}>Samsung</ListGroup.Item>
                                            <ListGroup.Item onClick={() => XiaomiPhone()}>Xiaomi</ListGroup.Item>
                                            <ListGroup.Item onClick={() => HonorPhone()}>Honor</ListGroup.Item>
                                            <ListGroup.Item onClick={() => HuaweiPhone()}>HUAWEI</ListGroup.Item>
                                            <ListGroup.Item onClick={() => OppoPhone()}>OPPO</ListGroup.Item>
                                            <ListGroup.Item onClick={() => RealmePhone()}>Realme</ListGroup.Item>
                                            <ListGroup.Item onClick={() => OnePlusPhone()}>OnePlus</ListGroup.Item>
                                            <ListGroup.Item onClick={() => BlackviewPhone()}>Blackview</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Telefon aksessuarları")} <i class="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item>{t("Qoruyucu şüşə")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Simsiz enerji toplama cihazı")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Qoruyucu örtük")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Enerji toplama üçün naqillər")}</ListGroup.Item>
                                            <ListGroup.Item>Powerbank</ListGroup.Item>
                                            <ListGroup.Item>{t("Telefon adapterləri")}</ListGroup.Item>
                                            <ListGroup.Item>{t("MagSafe aksessuarları")}</ListGroup.Item>
                                            <ListGroup.Item>{t("SD kartlar")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Micro kartlar")}</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Qulaqlıqlar")} <i class="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item>Apple</ListGroup.Item>
                                            <ListGroup.Item>Samsung</ListGroup.Item>
                                            <ListGroup.Item>Xiaomi</ListGroup.Item>
                                            <ListGroup.Item>Honor</ListGroup.Item>
                                            <ListGroup.Item>A4tech</ListGroup.Item>
                                            <ListGroup.Item>Baseus</ListGroup.Item>
                                            <ListGroup.Item>Borofone</ListGroup.Item>
                                            <ListGroup.Item>Beats</ListGroup.Item>
                                            <ListGroup.Item>JBL</ListGroup.Item>
                                            <ListGroup.Item>QCY</ListGroup.Item>
                                            <ListGroup.Item>Remax</ListGroup.Item>
                                            <ListGroup.Item>TCL</ListGroup.Item>
                                            <ListGroup.Item>Aiwa</ListGroup.Item>
                                            <ListGroup.Item>Lenovo</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>

            <div className="shopMain" style={{ flexDirection: "column" }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {isLoading && <img style={{ width: "150px", height: "150px", objectFit: "contain", margin: "100px auto" }} src="https://superstorefinder.net/support/wp-content/uploads/2018/01/orange_circles.gif" alt="" />}
                    {currentProducts ?
                        currentProducts.map((data, index) => {
                            return (
                                <Card key={index} style={{ width: '18rem' }}>
                                    <Card.Link href={'/shop/category=' + data.categories[0] + '/' + data._id + '/details'}><Card.Img style={{ width: "100%", height: "200px", objectFit: "contain", marginTop: "50px" }} variant="top" src={data.img1} /></Card.Link>
                                    <Card.Body>
                                        {data.category ? <p id='category'>{t(data.category)}</p> : <></>}
                                        {data.salePrice ? <p id='negdalis'>{t('Nağd alışda')} {data.salePrice - data.price} {t('manat endirim')}</p> : <></>}
                                        <Card.Link className="cardTitle" href={'/shop/category=' + data.categories[0] + '/' + data._id + '/details'}><Card.Title>{data.productname}</Card.Title></Card.Link>
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text> */}
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        {data.salePrice ?
                                            <ListGroup.Item style={{ display: "flex", gap: "10px" }}>
                                                <p className="salePrice" style={{ textDecoration: "line-through" }}>AZN {data.salePrice}</p>
                                                <p>AZN {data.price}</p>
                                            </ListGroup.Item>
                                            : <ListGroup.Item>AZN {data.price}</ListGroup.Item>
                                        }
                                        {data.storage ? <ListGroup.Item><p>{t("Storage")}: {data.storage}</p></ListGroup.Item> : <></>}
                                        {data.ram ? <ListGroup.Item><p>RAM: {data.ram}</p></ListGroup.Item> : <></>}
                                    </ListGroup>
                                    <Card.Body style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                        <Card.Link href={'/shop/category=' + data.categories[0] + '/' + data._id + '/details'}>{t("More details")}</Card.Link>
                                        {/* <Button variant='success' style={{ cursor: "pointer", borderRadius: "10px" }} onClick={handleClick} >{t("Add to basket")}</Button> */}
                                    </Card.Body>
                                </Card>
                            )
                        })
                        : <img style={{ width: "500px", height: "500px", objectFit: "contain" }} src="https://giphy.com/stickers/loading-load-buffering-iA8jNKVWY0Xldn7JIf" alt="" />
                    }
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <ul className="pagination" style={{ display: "flex", listStyle: "none", padding: "0" }}>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                            <li key={pageNumber} style={{ margin: "0 5px" }} className={pageNumber === currentPage ? 'active' : ''}>
                                <Link to="#" style={{ textDecoration: "none", color: "#000", padding: "5px 10px", border: "1px solid #ccc", borderRadius: "5px" }} onClick={() => paginate(pageNumber)}>{pageNumber}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}
export default ShopPhoneComponents