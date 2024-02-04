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

    const getData = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=phone");
        setProduct(response.data);
    };



    // Filter Phone
    const ApplePhone = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=appleIphone");
        setProduct(response.data);
    }
    const SamsungPhone = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=samsungPhone");
        setProduct(response.data);
    }
    const XiaomiPhone = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=xiaomiPhone");
        setProduct(response.data);
    }
    const HonorPhone = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=honorPhone");
        setProduct(response.data);
    }
    const HuaweiPhone = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=huaweiPhone");
        setProduct(response.data);
    }
    const OppoPhone = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=oppoPhone");
        setProduct(response.data);
    }
    const RealmePhone = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=realmePhone");
        setProduct(response.data);
    }
    const OnePlusPhone = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=oneplusPhone");
        setProduct(response.data);
    }
    const BlackviewPhone = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=blackviewPhone");
        setProduct(response.data);
    }


    //Filter Tablet
    const AppleTablet = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=appleTablet");
        setProduct(response.data);
    }
    const SamsungTablet = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=samsungTablet");
        setProduct(response.data);
    }
    const XiaomiTablet = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=xiaomiTablet");
        setProduct(response.data);
    }
    const OppoTablet = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=oppoTablet");
        setProduct(response.data);
    }
    const BlackviewTablet = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=blackviewTablet");
        setProduct(response.data);
    }





    useEffect(() => {
        getData();
    }, [])
    const reversedItems = [...product].reverse();
    return (
        <div className="shop" >
            <div className="shopLeftBar" >
                <Accordion className="filterPC" defaultActiveKey={['0', '1']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{t('Kataloq')} <i class="fa-solid fa-chevron-down"></i></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item><Link to={'/shop/category=phone'}>{t("Telefon və aksesuarlar")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=large-appliances'}>{t("Böyük məişət texnikası")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=small-appliances'}>{t("Kiçik məişət texnikası")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=tv-and-audio'}>{t("Tv və audio")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=photo-technique'}>{t("Foto texnika")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=notebook-and-computer-equipment'}>{t("Notbuk və kompüter texnikası")}</Link></ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>{t("Mobil telefonlar")} <i class="fa-solid fa-chevron-down"></i></Accordion.Header>
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
                        <Accordion.Header>{t("Planşetlər")} <i class="fa-solid fa-chevron-down"></i></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item onClick={() => AppleTablet()}>Apple</ListGroup.Item>
                                <ListGroup.Item onClick={() => SamsungTablet()}>Samsung</ListGroup.Item>
                                <ListGroup.Item onClick={() => XiaomiTablet()}>Xiaomi</ListGroup.Item>
                                <ListGroup.Item onClick={() => OppoTablet()}>OPPO</ListGroup.Item>
                                <ListGroup.Item onClick={() => BlackviewTablet()}>Blackview</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>{t("Telefon aksessuarları")} <i class="fa-solid fa-chevron-down"></i></Accordion.Header>
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
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>{t("Qulaqlıqlar")} <i class="fa-solid fa-chevron-down"></i></Accordion.Header>
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
                            <Accordion.Header>{t('Kataloq')} <i class="fa-solid fa-chevron-down"></i></Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item><Link to={'/shop/category=phone'}>{t("Telefon və aksesuarlar")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=large-appliances'}>{t("Böyük məişət texnikası")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=small-appliances'}>{t("Kiçik məişət texnikası")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=tv-and-audio'}>{t("Tv və audio")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=photo-technique'}>{t("Foto texnika")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=notebook-and-computer-equipment'}>{t("Notbuk və kompüter texnikası")}</Link></ListGroup.Item>
                                </ListGroup>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>{t("Mobil telefonlar")} <i class="fa-solid fa-chevron-down"></i></Accordion.Header>
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
                                    <Accordion.Header>{t("Planşetlər")} <i class="fa-solid fa-chevron-down"></i></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item onClick={() => AppleTablet()}>Apple</ListGroup.Item>
                                            <ListGroup.Item onClick={() => SamsungTablet()}>Samsung</ListGroup.Item>
                                            <ListGroup.Item onClick={() => XiaomiTablet()}>Xiaomi</ListGroup.Item>
                                            <ListGroup.Item onClick={() => OppoTablet()}>OPPO</ListGroup.Item>
                                            <ListGroup.Item onClick={() => BlackviewTablet()}>Blackview</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>{t("Telefon aksessuarları")} <i class="fa-solid fa-chevron-down"></i></Accordion.Header>
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
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>{t("Qulaqlıqlar")} <i class="fa-solid fa-chevron-down"></i></Accordion.Header>
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

            <div className="shopMain">
                {reversedItems ?
                    reversedItems.map((data, index) => {
                        return (
                            <Card key={index} style={{ width: '18rem' }}>
                                <Card.Link href={'/shop/' + data._id + "/details"}><Card.Img style={{ width: "100%", height: "200px", objectFit: "contain", marginTop: "30px" }} variant="top" src={data.img1} /></Card.Link>
                                <Card.Body>
                                    {data.category ? <p id=' '>{t(data.category)}</p> : <></>}
                                    <Card.Link className="cardTitle" href={'/shop/' + data._id + "/details"}><Card.Title>{data.productname}</Card.Title></Card.Link>
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
                                    <Card.Link href={'/shop/' + data._id + "/details"}>{t("More details")}</Card.Link>
                                    {/* <Button variant='success' style={{ cursor: "pointer", borderRadius: "10px" }} onClick={handleClick} >{t("Add to basket")}</Button> */}
                                </Card.Body>
                            </Card>
                        )
                    })
                    : <img style={{ width: "500px", height: "500px", objectFit: "contain" }} src="https://giphy.com/stickers/loading-load-buffering-iA8jNKVWY0Xldn7JIf" alt="" />
                }
            </div>
        </div >
    )
}
export default ShopPhoneComponents