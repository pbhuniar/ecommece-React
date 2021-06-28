import React from "react";
import { productdel, incre, decre } from "../Action/cart.action";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router'
import { Container, Row, Col } from "react-bootstrap";
import Mynavbar from "../Component/Mynavbar/Mynavbar";
import { Button, Card } from "react-bootstrap";
const Cart = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const add = (data) => {
        console.log("increase", data);
        dispatch(incre(data));
    };

    const del = (data) => {
        console.log("decrease", data);
        dispatch(decre(data));
    };

    const pdel = (data) => {
        console.log("delete product", data);
        dispatch(productdel(data));
    };

    const cartData = useSelector((state) => state.newCart);
    console.log("cart.jsx", cartData.products.length);

    const placeOrder = () => {
        history.push('/profile')
    }

    //total price 
    var y = 0;
    cartData.products.map((x) => {
        y += (x.price) * (x.quantity)
    })


    //total quantity
    var a = 0;
    cartData.products.map((x) => {
        a += (x.quantity)
    })

    return (

        <div>
            <Mynavbar />
            <h1>All items</h1>

            {cartData.products.map((x) => (
                <Container style={{ background: "White" }}>
                    <Row style={{ borderStyle: "outset", marginBottom: "1rem", paddingTop: "1rem" }}>

                        <Col><img style={{ height: "5rem", width: "4rem" }} src={x.image} /></Col>

                        <Col>
                            <h6 style={{ color: "black" }}>{x.title}</h6>
                        </Col>

                        <Col>
                            <Button style={{ borderRadius: "50%" }} onClick={() => { add(x.id) }}> + </Button>
                            {x.quantity}
                            <Button variant="success" style={{ borderRadius: "50%" }} onClick={() => { del(x.id) }}>-</Button>

                        </Col>

                        <Col>
                            <h5 style={{ color: "red" }}>Price</h5>
                            <p style={{ color: "red" }}>{x.price * x.quantity}</p>
                        </Col>
                        <Col>
                            <Button variant="danger" onClick={() => { pdel(x.id) }}>Delete</Button>
                        </Col>
                    </Row>
                </Container>
            ))}

            <Container>
                <Card style={{ width: '50%', marginLeft: "50%",background:"#47597E"}}>
                   
                    <Card.Body>

                        <Card.Text>
                            <h4>Cart Quantity: {a}</h4>
                            <br />
                            <div>
                                <h4>Total Price: {y}</h4>
                            </div>

                        </Card.Text>
                        <Button onClick={placeOrder}>Place order</Button>
                    </Card.Body>
                </Card>
            </Container>


        </div>
    );
};

export default Cart;
