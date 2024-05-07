import "./style.scss";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ShopComponents() {
    const { t } = useTranslation();
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const getData = async () => {
        setIsLoading(true);
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products");
        setProduct(response.data);
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    const reversedItems = [...product].reverse();
 
    
    const totalPages = Math.ceil(reversedItems.length / productsPerPage); 
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = reversedItems.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                                <ListGroup.Item><Link to={'/shop/category=notebook-and-computer-equipment'}>{t("Notbuk və kompüter texnikası")}</Link></ListGroup.Item>
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
                                    <ListGroup.Item><Link to={'/shop/category=notebook-and-computer-equipment'}>{t("Notbuk və kompüter texnikası")}</Link></ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>

            <div className="shopMain" style={{ flexDirection: "column" }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {isLoading && <img style={{ width: "150px", height: "150px", objectFit: "contain", margin: "100px auto" }} src="https://superstorefinder.net/support/wp-content/uploads/2018/01/orange_circles.gif" alt="" />}
                    {currentProducts.map((data, index) => {
                        return (
                            <Card key={index} style={{ width: '18rem' }}>
                                <Card.Link href={'/shop/category=' + data.categories[0] + '/' + data._id + '/details'}><Card.Img style={{ width: "100%", height: "200px", objectFit: "contain", marginTop: "50px" }} variant="top" src={data.img1} /></Card.Link>
                                <Card.Body>
                                    {data.category ? <p id='category'>{t(data.category)}</p> : <></>}
                                    {data.salePrice ? <p id='negdalis'>{t('Nağd alışda')} {data.salePrice - data.price} {t('manat endirim')}</p> : <></>}
                                    <Card.Link className="cardTitle" href={'/shop/category=' + data.categories[0] + '/' + data._id + '/details'}><Card.Title>{data.productname}</Card.Title></Card.Link>
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
                                    {data.storage ? <ListGroup.Item><p>{t("Storage")}: {data.storage}</p></ListGroup.Item> : <></>}
                                    {data.ram ? <ListGroup.Item><p>RAM: {data.ram}</p></ListGroup.Item> : <></>}
                                    {data.typeOfCooling ? <ListGroup.Item>{t("Type of cooling")}: {data.typeOfCooling}</ListGroup.Item> : <></>}
                                    {data.classOfEnergyConsumption ? <ListGroup.Item>{t("Class of energy consumption")}: {data.classOfEnergyConsumption}</ListGroup.Item> : <></>}
                                    {data.washingMachineCapacity ? <ListGroup.Item>{t("Washing machine capacity")}: {t(data.washingMachineCapacity)}</ListGroup.Item> : <></>}
                                    {data.energyClassWashingMachine ? <ListGroup.Item>{t("Energy class")}: {data.energyClassWashingMachine}</ListGroup.Item> : <></>}
                                    {data.recommendedRoomArea ? <ListGroup.Item>{t("Recommended room area")}: {data.recommendedRoomArea}</ListGroup.Item> : <></>}
                                    {data.compressorType ? <ListGroup.Item>{t("Compressor type")}: {data.compressorType}</ListGroup.Item> : <></>}
                                </ListGroup>
                                <Card.Body style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                    <Card.Link href={'/shop/category=' + data.categories[0] + '/' + data._id + '/details'}>{t("More details")}</Card.Link>
                                </Card.Body>
                            </Card>
                        );
                    })}
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
        </div>
    );
}

export default ShopComponents;
