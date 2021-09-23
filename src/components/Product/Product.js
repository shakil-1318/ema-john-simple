import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { name, img, price, stock, seller } = props.product
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='single-product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
                <p><small>by: {seller}</small></p>
                <h5>${price}</h5>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button
                    onClick={() => props.handleProductToCart(props.product)}
                    className="btn-regular"
                >{cartIcon}add to purchase</button>
            </div>
        </div>
    );
};

export default Product;