import "./style.scss"
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Link } from 'react-router-dom'

function NotebookAndComputerEquipment() {
    const { t } = useTranslation();
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const getData = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=notebook-and-computer-equipment");
        setProduct(response.data);
        setIsLoading(false)
    };
    useEffect(() => {
        getData();
    }, [])



    //Filter Tablet
    const AppleTablet = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=appleIpad");
        setProduct(response.data);
        setIsLoading(false)
    }
    const SamsungTablet = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=samsungTablet");
        setProduct(response.data);
        setIsLoading(false)
    }
    const XiaomiTablet = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=xiaomiTablet");
        setProduct(response.data);
        setIsLoading(false)
    }
    const BlackviewTablet = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=blackviewTablet");
        setProduct(response.data);
        setIsLoading(false)
    }


    const reversedItems = [...product].reverse();
    return (
        <div className="shop">
            <div className="shopLeftBar">
                <Accordion className="filterPC" defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t('Kataloq')} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item><Link to={'/shop/category=phone'}>{t("Telefon və aksesuarlar")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=large-appliances'}>{t("Böyük məişət texnikası")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=small-appliances'}>{t("Kiçik məişət texnikası")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=tv-and-audio'}>{t("Tv və audio")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=photo-technique'}>{t("Foto texnika")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link onClick={() => window.location.reload(false)} to={'/shop/category=notebook-and-computer-equipment'}>{t("Notbuk və kompüter texnikası")}</Link></ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Planşetlər")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item onClick={() => AppleTablet()}>Apple</ListGroup.Item>
                                <ListGroup.Item onClick={() => SamsungTablet()}>Samsung</ListGroup.Item>
                                <ListGroup.Item onClick={() => XiaomiTablet()}>Xiaomi</ListGroup.Item>
                                <ListGroup.Item onClick={() => BlackviewTablet()}>Blackview</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Notbuklar")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item>Apple</ListGroup.Item>
                                <ListGroup.Item>Asus</ListGroup.Item>
                                <ListGroup.Item>Acer</ListGroup.Item>
                                <ListGroup.Item>Dell</ListGroup.Item>
                                <ListGroup.Item>HP</ListGroup.Item>
                                <ListGroup.Item>Honor</ListGroup.Item>
                                <ListGroup.Item>Lenovo</ListGroup.Item>
                                <ListGroup.Item>MSI</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Masaüstü kompüterlər")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item>HP</ListGroup.Item>
                                <ListGroup.Item>Lenovo</ListGroup.Item>
                                <ListGroup.Item>Asus</ListGroup.Item>
                                <ListGroup.Item>Dell</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Monitorlar")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item>Acer</ListGroup.Item>
                                <ListGroup.Item>AOC</ListGroup.Item>
                                <ListGroup.Item>Asus</ListGroup.Item>
                                <ListGroup.Item>Philips</ListGroup.Item>
                                <ListGroup.Item>Dell</ListGroup.Item>
                                <ListGroup.Item>HP</ListGroup.Item>
                                <ListGroup.Item>Lenovo</ListGroup.Item>
                                <ListGroup.Item>Xiaomi</ListGroup.Item>
                                <ListGroup.Item>Samsung</ListGroup.Item>
                                <ListGroup.Item>X-Game</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Kompüter aksesuarları")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item>{t("Qulaqlıq")}</ListGroup.Item>
                                <ListGroup.Item>{t("Klaviatura")}</ListGroup.Item>
                                <ListGroup.Item>{t("Mouse")}</ListGroup.Item>
                                <ListGroup.Item>{t("Mousepad")}</ListGroup.Item>
                                <ListGroup.Item>{t("Kamera")}</ListGroup.Item>
                                <ListGroup.Item>{t("Modem")}</ListGroup.Item>
                                <ListGroup.Item>{t("Portativ HDD")}</ListGroup.Item>
                                <ListGroup.Item>{t("SSD")}</ListGroup.Item>
                                <ListGroup.Item>{t("USB Flash")}</ListGroup.Item>
                                <ListGroup.Item>{t("Antiviruslar")}</ListGroup.Item>
                                <ListGroup.Item>{t("Mikrofon")}</ListGroup.Item>
                                <ListGroup.Item>{t("Təmizlik vasitələri")}</ListGroup.Item>
                                <ListGroup.Item>{t("USB Hub")}</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="filterMobile">
                    <Accordion defaultActiveKey={[]} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t('Kataloq')} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item><Link to={'/shop/category=phone'}>{t("Telefon və aksesuarlar")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=large-appliances'}>{t("Böyük məişət texnikası")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=small-appliances'}>{t("Kiçik məişət texnikası")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=tv-and-audio'}>{t("Tv və audio")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=photo-technique'}>{t("Foto texnika")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link onClick={() => window.location.reload(false)} to={'/shop/category=notebook-and-computer-equipment'}>{t("Notbuk və kompüter texnikası")}</Link></ListGroup.Item>
                                </ListGroup>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Planşetlər")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item onClick={() => AppleTablet()}>Apple</ListGroup.Item>
                                            <ListGroup.Item onClick={() => SamsungTablet()}>Samsung</ListGroup.Item>
                                            <ListGroup.Item onClick={() => XiaomiTablet()}>Xiaomi</ListGroup.Item>
                                            <ListGroup.Item onClick={() => BlackviewTablet()}>Blackview</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Notbuklar")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item>Apple</ListGroup.Item>
                                            <ListGroup.Item>Asus</ListGroup.Item>
                                            <ListGroup.Item>Acer</ListGroup.Item>
                                            <ListGroup.Item>Dell</ListGroup.Item>
                                            <ListGroup.Item>HP</ListGroup.Item>
                                            <ListGroup.Item>Honor</ListGroup.Item>
                                            <ListGroup.Item>Lenovo</ListGroup.Item>
                                            <ListGroup.Item>MSI</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Masaüstü kompüterlər")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item>HP</ListGroup.Item>
                                            <ListGroup.Item>Lenovo</ListGroup.Item>
                                            <ListGroup.Item>Asus</ListGroup.Item>
                                            <ListGroup.Item>Dell</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Monitorlar")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item>Acer</ListGroup.Item>
                                            <ListGroup.Item>AOC</ListGroup.Item>
                                            <ListGroup.Item>Asus</ListGroup.Item>
                                            <ListGroup.Item>Philips</ListGroup.Item>
                                            <ListGroup.Item>Dell</ListGroup.Item>
                                            <ListGroup.Item>HP</ListGroup.Item>
                                            <ListGroup.Item>Lenovo</ListGroup.Item>
                                            <ListGroup.Item>Xiaomi</ListGroup.Item>
                                            <ListGroup.Item>Samsung</ListGroup.Item>
                                            <ListGroup.Item>X-Game</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Kompüter aksesuarları")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item>{t("Qulaqlıq")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Klaviatura")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Mouse")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Mousepad")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Kamera")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Modem")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Portativ HDD")}</ListGroup.Item>
                                            <ListGroup.Item>{t("SSD")}</ListGroup.Item>
                                            <ListGroup.Item>{t("USB Flash")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Antiviruslar")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Mikrofon")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Təmizlik vasitələri")}</ListGroup.Item>
                                            <ListGroup.Item>{t("USB Hub")}</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>



            <div className="shopMain">
                {isLoading && <img style={{ width: "150px", height: "150px", objectFit: "contain", margin: "100px auto" }} src="https://superstorefinder.net/support/wp-content/uploads/2018/01/orange_circles.gif" alt="" />}
                {reversedItems ?
                    reversedItems.map((data, index) => {
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
        </div>
    )
}
export default NotebookAndComputerEquipment