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
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=large-appliances");
        setProduct(response.data);
        setIsLoading(false)
    };

    // Filter
    const AllRefrigeration = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=refrigeration");
        setProduct(response.data);
        setIsLoading(false)
    }
    const AllWashingMachine = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=washingMachine");
        setProduct(response.data);
        setIsLoading(false)
    }
    const AllDishwashers = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=dishwashers");
        setProduct(response.data);
        setIsLoading(false)
    }
    const AllAirConditioning = async () => {
        setIsLoading(true)
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products?categories=air-conditioning");
        setProduct(response.data);
        setIsLoading(false)
    }



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
                                <ListGroup.Item><Link onClick={() => window.location.reload(false)} to={'/shop/category=large-appliances'}>{t("Böyük məişət texnikası")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=small-appliances'}>{t("Kiçik məişət texnikası")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=tv-and-audio'}>{t("Tv və audio")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=photo-technique'}>{t("Foto texnika")}</Link></ListGroup.Item>
                                <ListGroup.Item><Link to={'/shop/category=notebook-and-computer-equipment'}>{t("Notbuk və kompüter texnikası")}</Link></ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Stasionar")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item onClick={() => AllRefrigeration()}>{t("Soyuducu")}</ListGroup.Item>
                                <ListGroup.Item onClick={() => AllWashingMachine()}>{t("Paltaryuyan maşınlar")}</ListGroup.Item>
                                <ListGroup.Item onClick={() => AllDishwashers()}>{t("Qabyuyanlar")}</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("İqlim")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item onClick={() => AllAirConditioning()}>{t("Kondisioner")}</ListGroup.Item>
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
                                    <ListGroup.Item><Link onClick={() => window.location.reload(false)} to={'/shop/category=large-appliances'}>{t("Böyük məişət texnikası")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=small-appliances'}>{t("Kiçik məişət texnikası")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=tv-and-audio'}>{t("Tv və audio")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=photo-technique'}>{t("Foto texnika")}</Link></ListGroup.Item>
                                    <ListGroup.Item><Link to={'/shop/category=notebook-and-computer-equipment'}>{t("Notbuk və kompüter texnikası")}</Link></ListGroup.Item>
                                </ListGroup>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("Stasionar")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item onClick={() => AllRefrigeration()}>{t("Soyuducu")}</ListGroup.Item>
                                            <ListGroup.Item onClick={() => AllWashingMachine()}>{t("Paltaryuyan maşınlar")}</ListGroup.Item>
                                            <ListGroup.Item onClick={() => AllDishwashers()}>{t("Qabyuyanlar")}</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><ListGroup.Item style={{ width: "100%" }}>{t("İqlim")} <i className="fa-solid fa-chevron-down"></i></ListGroup.Item></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            <ListGroup.Item onClick={() => AllAirConditioning()}>{t("Kondisioner")}</ListGroup.Item>
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
                                    {/* {data.stock == 'true' && <Card.Text>Stokda var</Card.Text>} */}
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    {data.salePrice ?
                                        <ListGroup.Item style={{ display: "flex", gap: "10px" }}>
                                            <p className="salePrice" style={{ textDecoration: "line-through" }}>AZN {data.salePrice}</p>
                                            <p>AZN {data.price}</p>
                                        </ListGroup.Item>
                                        : <ListGroup.Item>AZN {data.price}</ListGroup.Item>
                                    }
                                    {data.dishwasherCapacity ? <ListGroup.Item>{t("Dishwasher capacity")}: {t(data.dishwasherCapacity)}</ListGroup.Item> : <></>}
                                    {data.typeOfCooling ? <ListGroup.Item>{t("Type of cooling")}: {data.typeOfCooling}</ListGroup.Item> : <></>}
                                    {data.classOfEnergyConsumption ? <ListGroup.Item>{t("Class of energy consumption")}: {data.classOfEnergyConsumption}</ListGroup.Item> : <></>}
                                    {data.washingMachineCapacity ? <ListGroup.Item>{t("Washing machine capacity")}: {t(data.washingMachineCapacity)}</ListGroup.Item> : <></>}
                                    {data.energyClassWashingMachine ? <ListGroup.Item>{t("Energy class")}: {data.energyClassWashingMachine}</ListGroup.Item> : <></>}
                                    {data.recommendedRoomArea ? <ListGroup.Item>{t("Recommended room area")}: {data.recommendedRoomArea}</ListGroup.Item> : <></>}
                                    {data.compressorType ? <ListGroup.Item>{t("Compressor type")}: {data.compressorType}</ListGroup.Item> : <></>}
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