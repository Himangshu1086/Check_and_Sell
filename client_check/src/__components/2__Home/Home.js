import React from 'react'
import Carousel from './Carousel'
import Product from './Products/Product'

function Home() {
    return (
        <div>
            <div style={{position:"absolute" , top:"40%",left:"50%" ,transform: "translate(-50%, -50%)" , justifyContent:"center" , zIndex:"5" , color:"white" , textAlign:"center"}}>
                <h1>Check</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

                    <p style={{fontWeight:"lighter"}}> - Someone famous in Source Title</p>
            </div>
            <Carousel/>
            <Product/>
        </div>
    )
}

export default Home
