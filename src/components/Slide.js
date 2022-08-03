import React from 'react'
import '../index.css'
import image1 from '../assets/image-8.jpg'

const Slide = () => {
    return (
        <div className="title">
            <h3>DRAW TO WIN 🏆</h3>
            <p>Create your user ID and name to draw the prize.</p>
        <div className="Image__container">
            <img src={image1} alt="furniture"/>
        </div>
        </div>
    )
}

export default Slide
