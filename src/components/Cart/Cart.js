import React from 'react';

const Cart = (props) => {
    console.log(props);
    const { cart } = props
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    return (
        <div>
            <h1>Order Items</h1>
            <h5>Items order: {props.cart.length}</h5>
            <br />
            <h4>Total: {total.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;