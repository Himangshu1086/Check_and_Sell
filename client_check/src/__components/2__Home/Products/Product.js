import React from 'react'
import Carousel from '../Carousel'
import Card from './Card'

function Product() {
    return (
        <>
            <div style={{marginTop:"120px"}}>
                <Card/>
            </div>
            <div className='m-5'>
                <Carousel/>
            </div>
            <div>
                <Card/>
            </div>
        </>
    )
}

export default Product
