import React from 'react'
import {Navbar} from 'react-bootstrap'
import Mynavbar from '../Mynavbar/Mynavbar'

import './Blogs.css'
const Blogs = () => {
    return (
        <div>
           <Mynavbar/>
            <Navbar bg="light">
                Home/News
            </Navbar>
            <div className='first-heading'>
                <h2>NEWS</h2>
            </div>
        </div>
    )
}

export default Blogs
