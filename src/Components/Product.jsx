import React from 'react'
import "../Css/style.css";
import { product } from "../Data"

const Product = () => {
    return (
        <section className='products' id='products'>
            <h1 className='heading'>
                our <span>products</span>
            </h1>
            <div className="box-container">
                {
                    product.map((item, key) => (
                        <div className="box">
                            <div className='icons'>
                                <a href="#" className='fas fa-shopping-cart'></a>
                                <a href="#" className='fas fa-heart'></a>
                                <a href="#" className='fas fa-eye'></a>
                            </div>
                            <div className="image">
                                <img src={item.img} alt="image" />
                            </div>
                            <div className="content">
                                <h3>Fresh cofee</h3>
                                <div className="stars">
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star-half-alt' />
                                </div>
                                <div className="price">
                                    $15.99 <span>$20.99</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Product