import "./style.scss"
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Link } from 'react-router-dom'

function LargeAppliances() {
    const { t } = useTranslation();
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=small-appliances");
        setProduct(response.data);
        setIsLoading(false)
    };
    useEffect(() => {
        getData();
    }, [])


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
                                <ListGroup.Item><Link onClick={() => window.location.reload(false)} to={'/shop/category=small-appliances'}>{t("Kiçik məişət texnikası")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=tv-and-audio'}>{t("Tv və audio")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=photo-technique'}>{t("Foto texnika")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=notebook-and-computer-equipment'}>{t("Notbuk və kompüter texnikası")}</Link></ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Mətbəx")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item>{t("Ətçəkənlər")}</ListGroup.Item>
                                <ListGroup.Item>{t("Şirəçəkən")}</ListGroup.Item>
                                <ListGroup.Item>{t("Mikser")}</ListGroup.Item>
                                <ListGroup.Item>{t("Blenderlər")}</ListGroup.Item>
                                <ListGroup.Item>{t("Çaydanlar")}</ListGroup.Item>
                                <ListGroup.Item>{t("Multibişiricilər")}</ListGroup.Item>
                                <ListGroup.Item>{t("Tosterlər")}</ListGroup.Item>
                                <ListGroup.Item>{t("Mətbəx robotu")}</ListGroup.Item>
                                <ListGroup.Item>{t("Fritozlar")}</ListGroup.Item>
                                <ListGroup.Item>{t("Doğrayıcılar")}</ListGroup.Item>
                                <ListGroup.Item>{t("Buxarlı bişiricilər")}</ListGroup.Item>
                                <ListGroup.Item>{t("Elektrikli sac")}</ListGroup.Item>
                                <ListGroup.Item>{t('Su filtri')}</ListGroup.Item>
                                <ListGroup.Item>{t('Samovarlar')}</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Robot tozsoranlar")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item>Xiaomi</ListGroup.Item>
                                <ListGroup.Item>Kyvol</ListGroup.Item>
                                <ListGroup.Item>Roborock</ListGroup.Item>
                                <ListGroup.Item>Eufy</ListGroup.Item>
                                <ListGroup.Item>Samsung</ListGroup.Item>
                                <ListGroup.Item>Yeedi</ListGroup.Item>
                                <ListGroup.Item>Ecovacs</ListGroup.Item>
                                <ListGroup.Item>Fakir</ListGroup.Item>
                                <ListGroup.Item>Tefal</ListGroup.Item>
                                <ListGroup.Item>Karcher</ListGroup.Item>
                                <ListGroup.Item>Viomi</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Tozsoran")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item>Hotpoint Ariston</ListGroup.Item>
                                <ListGroup.Item>Panasonic</ListGroup.Item>
                                <ListGroup.Item>Samsung</ListGroup.Item>
                                <ListGroup.Item>Xiaomi</ListGroup.Item>
                                <ListGroup.Item>LG</ListGroup.Item>
                                <ListGroup.Item>Fakir</ListGroup.Item>
                                <ListGroup.Item>Philips</ListGroup.Item>
                                <ListGroup.Item>Karcher</ListGroup.Item>
                                <ListGroup.Item>Tefal</ListGroup.Item>
                                <ListGroup.Item>Baseus</ListGroup.Item>
                                <ListGroup.Item>Bosch</ListGroup.Item>
                                <ListGroup.Item>Hitachi</ListGroup.Item>
                                <ListGroup.Item>Kenwood</ListGroup.Item>
                                <ListGroup.Item>Arnica</ListGroup.Item>
                                <ListGroup.Item>Gorenje</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Qab-qacaq")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <li>{t("Qazanlar")}</li>
                                <ListGroup.Item>{t("Tavalar")}</ListGroup.Item>
                                <ListGroup.Item>{t('Bıçaqlar')}</ListGroup.Item>
                                <ListGroup.Item>{t('Çörəkqabı')}</ListGroup.Item>
                                <ListGroup.Item>{t("Termoslar")}</ListGroup.Item>
                                <ListGroup.Item>{t("Mətbəx ləvazimatları")}</ListGroup.Item>
                                <ListGroup.Item>{t("Yemək dəsti")}</ListGroup.Item>
                                <ListGroup.Item>{t("Cehizlik dəst")}</ListGroup.Item>
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
                                    <ListGroup.Item><Link onClick={() => window.location.reload(false)} to={'/shop/category=small-appliances'}>{t("Kiçik məişət texnikası")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=tv-and-audio'}>{t("Tv və audio")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=photo-technique'}>{t("Foto texnika")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=notebook-and-computer-equipment'}>{t("Notbuk və kompüter texnikası")}</Link></ListGroup.Item>
                                </ListGroup>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Mətbəx")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item>{t("Ətçəkənlər")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Şirəçəkən")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Mikser")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Blenderlər")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Çaydanlar")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Multibişiricilər")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Tosterlər")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Mətbəx robotu")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Fritozlar")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Doğrayıcılar")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Buxarlı bişiricilər")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Elektrikli sac")}</ListGroup.Item>
                                            <ListGroup.Item>{t('Su filtri')}</ListGroup.Item>
                                            <ListGroup.Item>{t('Samovarlar')}</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Robot tozsoranlar")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item>Xiaomi</ListGroup.Item>
                                            <ListGroup.Item>Kyvol</ListGroup.Item>
                                            <ListGroup.Item>Roborock</ListGroup.Item>
                                            <ListGroup.Item>Eufy</ListGroup.Item>
                                            <ListGroup.Item>Samsung</ListGroup.Item>
                                            <ListGroup.Item>Yeedi</ListGroup.Item>
                                            <ListGroup.Item>Ecovacs</ListGroup.Item>
                                            <ListGroup.Item>Fakir</ListGroup.Item>
                                            <ListGroup.Item>Tefal</ListGroup.Item>
                                            <ListGroup.Item>Karcher</ListGroup.Item>
                                            <ListGroup.Item>Viomi</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Tozsoran")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item>Hotpoint Ariston</ListGroup.Item>
                                            <ListGroup.Item>Panasonic</ListGroup.Item>
                                            <ListGroup.Item>Samsung</ListGroup.Item>
                                            <ListGroup.Item>Xiaomi</ListGroup.Item>
                                            <ListGroup.Item>LG</ListGroup.Item>
                                            <ListGroup.Item>Fakir</ListGroup.Item>
                                            <ListGroup.Item>Philips</ListGroup.Item>
                                            <ListGroup.Item>Karcher</ListGroup.Item>
                                            <ListGroup.Item>Tefal</ListGroup.Item>
                                            <ListGroup.Item>Baseus</ListGroup.Item>
                                            <ListGroup.Item>Bosch</ListGroup.Item>
                                            <ListGroup.Item>Hitachi</ListGroup.Item>
                                            <ListGroup.Item>Kenwood</ListGroup.Item>
                                            <ListGroup.Item>Arnica</ListGroup.Item>
                                            <ListGroup.Item>Gorenje</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Qab-qacaq")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <li>{t("Qazanlar")}</li>
                                            <ListGroup.Item>{t("Tavalar")}</ListGroup.Item>
                                            <ListGroup.Item>{t('Bıçaqlar')}</ListGroup.Item>
                                            <ListGroup.Item>{t('Çörəkqabı')}</ListGroup.Item>
                                            <ListGroup.Item>{t("Termoslar")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Mətbəx ləvazimatları")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Yemək dəsti")}</ListGroup.Item>
                                            <ListGroup.Item>{t("Cehizlik dəst")}</ListGroup.Item>
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
export default LargeAppliances