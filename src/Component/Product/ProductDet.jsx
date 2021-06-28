import React, { useEffect } from 'react'
import { productid} from '../../Action/product.action'
import { useDispatch, useSelector } from 'react-redux'
import {addCart} from '../../Action/cart.action'
import './view.css'
import Mynavbar from '../Mynavbar/Mynavbar'
import { Link } from 'react-router-dom'
const ProductDet = () => {

 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productid())
    }, [dispatch])


    const state = useSelector(state => state.newProduct)

    const xid = state.productview

    const cart =()=>{
      const data = {...xid,quantity:1}
      dispatch(addCart(data))
    }



    return (
        <>
            <Mynavbar />
           
            <body>
  <main>
    <div className="card">
      <div className="card__title">
        
        <div className="icon">
          <Link  to="./product"><a style={{ color: '#FFF' }} href="#"><i className="fa fa-arrow-left"></i></a></Link> 
        </div>
        <h3>New products</h3>
      </div>
      <div className="card__body">
        <div className="half">
          <div className="featured_text">
            <h6>{xid.title}</h6>
           
            <p className="price">Price ${xid.price}</p>
          </div>
          <div className="image">
            <img  src={xid.image}/>
          </div>
        </div>
        <div className="half">
          <div className="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.</p>
          </div>
          <span className="stock"><i className="fa fa-pen"></i> In stock</span>
          <div className="reviews">
            <ul className="stars">
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star-o"></i></li>
            </ul>
            <span>(64 reviews)</span>
          </div>
        </div>
      </div>
      <div className="card__footer">
        <div className="recommend">
         
        </div>
        <div className="action">
          <button onClick={cart} >Add to cart</button>
        </div>
      </div>
    </div>
  </main>
</body>
        </>
    )
}

export default ProductDet
