import React from 'react'
import './Home.css'
import { Button, Carousel, Container, Row, Col } from 'react-bootstrap'
import Mynavbar from '../Mynavbar/Mynavbar'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
         <Mynavbar/>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        style={{ height: "35rem" }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="slider-tag">Find Product For Shop</h1>
                        <Link to="./product"><Button className='Home-button' variant="primary" size="lg">Shop Now !</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "35rem" }}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{textAlign:"left"}}>
                        <h1 className="slider-tag">Top Unique Products Here</h1>
                        <Link to="./product"><Button className='Home-button' variant="primary" size="lg">Shop Now !</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "35rem" }}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1201613/pexels-photo-1201613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="slider-tag">“You can always find something you want.”</h1>
                        <Link to="./product"><Button className='Home-button' variant="primary" size="lg">Shop Now !</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div style={{backgroundColor:"white",height:"1rem"}}>

            </div>
            <div className="cont-outer">
            <Container fluid="md" className="cont-img" >
                <Row>
                    <Col>
                        <img className="col-img" src="https://images.pexels.com/photos/1760900/pexels-photo-1760900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        
                        <Button className="my-btn">SALE !</Button>
                    </Col>
                    <Col>
                        <img className="col-img" src="https://images.pexels.com/photos/4307688/pexels-photo-4307688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <Button className="my-btn">WOMEN </Button>
                    </Col>
                    <Col>
                        <img className="col-img" src="https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <Button className="my-btn">MEN</Button>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <img className="col-img" src="https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <Button className="my-btn">ACCESSORIES</Button>
                    </Col>

                    <Col>
                        <img className="col-img" src="https://images.pexels.com/photos/4695175/pexels-photo-4695175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <Button className="my-btn">SHOES</Button>
                    </Col>
                    <Col>
                        <img className="col-img" src="https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <Button className="my-btn">NEW !</Button>
                    </Col>
                </Row>

            </Container>
            </div>
         


        </div>
    )
}

export default Home
