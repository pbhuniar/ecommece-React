import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from '../Home/Home'
import Blogs from '../Blogs/Blogs'
import Register from '../Register/Register';
import Login from '../Login/Login';
import Pages from '../Pages/Pages';
import Product from '../Product/Product';
import ProductDet from '../Product/ProductDet';
import ProductCart from '../../ProductCart/ProductCart'
const Routing = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route  path="/blogs" component={Blogs}/>
                    <Route path="/pages" component={Pages}/>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/productview" component={ProductDet}/>
                    <Route path="/cart" component={ProductCart}/>
                    <Route  path="/register" component={Register}/>
                    <Route  path="/login" component={Login}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Routing
