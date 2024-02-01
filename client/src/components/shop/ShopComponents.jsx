import "./style.scss"
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import { useDispatch } from "react-redux";
// import { addProduct } from '../../redux/cartRedux';

function ShopComponents() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=" "
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </a>
    ));
    // Dropdown needs access to the DOM of the Menu to measure it
    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <Form.Control
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to filter..."
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );


    const { t } = useTranslation();
    const [product, setProduct] = useState([])

    const getData = async () => {
        const response = await axios.get("https://electronics-store-api.vercel.app/api/products/");
        setProduct(response.data);
    };
    useEffect(() => {
        getData();
    }, [])

    // const dispatch = useDispatch();
    // const handleClick = () => {
    //     dispatch(addProduct({ ...product }))
    // }


    function filterPhone() {
        axios.get("https://electronics-store-api.vercel.app/api/products?categories=phone")
            .then(res => {
                setProduct(res.data)
            })
    }
    const reversedItems = [...product].reverse();
    return (
        <div className="shop">
            <div className="shopLeftBar">
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{t('Kataloq')} <i class="fa-solid fa-chevron-down"></i></Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item onClick={() => filterPhone()}>{t("Telefon və aksesuarlar")}</ListGroup.Item>
                                <ListGroup.Item>{t("Böyük məişət texnikası")}</ListGroup.Item>
                                <ListGroup.Item>{t("Kiçik məişət texnikası")}</ListGroup.Item>
                                <ListGroup.Item>{t("Tv və audio")}</ListGroup.Item>
                                <ListGroup.Item>{t("Foto texnika")}</ListGroup.Item>
                                <ListGroup.Item>{t("Notbuk və kompüter texnikası")}</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Filter #2 <i class="fa-solid fa-chevron-down"></i></Accordion.Header>
                        <Accordion.Body>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">Reng</Dropdown.Toggle>
                                <Dropdown.Menu as={CustomMenu}>
                                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Orange</Dropdown.Item>
                                    <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>



            <div className="shopMain">
                {product ?
                    reversedItems.map((data, index) => {
                        return (
                            <Card style={{ width: '18rem' }}>
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
                    :
                    <img style={{ width: "100%", objectFit: "contain" }} src="https://media3.giphy.com/media/iA8jNKVWY0Xldn7JIf/giphy.gif?cid=6c09b952hs05y2z70j2qgl62oy9oaa7qf9y5by7n0emmb370&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="" />
                }
            </div>
        </div>
    )
}
export default ShopComponents