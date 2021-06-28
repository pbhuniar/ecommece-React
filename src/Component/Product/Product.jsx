import React, { useEffect } from 'react'
import './Product.css'
import { product1,productid } from '../../Action/product.action'
import { useDispatch, useSelector } from 'react-redux'
import Mynavbar from '../Mynavbar/Mynavbar'
import {Row, Card, Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Product = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(product1())
    }, [dispatch])
    const product = useSelector(state => state.newProduct)

    const viewproduct =(id)=>{
        dispatch(productid(id))
        history.push(`/productview`)
        console.log("pushing prodipto");
        
    }

    console.log(product.productBox);
    return (
        <>
        <Mynavbar/>
        <div className="product-background">
                <h1>PRODUCT</h1>
                <br />
                <br />
                <Container>
                <Row>
                  
                        {product.productBox.map((data) => (
                            
                               <div>
                               <Card className="single-product-background" style={{ width: "17rem"}}>
                                    <Card.Img style={{ height: "7rem" }} variant="top" src={data.image} />
                                    <Card.Body style={{ height: "180px",background:"#CAF7E3" }}>
                                        <p style={{color:"black"}}>{data.title}</p>
                                        <Button variant="warning" onClick={()=>viewproduct(data.id)} >View</Button>
                                    </Card.Body>
                                </Card> 
                               </div>
                            
                        ))}
                       
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Product