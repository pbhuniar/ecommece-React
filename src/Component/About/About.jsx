import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
const About = () => {
    return (
        <div>
            <div style={{ background: "#000" }}>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem', borderColor: "#000" }}>

                                <Card.Body style={{ background: "#000" }}>

                                    <Card.Text style={{ textAlign: "left" }}>
                                        <ul><i class="fas fa-phone-square-alt"></i> Contact</ul>
                                        <ul>+91-1800-140-3400</ul>
                                        <ul><i class="fas fa-envelope"></i> Email address</ul>
                                        <ul>care_shoppymall@mail.me</ul>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem', borderColor: "#000" }}>

                                <Card.Body style={{ background: "#000" }}>

                                    <Card.Text style={{ textAlign: "center" }}>
                                        <ul>About</ul>
                                        <ul>Portfolio</ul>
                                        <ul>Contact us</ul>
                                        <ul>Home</ul>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem', borderColor: "#000" }}>

                                <Card.Body style={{ background: "#000" }}>

                                    <Card.Text>
                                        <ul> Ipsum is not simply random,Ipsum is not simply random</ul>
                                        <ul> Ipsum is not simply random text,Ipsum is not simply random text</ul>

                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <p style={{paddingBottom:"1rem",color:"red"}}>copyright@2021</p>
                </Container>
            </div>
        </div>
    )
}

export default About
