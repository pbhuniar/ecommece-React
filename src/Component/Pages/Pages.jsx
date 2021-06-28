import React from 'react'
import Mynavbar from '../Mynavbar/Mynavbar'
import './Pages.css'
const Pages = () => {
    return (
        <div>
            <Mynavbar/>
            <p className="map-padding">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7381.922331237709!2d87.61102580426025!3d22.317308406660104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02b5c346c53fc1%3A0x222373d80184c758!2sBhunia%20gas%20provider!5e0!3m2!1sen!2sin!4v1622387899698!5m2!1sen!2sin" width="90%" height="500" style={{border:"0"}}></iframe>
            </p>
        </div>
    )
}

export default Pages
